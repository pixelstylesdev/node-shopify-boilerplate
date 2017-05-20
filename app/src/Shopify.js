const ShopifyApp = window.ShopifyApp;
const { config } = window.shipify;
let isReady = false;

// init embedded sdk
ShopifyApp.init({
  apiKey: config.apiKey,
  shopOrigin: config.shopUrl
});

ShopifyApp.ready(() => {
	isReady = true;
	ShopifyApp.Bar.loadingOff();
});

export default {
	ready: () => isReady,
	sdk: ShopifyApp,
	api: {}
};