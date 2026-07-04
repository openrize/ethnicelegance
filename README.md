Ethnic Elegance is a Next.js storefront with a product catalog, cart, contact form, and Stripe checkout session API.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create your env file:

```bash
copy .env.example .env.local
```

3. Add your Stripe keys in `.env.local`.

4. Run the development server:

```bash
npm run dev
```

5. Initialize local database:

```bash
npm run prisma:generate
npm run prisma:push
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Endpoints

- `POST /api/checkout` - creates Stripe Checkout session from cart items
- `GET /api/orders` - returns persisted orders
- `GET /api/orders/:id` - returns a specific order
- `POST /api/contact` - validates and records contact requests
- `POST /api/webhooks/stripe` - updates order status from Stripe events

## Testing

```bash
npm run test
```

## Useful Commands

```bash
npm run audit:images
```

Scans source files for `/images/*` references and fails if assets are missing from `public/images`.

## Notes

- Orders are now persisted in a Prisma-backed SQLite database.
- For production, switch `DATABASE_URL` to a managed Postgres instance.
