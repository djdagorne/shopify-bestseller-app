const body = $('body');

body.css({
  position: 'relative',
});

const { shop } = Shopify;

const makeApp = (products) => {
  const bestSellerContainer = $(
    `<div>
      <h3 style="padding: 5px;">Our Best Sellers </h3>
      ${products.map((item) => `
        <a href="/products" style="
          display: flex;
          align-items: center;
          padding: 20px 10px;
          border-top: 1px solid black;"
        >
          <img src=${item.images[0].originalSrc} style="width: 75px;" />
          <div style="
            display: flex; 
            justify-content: space-between; 
            align-items: start; 
            width: 100%;" 
          > 
            <p style="padding: 0 10px; ">${item.title}</p>
            <p>${item.variants[0].price}</p>
          </div>
        </a>
        `).join('')}
    </div>`,
  ).css({
    position: 'fixed',
    'background-color': '#ffffff',
    margin: '10px',
    border: '1px solid black',
    bottom: '80px',
    right: '25px',
    height: '400px',
    width: '350px',
    display: 'none',
    overflowY: 'scroll',
  });

  const bestSellerButton = $('<img />').attr('src', 'https://cdn.shopify.com/s/files/1/0325/3174/2765/files/bestseller-button-trans.png')
    .css({
      position: 'fixed',
      width: '150px',
      bottom: '20px',
      right: '20px',
      cursor: 'pointer',
    });

  body.append(bestSellerButton);
  body.append(bestSellerContainer);

  bestSellerButton.click(() => {
    bestSellerContainer.slideToggle();
  });
};

fetch('https://cors-anywhere.herokuapp.com/https://adf7e9d013ed.ngrok.io/api/products?shop=dexters-test-store-sample.myshopify.com/')
  .then((result) => result.json())
  .then((data) => {
    // data.data because we are accessing the data object in our ctx.body from the server doc
    makeApp(data.data);
  })
  .catch((error) => console.log(error));
