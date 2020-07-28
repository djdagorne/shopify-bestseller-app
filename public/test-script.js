console.log('this is coming from script tag api!');

const header = $('header.site-header').parent();

header.prepend('<div>hello this is a script from the public folder</div>').css({ 'background-color': 'orange', 'text-align': 'center' });
