# UsersTestWebHost

web api support users test project

- [UsersTestWebHost](#userstestwebhost)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Start Server with npm](#start-server-with-npm)
  - [Debug with VsCode](#debug-with-vscode)

### Requirements

- Node 12
- Git

### Installation

clone repo

`git clone https://github.com/yoavh/UsersTestWebHost.git`

install npm

`npm install`

### Start Server with npm

- `npm start`
- with inspect `npm run inspect`
- with nodemon and inspect `npm run watch`

### Debug with VsCode

1. Open Configurations
2. Add Configuration

   ```
   {
     "type": "node",
     "request": "launch",
     "name": "Launch via NPM",
     "runtimeExecutable": "npm",
     "runtimeArgs": ["run-script", "watch"],
     "skipFiles": ["<node_internals>/**"],
     "restart": true,
     "port": 9229,
     "sourceMaps": true,
     "outFiles": ["${workspaceFolder}/dist-server/**/*.js"],
     "console": "integratedTerminal",
     "internalConsoleOptions": "neverOpen"
   }
   ```

   - In case of runing without nodemon

     replace

     `"runtimeArgs": ["run-script", "watch"],`

     with

     `"runtimeArgs": ["run-script", "inspect"],`

3. Start Debugging
