# Neumorphism Pannel (Working on deving...)

## Start Project

```shell
# install in root Dir
yarn
# build component lib
cd packages/neumorphism-pannel
yarn build
# build preview
cd neumorphism-preview
yarn build
# start preview
cd neumorphism-preview
yarn dev
```

## Git Rules

* [1] -- Branch Rule (branchnamelint.json)
* * branch name: prefixes/featureName
* * * Example: feature/cleancode

* [2] -- Commit Rule (commitlint.config.js)
* * commit command: git commit -m "prefixes: message"
* * * Example: git commit -m "feat: clean code"

## Preview

* Web Preview: https://neumorphismwrapper-react-neumorphism-pannel.vercel.app/

## Enviroment Needs

* Vite >=v3.0.0 and Node >=v16

## Project Skill Stack

* React 18
* Typescript 4
* Tailwind CSS
* components lib tool: rollup
* Vite 3: include .env
* Lint: eslint
* git hooks: husky
* git branch checker: branch-name-lint
* git commit formatter: commitlint
* Unit test: Vitest 3 + VitestUI + @vitest/coverage-c8 + @testing-library/react + @testing-library/jest-dom
* CI&CD: https://vercel.com/


## why use lint-stage
* It will just check file that is edited this time in lint-stage hooks.

## Preview (By vercel CI&CD)
* Web Preview: https://neumorphismwrapper-react-neumorphism-pannel.vercel.app/
* Unit Test Coverage: 

# Leran Command Example
```shell
# must init lerna
npx lerna@latest init
# add dependency
npx lerna add terser --scope=neumorphism-preview --dev
# add local dependency (insert neumorphism-pannel to neumorphism-preview)
npx lerna add neumorphism-pannel --scope=neumorphism-preview
```

## Study From
* https://github.com/adamgiebl/neumorphism

