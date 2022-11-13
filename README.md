# Neumorphism Pannel (Working on deving...)

## Preview

* Web Preview: https://neumorphismwrapper-react-neumorphism-pannel.vercel.app/

## Enviroment Needs

* Vite >=v3.0.0 and Node >=v16

## Project Skill Stack

* React 18
* Typescript 4
* Tailwind CSS
* Vite 3: include .env
* Lint: eslint + stylelint
* git hooks: husky
* git commit formatter: commitlint
* Unit test: Vitest 3 + VitestUI + @vitest/coverage-c8 + @testing-library/react + @testing-library/jest-dom
* mock
* CI&CD: https://vercel.com/


## why use lint-stage
* It will just check file that is edited this time in lint-stage hooks.

## Preview (By vercel CI&CD)
* Web Preview: 
* Unit Test Coverage: 

# Leran Command
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

