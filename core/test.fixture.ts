import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/login.page';
import { AppPage } from '../pages/app';

// Declare the types of your fixtures.
type MyFixtures = {
    app: AppPage;
};

export const test = base.extend<MyFixtures>({
    app: async ({ page }, use) => {
        await use(new AppPage(page));
    },
});
export { expect } from '@playwright/test';