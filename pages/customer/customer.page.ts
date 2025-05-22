import { BasePage } from "../base.page";
import { DepositPage } from "./deposit.page";
import { WithdrawPage } from "./withdraw.page";

export class CustomerPage extends BasePage {
    depositButton = this.page.getByRole('button', { name: 'Deposit' });
    withdrawButton = this.page.getByRole('button', { name: 'Withdrawl' });

    async openDeposit() {
        await this.depositButton.click();
        return new DepositPage(this.page);
    }

    async openWithdraw() {
        await this.withdrawButton.click();
        return new WithdrawPage(this.page);
    }
}