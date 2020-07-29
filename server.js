require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

dotenv.config();
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');
const koaBody = require('koa-body');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

const server = new Koa();
const router = new KoaRouter();

let products = []; // database would attach here

/* Our API, allows us to call things from within the authenticated parts of our app.
  meanwhile anything in our public folders, can be call on by our authenticated Application API.
*/

// ctx is context object in koa, it contains response, request etc
router.post('/api/products', koaBody(), async (ctx) => {
  try {
    const { body } = ctx.request;
    products.push(body);
    ctx.body = 'item added';
  } catch (error) {
    console.warn(error);
  }
});

router.get('/api/products', async (ctx) => {
  try {
    ctx.body = {
      status: 'success',
      data: products,
    };
  } catch (error) {
    console.warn(error);
  }
});

router.delete('/api/products', koaBody(), async (ctx) => {
  try {
    products = [];
    ctx.body = 'All items deleted.';
  } catch (error) {
    console.warn(error);
  }
});

/* authentication, hits shopify API and provides API keys to allow the
  app to register as legitimate. then redirects to the home route. */
app.prepare().then(() => {
  server.use(session({ secure: true, sameSite: 'none' }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: [
        'read_products',
        'write_products',
        'read_script_tags',
        'write_script_tags',
      ],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        ctx.cookies.set('shopOrigin', shop, {
          httpOnly: false,
          secure: true,
          sameSite: 'none',
        });
        ctx.redirect('/');
      },
    }),
  );

  server.use(router.allowedMethods());
  server.use(router.routes());

  server.use(graphQLProxy({ version: ApiVersion.October19 }));
  server.use(verifyRequest());
  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  server.listen(port, () => {
    console.log(`Ready on https://localhost:${port}`);
  });
});
