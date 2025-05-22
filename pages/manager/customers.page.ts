import { expect } from "@core/test.fixture";
import { BasePage } from "../base.page";

export class CustomersPage extends BasePage {
    customersButton = this.page.getByRole('button', { name: 'Customers' });

    cellByName(name: string) {
        return this.page.getByRole('cell', { name });
    }


}