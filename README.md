# 🤖 KScale Web Redesign - Fall 2024

This is the repo for []()'s website redesign.

If modifying adhere files adhere to [atomic programming standards](https://www.webstacks.com/blog/atomic-design-methodology).
No need to be legalistic about it however it is a good idea to create components that have
either 1 singular purpose or 1 abstracted singular purpose.

As you will see, the code structure and files are compartmentalized
as much as possible so that it is simple to locate things.

> Clean code is always a win.

Don't let deadlines be an excuse for sloppiness, this site was made in less than 2 weeks, and we still adhered to atomic programming as much as possible.

At the end of day, don't forget to have fun and learn lots. :)

## Web Devs

- [Deborah Wang](https://github.com/mrpthemrp)
- [Nathan Lew](https://github.com/nethen)

## Tech Stack

- React
- Tailwind.css
- Next.js
- Deploy with original stack (AWS Amplify)

---

## 📷 Update Images

Need to put in new images to the landing page?

1. Add images to the `/public/photos` folder, use a meaningful name if possible
2. In `/src/util/photoPaths.tsx`:
   1. There is `photoPaths` constant where you can update the path to your image according to the variable name.
   2. Update the alt text for your photo in the same manner but with the `photoPathAltText` constant.
3. Run the site locally to make sure the links are correct and nothing breaks before merging.

## ⚠️ DO NOT CHANGE

- `_app.tsx`, `_document.ts`, `index.tsx` has to stay within the `/pages` folder or else Next.js won't build correctly.
- `/public` folder has live site things, DO NOT CHANGE
- `/src/types/*.*` don't touch anything in this folder.

## 📁 General Structure

### Images

Every media that needs to be on the site (exclude cursors and typefaces) go in the `public` folder.

The structure is:

```
.
├── public
│   ├── <intuitive name for folder of things>
│   └── ...
├── src
└── ...
```

### Code

The actual code file is pretty simple:

- `/src/pages` is the folder with the necessary pages for the site to run, try not to modify it too much unless you need to change some tags.
- `/src/styles` is the folder for anything to do with styling
  - it consists of the `/cursor` and `/fonts` folder with the respective files
  - `global.css` is where hard-coded styles and definitive styles live.
  - Most styling is done in the `tailwind.config.ts` file that lives outside the /src/ folder.
- `/src/api` is a folder with a default `hello.ts` api file. Modify this if necessary for apis.

**Where you'll be coding the most**

- `/src/components` consists of all the components and utility files are.
  - `/src/components/util` is a folder for util functions, constants, etc. Feel free to create new util files if you can't add any to the pre-existing ones
- `/src/landing` has all the different sections of the landing page. It is where changes can occur.
  - In a multipage site, this is where all the "pages" would go, but here it is just sections.

## 🌑 Dark Mode Light Mode

This site has dark/light mode configured automatically already.

Colours for dark mode are defined in global.css and the tailwind colours reference them.

> Do not hard code hex/rgba/cmyk inline as this will not configure things properly.

---

# Local Setup

Always install packages first before trying to launch locally.

```
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

After packages are installed run locally

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

[The Next.js GitHub repository](https://github.com/vercel/next.js)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---
