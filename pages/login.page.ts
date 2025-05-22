import { BasePage } from "./base.page";
import { CustomerPage } from "./customer/customer.page";
import { ManagerPage } from "./manager/manager.page";

export class LoginPage extends BasePage {

    customerLoginButton = this.page.getByRole('button', { name: 'Customer Login' })
    loginButton = this.page.getByRole('button', { name: 'Login' })

    async open() {
        await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    }

    async loginAsCustomer(customer: string) {
        await this.customerLoginButton.click();
        await this.selectCustomer(customer);
        await this.loginButton.click();
        return new CustomerPage(this.page);
    }

    async loginAsManager() {
        await this.page.getByRole('button', { name: 'Bank Manager Login' }).click();
        await this.page.getByRole('button', { name: 'Add Customer' }).click();
        return new ManagerPage(this.page);
    }

    async selectCustomer(customer: string) {
        await this.page.locator('#userSelect').selectOption(customer);
    }

}