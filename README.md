This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Additional Setup
If you are running this project on your local machine, you need to:

Create a Virtual Environment:

It is recommended to create a virtual environment to manage dependencies efficiently. You can use tools like virtualenv, venv, or pyenv to create a virtual environment.

## For Python 3
python -m venv env

Activate the virtual environment:

source env/bin/activate  # On macOS/Linux
.\env\Scripts\activate   # On Windows

Set the Replicate API Token:

Ensure you update the Replicate API Token in your environment variables or configuration file. This is essential for accessing the API correctly.

export REPLICATE_API_TOKEN=your_token_here  # On macOS/Linux
set REPLICATE_API_TOKEN=your_token_here     # On Windows

Once these steps are completed, you are good to go!


You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
