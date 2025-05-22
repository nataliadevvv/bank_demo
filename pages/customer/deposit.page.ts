import { expect } from "@core/test.fixture";
import { BasePage } from "../base.page";
import { CustomerPage } from "./customer.page";

export class DepositPage extends BasePage {
    amountInput = this.page.getByPlaceholder('amount');
    depositButton = this.page.getByRole('form').getByRole('button', { name: 'Deposit' });
    successMessage = this.page.getByText('Deposit Successful');

    async makeDeposit(amount: string) {
        await this.amountInput.fill(amount);
        await this.depositButton.click();
        await expect(this.successMessage).toBeVisible();

        return new CustomerPage(this.page);
    }
}