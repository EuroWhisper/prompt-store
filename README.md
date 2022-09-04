# Prompt Store

This web application allows users to store their favourite prompts for use with their preferred AI art generation tool(s). A prompt is a string of text e.g. "A t-rex astronaut on Mars" entered into an AI art generation tool. Said tool then generates images related to the entered prompt.

Some prompts are better than others and this project aims to help users not lose the prompts that yield them the best/most consistent results.

## Environment Variables

A .env file should be added to root of project directory with the following environment variables:

- DATABASE_URL = URL to the database
- GITHUB_ID = Github Oauth client ID
- GITHUB_SECRET = Github Oauth client secret
- GOOGLE_CLIENT_ID = Google Oauth client ID
- GOOGLE_CLIENT_SECRET = Google Oauth client secret

## Getting Started

1. `npm i` to install project dependencies
2. Add the `.env` file with environment variables mentioned in the above section
3. `npx prisma generate` to generate the Prisma client (no data or auth operations will work before doing so)
4. Finally, run the development server with `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Next.js

This project uses Next.js with TypeScript. Although this
is not a site where SEO is a priority and hence server rendering is not a necessity, Next.js is still used as its out of the box routing solution and API endpoints are very convenient. As well as being able to use next-auth for a robust authentication solution.

## TypeScript

This project uses TypeScript as I consider it to be a frontend best practice at this point and personally do not enjoy working on vanilla JS projects anymore. It helps to catch errors early and makes it easier to refactor code. The long-term time savings in exchange for short-term overhead of writing type definitions is a no-brainer in my opinion. All teams I have worked on have come to love TypeScript even if they were initially hesitant or confused by it.

## REST API

I am used to working with GraphQL and Apollo Client in particular in my day job. This is my preference, as GQL prevents over/under fetching and allows us to save time on FE by generating data fetching hooks and types directly from the schema. My most controversial opinion is probably that I believe GQL is a FE best practice because of the above.

However, I decided to use a REST API for this project as from my experience GraphQL is seemingly very controversial amongst BE developers (possibly because most of them have been working with REST for so many years already) and I don't want to forget how to work with REST APIs, as I accept I will likely have to on the job again at some point.

## React Query

This project uses React Query to fetch data from the API. I had heard my colleagues say this library was good but had never used it before and I wanted to try it for myself. I am impressed by its convenient query and mutation hooks that are familiar from Apollo Client. However, I wish it could invalidate queries automatically when a mutation is performed on the same data, which is where Apollo Client shines.

## Prisma

This project uses Prisma as an ORM. I appreciate its generated types and the time saving it gifts me with. I have not used it in production yet but I am confident it will be a good choice.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
