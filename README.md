# node-shopify-boilerplate

A template for creating node.js Shopify apps.

## Local Development

### Running

1. Launch ngrok (ngrok.exe) to tunnel a local port to a public URL (this will allow the dev store to install and run the app) - ```ngrok http 3000```.

2. Update the app URL in the config to use the one generated by ngrok. Will be something like "http://ac9e0b45.ngrok.io".

3. Launch the app - ```node server.js```.

### Configuration

1. Navigate to your app's settings page in the [partner services portal](https://app.shopify.com/services/partners/api_clients).

2. Click 'Edit app settings'.

3. In the 'App URLs' section, modify the domain for the 'App URL' and 'Redirection URL' to use the one generated by your ngrok instance.

4. Click 'Save changes'.

### Installation

1. Create a Shopify development store so you can install the embedded app.

2. Login to the store with your credentials.

3. Navitage to 'Apps' ```https://{my-store}.myshopify.com/admin/apps```.

5. Navigate to your app's store listing ```https://apps.shopify.com/{my-app}``` and click 'Get'.

6. If you aren't already logged in, enter the dev store URL and click 'Log In'.

7. Click 'Install app' on the installation page.

8. Click the app link in your store to load the embedded app.

9. Celebrate!

## TODO

1. HMAC verification
2. CLI
3. Shopify API integration example for EASDK