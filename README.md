# UsersTestWebHost

web api support users test project

# Table of contents:

- [UsersTestWebHost](#userstestwebhost)
- [Table of contents:](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
  - [Debug with VS Code](#debug-with-vs-code)

# Prerequisites

To build and run this app locally you will need a few things:

- NodeJs v12 - Install [Node.js](https://nodejs.org/en/)

# Getting started

- Clone the repository

```
git clone https://github.com/yoavh/UsersTestWebHost.git <project_name>
```

- Install dependencies

```
cd <project_name>
npm install
```

- Build and run the project

```
npm run build
npm start
```

## Debug with VS Code

1. Open command palette (cmd + shift + p) and select `Debug: Open launch.json`
2. Add Configuration

   ```
   {
     "type": "node",
    "request": "launch",
    "name": "Debug",
    "runtimeExecutable": "npm",
    "runtimeArgs": ["run-script", "debug"],
    "port": 9229,
    "skipFiles": ["<node_internals>/**"],
    "console": "integratedTerminal",
    "restart": true,
    "sourceMaps": true,
    "outFiles": ["${workspaceFolder}/dist-server/**/*.js"],
    "internalConsoleOptions": "neverOpen"
   }
   ```

3. Open command palette (cmd + shift + p) and select `Debug: Select and Start Debugging`

| Npm Script    | Description                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------- |
| `start`       | Does the same as 'npm run serve'. Can be invoked with `npm start`                                                    |
| `serve`       | Runs node on `./dist-server/bin/www.js` which is the apps entry point                                                |
| `build`       | Full build - Run eslint checks with fix than clean output build folder and than build (`lint`, `clean`, `build-ts` ) |
| `lint`        | Runs ESLint on project files with fix                                                                                |
| `clean`       | clean output build folder folder                                                                                     |
| `build-ts`    | Compiles all source `.ts` files to `.js` files in the `dist` folder                                                  |
| `watch-node`  | Runs node with nodemon so the process restarts if it crashes. Used in the main watch task                            |
| `watch`       | Runs all watch tasks (TypeScript, Node). Use this for start the app in watch mode                                    |
| `watch-ts`    | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed                                  |
| `debug`       | Performs a full build and then serves the app in watch with debug mode                                               |
| `watch-debug` | The same as `watch` but includes the --inspect flag so you can attach a debugger                                     |
| `serve-debug` | Runs the app with the --inspect flag                                                                                 |
