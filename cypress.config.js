const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Keeping the professional standard from your first repo
    baseUrl: 'https://www.saucedemo.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // The "Augmentation" feature
    experimentalStudio: true, 
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});