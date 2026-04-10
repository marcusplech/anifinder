import { expect, test } from "@playwright/test";

test("home renders and opens anime detail", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /próximo anime favorito/i })
  ).toBeVisible();
  await expect(page.getByLabel("Buscar anime")).toBeVisible();

  const firstAnime = page.locator("a.media-card").first();
  await expect(firstAnime).toBeVisible({ timeout: 20000 });
  await firstAnime.click();

  await expect(page).toHaveURL(/\/anime\//);
  await expect(page.locator(".h1-single")).toBeVisible();
});
