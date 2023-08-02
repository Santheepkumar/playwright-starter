import { test } from "@playwright/test";

test("Authenticated", async ({ page, context }) => {
  await page.goto("/");
});
test("Not Authenticated", async ({ page, context }) => {
  await context.clearCookies();
  await page.goto("/");
});
