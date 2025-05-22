import { expect } from "@core/test.fixture";
import { BasePage } from "../base.page";
import { CustomerPage } from "./customer.page";

export class WithdrawPage extends BasePage {
    amountInput = this.page.getByPlaceholder('amount');
    withdrawButton = this.page.getByRole('button', { name: 'Withdraw', exact: true });
    successMessage = this.page.getByText('Transaction successful');

    async makeWithdrawal(amount: string) {
        await this.amountInput.fill(amount);
        await this.withdrawButton.click();
        await expect(this.successMessage).toBeVisible();
        return new CustomerPage(this.page);
    }
}
