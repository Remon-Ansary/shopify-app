// app/routes/collections.new.jsx
import { Form, useActionData } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import { Card, TextField, Button, Select } from "@shopify/polaris"
import { prisma } from "../services/db.server"


export let action = async ({ request }) => {
  const formData = await request.formData()
  const name = formData.get("name")
  const priority = formData.get("priority")

  try {
    await prisma.collection.create({
      data: {
        name,
        priority: priority || null,
      },
    })
  } catch (error) {
    return { error: "Collection name must be unique" }
  }
  return redirect("/collections")
}

export default function NewCollection() {
  const actionData = useActionData()

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create a New Collection</h1>
      {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
      <Card sectioned>
        <Form method="post">
          <TextField label="Collection Name" name="name" required />
          <Select
            label="Priority Level"
            name="priority"
            options={["", "High", "Medium", "Low"]}
          />
          <Button submit primary>
            Create Collection
          </Button>
        </Form>
      </Card>
    </div>
  )
}
