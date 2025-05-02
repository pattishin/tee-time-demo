# tee-time-demo

## Getting started

### 1. Clone the repository

Clone the repository, navigate into it and install dependencies:

```
npm install
```

### 2. Configure environment variables

Create a `.env` in the root of the project directory:

```bash
touch .env
```

```bash
# .env

# Accelerate connection string (used for queries by Prisma Client)
DATABASE_URL="__YOUR_ACCELERATE_CONNECTION_STRING__"

# Database connection string (used for migrations by Prisma Migrate)
DIRECT_URL="__YOUR_DATABASE_CONNECTION_STRING__"

NEXT_PUBLIC_URL="http://localhost:3000"
```


### 3. Run a migration to create the `Quotes` table and seed the database


```
npx prisma migrate dev --name init
```

```
npx prisma db seed
```

### 4. Generate Prisma Client for Accelerate

When using Accelerate, Prisma Client doesn't need a query engine. That's why you should generate it as follows:

```
npx prisma generate --no-engine
```

### 5. Start the app

You can run the app with the following command:

```
npm run dev
```

## Resources
