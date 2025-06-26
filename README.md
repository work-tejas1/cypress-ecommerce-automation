## Cypress Integration with Report Portal
## In this tutorial we will demonstrate [Cypress](cypress.io) installation and integrate with [Report-portal](https://reportportal.io/)

---

1. Cypress installation:
- Download [Node.js](https://nodejs.org/en/download/) and install based on your system.
- Download [Visual Studio Code](https://code.visualstudio.com/Download) and install based on your system. Install with Default Configuration
- Install Cypress using below command.

```jsx
npm install cypress : Install Cypress
npx cypress open : Open Cypress 1st time then create new test cases or use use default one
```

1. Report Portal integration
    - Install report-portal dependency
    
    ```jsx
    npm install --save-dev @reportportal/agent-js-cypress
    ```
    
- Make Sure you do these changes to **`*cypress.config.js*`**

```jsx
const { defineConfig } = require('cypress');
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    apiKey: 'Your API KEY', * After login to Report Portal go to PROFILE -> API KEYS (https://demo.reportportal.io/ui/#userProfile/apiKeys)
    endpoint: 'https://demo.reportportal.io/api/v1', (required)*
    project: 'work-XYZ_personal', (Your Project Name, required)*
    launch: 'Test run Launch Name',
    description: 'Test run description',
    attributes: [
      {
        key: 'attributeKey',
        value: 'attributeValue',
      },
      {
        value: 'anotherAttributeValue',
      },
    ],
  },
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
        viewportWidth: 1280,
     viewportHeight: 720,
  },
});
```

 

- Add below code to **`..\support\commands.js`**

---
### Visual representation of test run:

![image](https://github.com/user-attachments/assets/e5024c32-4a54-493e-931e-7be2d912a302)







