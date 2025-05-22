import { test, expect } from '@core/test.fixture';
import { LoginPage } from '../pages/login.page';

test('customer login', async ({ app }) => {
    const loginPage = app.loginPage
    await loginPage.open();
    await loginPage.loginAsCustomer('Albus Dumbledore');

    await expect(app.page.getByText('Albus Dumbledore')).toBeVisible();
});

test('manager login', async ({ app }) => {
    const loginPage = app.loginPage
    await loginPage.open();
    await loginPage.loginAsManager();

    await expect(app.page.getByRole('button', { name: 'Add Customer' })).toBeVisible();
});
