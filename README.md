# React component library with typescript Boilerplate

This boilerplate will help you to understand how to

-   create themable react component library with the help of react, style-components, typescript & babel 7.
-   write unit tests for components with the help of jest & react-testing-library.
-   transpile typescript files with the help of babel 7.
-   develop components with live reloading wityh the help of storybook

## Getting Started

-   You can build your own library by just downloading this repo and change the project name.
-   You can also use the existing components to build your project. you can install the components using `npm i -S @react-basis/core`.
-   You can also checkout the components [here](http://mukulbansal.com/react-basis).

## Major things to remember

If you want to add any alias then you have to add in below files

-   tsconfig file at the project level so that storybook can understand the alias.
-   tsconfig file at the package level so that your typescript and babel can understand the alias while building packages
-   jest.config.js so that jest can understand the alias.

Before publishing your components you have to create npm user account and org account as well to use the org name as the scope. For eg. I have created `react-basis` org so that I can use as the scope.

## Built With

🔥 [react](https://github.com/facebook/react)

💅 [styled-components](https://www.styled-components.com)

⛑ [typescript](https://www.typescriptlang.org/)

📚 [storybook](https://storybook.js.org/)

💥 [babel](https://babeljs.io/)

🐐 [react-testing-library](https://github.com/kentcdodds/react-testing-library)

## npm scripts

-   `yarn build` to build components
-   `yarn commit` to commit with conventional-commit approach
-   `yarn lint:css` to run the css lint
-   `yarn lint:ts` to run the ts lint
-   `yarn lint` to run both css & ts lint
-   `yarn test` to run tests and type check
-   `yarn test:update` to upgrate snapshots
-   `yarn test:watch` to watch tests
-   `yarn type-check` to run tsc to check types
-   `yarn test:jest` to run test only
-   `yarn storybook` to run storybook for live reloading your components
-   `yarn release` to publish your components

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/gmukul01/react-redux-ts-boilerplate/blob/master/LICENSE) file for details
