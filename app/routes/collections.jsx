// app/routes/collections.jsx
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import { prisma } from "../services/db.server"
import Polaris from "@shopify/polaris"
const { Card, ResourceList, TextStyle } = Polaris


export let loader = async () => {
  const collections = await prisma.collection.findMany({
    include: { products: true },
  })
  return json({ collections })
}

export default function Collections() {
  const { collections } = useLoaderData()

  return (
    <div style={{ padding: "20px" }}>
      <h1>Collections</h1>
      {collections.map((collection) => (
        <Card key={collection.id} title={collection.name} sectioned>
          <TextStyle variation="subdued">
            Priority: {collection.priority || "None"}
          </TextStyle>
          <ResourceList
            resourceName={{ singular: "product", plural: "products" }}
            items={collection.products}
            renderItem={(item) => (
              <ResourceList.Item id={item.id}>
                <h3>{item.title}</h3>
              </ResourceList.Item>
            )}
          />
        </Card>
      ))}
    </div>
  )
}
