import { BasePage } from "./base.page";
import { LoginPage } from "./login.page";

export class AppPage extends BasePage {

    loginPage = new LoginPage(this.page);
}
