
// const { defineConfig } = require("cypress");
// const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       registerReportPortalPlugin(on, config);
//       return config;
//     },
//     viewportWidth: 1280,
//     viewportHeight: 720,
//   },
//   reporter: '@reportportal/agent-js-cypress',
//   reporterOptions: {
//     endpoint: 'http://localhost:8080/api/v1', // Replace with your RP server URL
//     project: 'YOUR_PROJECT_NAME',
//     token: 'YOUR_RP_TOKEN', // Find in User Profile > UUID
//     launch: 'Cypress_Tests',
//     description: 'Cypress Test Run',
//     attributes: [
//       { key: 'platform', value: 'web' }
//     ],
//   },
// });


const { defineConfig } = require('cypress');
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    apiKey: 'my-key-cypress_t2kUVwU***********G8N6Tf1jle5_Enbf8ejBCbTsXDd0PEzZlYO',
    endpoint: 'https://demo.reportportal.io/api/v1',
    project: 'work-****_personal',
    launch: 'Cypress Test Launch',
    description: 'rv',
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

// const { defineConfig } = require('cypress');
// const rpPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       rpPlugin(on, config); // Add ReportPortal plugin
//       return config;
//     },
//     specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
//     supportFile: 'cypress/support/e2e.js',
//   },
// });