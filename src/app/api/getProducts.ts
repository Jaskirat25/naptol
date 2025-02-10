export async function getProducts() {
    try {
      const wixContext = require("@wix/sdk").WixClient;
      const client = new wixContext({
        apiKey: process.env.NEXT_PUBLIC_OAUTH_SECRET_KEY,
      });
  
      const products = await client.products.queryProducts().find();
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return null;
    }
  }
  