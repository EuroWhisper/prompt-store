## Environment Variables

A .env file should be added to root of project directory with the following environment variables:

- DATABASE_URL = URL to the database
- GITHUB_ID = Github Oauth client ID
- GITHUB_SECRET = Github Oauth client secret

## Getting Started

1. `npm i` to install project dependencies
2. Add the `.env` file with environment variables mentioned in the above section
3. `npx prisma generate` to generate the Prisma client (no data or auth operations will work before doing so)
4. Finally, run the development server with `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
