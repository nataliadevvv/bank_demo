import { test, expect } from '@core/test.fixture';


test('manager add customer', async ({ app }) => {
    const customerData = { firstName: 'firstName', lastName: 'lastName', postCode: 'postCode' }
    await app.loginPage.open();
    const managerPage = await app.loginPage.loginAsManager();
    const addCustomerPage = await managerPage.openAddCustomer();
    await addCustomerPage.addCustomer(customerData);

    const customersPage = await managerPage.openCustomers();

    await expect(customersPage.cellByName(customerData.firstName)).toBeVisible();
});