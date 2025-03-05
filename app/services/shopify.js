// app/services/shopify.js
import fetch from "node-fetch"

const SHOPIFY_DOMAIN = process.env.SHOPIFY_DOMAIN
const ADMIN_API_ACCESS_TOKEN = process.env.ADMIN_API_ACCESS_TOKEN

export async function fetchShopifyProducts() {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            descriptionHtml
          }
        }
      }
    }
  `

  const response = await fetch(
    `https://${SHOPIFY_DOMAIN}/admin/api/2024-10/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": ADMIN_API_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query }),
    }
  )

  const data = await response.json()
  return data
}
