import { test, expect } from "@core/test.fixture";

test('customer deposit', async ({ app }) => {
    await app.loginPage.open();
    const customerPage = await app.loginPage.loginAsCustomer('Albus Dumbledore');
    const depositPage = await customerPage.openDeposit();
    await depositPage.makeDeposit('11');

    await expect(app.page.getByText('11', { exact: true })).toBeVisible();
});

test('customer withdraw', async ({ app }) => {
    await app.loginPage.open();
    const customerPage = await app.loginPage.loginAsCustomer('Hermoine Granger');
    const withdrawPage = await customerPage.openWithdraw();
    await withdrawPage.makeWithdrawal('96');

    await expect(app.page.getByText('5000', { exact: true })).toBeVisible();
});