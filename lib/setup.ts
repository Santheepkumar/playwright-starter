import { chromium, type FullConfig } from "@playwright/test";
import { creds } from "./env";

const setup = async (config: FullConfig) => {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL!);
  // Do login flow
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(creds.email);
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill(creds.password);
  await page.getByRole("button", { name: "Log In" }).click();
  // Store the auth state
  await page.context().storageState({ path: storageState as string });
  await browser.close();
};

export default setup;
