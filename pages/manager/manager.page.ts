import { BasePage } from "../base.page";
import { AddCustomerPage } from "./add.customer.page";
import { CustomersPage } from "./customers.page";

export class ManagerPage extends BasePage {
    addCustomerButton = this.page.locator('[type="submit"]');
    customersButton = this.page.getByRole('button', { name: 'Customers' });

    async openAddCustomer() {
        await this.addCustomerButton.click();
        return new AddCustomerPage(this.page);
    }

    async openCustomers() {
        await this.customersButton.click();
        return new CustomersPage(this.page);
    }
}