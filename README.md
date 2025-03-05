# Shopify Collections App

This project is a Shopify app that allows merchants to organize their products into custom collections

## Features

- **View Collections**: Display all collections with their names, priority levels, and associated products.
- **Create Collections**: Add new collections by specifying a unique name, optional priority level, and selecting products.
- **Edit Collections**: Update existing collections, including changing the name, priority level, and associated products.
- **Shopify API Integration**: Fetch product data in real time using Shopify's Admin GraphQL API.

## Built With

- Remix.js
- Shopify Polaris
- Prisma
- MySQL

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository_url>
cd shopify-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root and add your environment variables:

```env
DATABASE_URL="mysql://root:YourNewPassword@localhost:3306/shopify_app"
SHOPIFY_DOMAIN="your-store-name.myshopify.com"
ADMIN_API_ACCESS_TOKEN="your-access-token"
```

### 4. Set Up the Database

Create a Database in MySQL (if not already created):

```sql
CREATE DATABASE shopify_app;
```

Run Prisma Migrations:

```bash
npx prisma migrate dev --name init
```

### 5. Running the Project

Start the Remix development server:

```bash
npm run dev
```

Open your browser and navigate to http://localhost:3000 (or http://localhost:5173, depending on your setup) to see the app in action.

## Routes Overview

- `/collections`: Displays all collections.
- `/collections/new`: Form to create a new collection.
- `/collections/:collectionId`: Edit an existing collection.


