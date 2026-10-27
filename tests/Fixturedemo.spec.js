const { test,expect,request } = require('@playwright/test');
const {customtest}= require("../Utils/Fixture.js");


customtest('Fixture demo', async ({ authenticatedpage }) => {

authenticatedpage.goto("");

});
