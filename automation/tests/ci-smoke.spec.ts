import { test, expect } from '@playwright/test';

test('CI smoke: browser interaction works', async ({ page }) => {
  await page.setContent(`
    <h1>CommerceQA</h1>
    <button onclick="this.textContent='Added'">
      Add to cart
    </button>
  `);

  await expect(page.getByRole('heading', {
    name: 'CommerceQA'
  })).toBeVisible();

  await page.getByRole('button', {
    name: 'Add to cart'
  }).click();

  await expect(page.getByRole('button', {
    name: 'Added'
  })).toBeVisible();
});