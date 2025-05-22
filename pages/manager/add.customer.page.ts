import { expect } from "@core/test.fixture";
import { BasePage } from "../base.page";
import { ManagerPage } from "./manager.page";

export class AddCustomerPage extends BasePage {
    firstNameInput = this.page.getByPlaceholder('First Name');
    lastNameInput = this.page.getByPlaceholder('Last Name');
    postCodeInput = this.page.getByPlaceholder('Post Code');
    addCustomerButton = this.page.locator('[type="submit"]')
    alert = this.page.locator('.alert');

    async addCustomer({ firstName, lastName, postCode }: { firstName: string; lastName: string; postCode: string; }) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postCodeInput.fill(postCode);
        let dialogMessage = ""
        this.page.once('dialog', dialog => {
            dialogMessage = dialog.message();
            dialog.dismiss().catch(() => { });
        });

        await this.addCustomerButton.click();

        expect(dialogMessage).toContain('Customer added successfully with customer id');
        return new ManagerPage(this.page);
    }
}