# Project structure

Here you can find a quick rundown of the project structure.

## Important Config files

- .eslintrc.cjs
  - ESLint configuration file
  - this file specifies how your code should be linted
  - it helps you to make sure that your code is valid
  - please note here that linter does not check for logical errors, only syntax
- tailwind.config.js
  - all the tailwind configuration
  - here you can add your presets for colors and override things
- postcss.config.js
  - postcss config
  - here you can add postcss plugins
- .prettierrc.json
  - prettier formatter configuration
  - opinionated, good enough and you should not change it
- tsconfig.json
  - TypeScript configuration file
  - most likely you will not need to change here anything
- .gitignore
  - here you can specify what files should not be added to the repo

---

## Components folder

This is a main components folder all separate small components and big complex feature components should go here.

- Tip: for complex feature modules, I would advice to have this structure.
- example-cart
  - ExampleCart.vue
  - ExampleCartPart1Name.vue
  - ExampleCartPart2Name.vue
  - ...
  - ExampleCartPartXName.vue
- The idea is that `ExampleCart.vue` is gonna be the entry point and the rest are just component parts and should not be used separately. So in the rest of the application you simply can do `import ExampleCart from "@/components/example-cart/ExampleCart.vue"`

---

## Views folder

This folder is meant for pages and subpages.

---

## Stores folder

In this folder you can keep all the store slices.

---

## Router

This folder will contain all the routing files. Most likely we are gonna be fine with just one file.

---

## Assets

In this folder you gonna store your local assets. Later on you might want to create additional folders here, like `img` for example

---

## Future folder you might want to create

At some point you probably might want to create additional folders to structure your code. I can see how folders like `composables` and `api` might get usefull.
