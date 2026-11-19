
import { test, expect } from "@playwright/test";

test("La tienda Medusa carga correctamente", async ({ page }) => {
  await page.goto("http://localhost:8000/fr");

  await expect(page.getByTestId("nav-store-link")).toBeVisible();

  await expect(
    page.getByText("Ecommerce Starter Template")
  ).toBeVisible();
});

test("El catálogo muestra los productos disponibles", async ({ page }) => {
  await page.goto("http://localhost:8000/fr/store");

  await expect(
    page.getByRole("heading", { name: "All products" })
  ).toBeVisible();

  await expect(page.getByText("Medusa T-Shirt")).toBeVisible();
  await expect(page.getByText("Medusa Shorts")).toBeVisible();
});

test("El cliente puede abrir un producto del catálogo", async ({ page }) => {
  await page.goto("http://localhost:8000/fr/store");

  await page.getByRole("link", { name: /Medusa T-Shirt/i }).first().click();

  await expect(page).toHaveURL(/\/products\/t-shirt/);

  await expect(
    page.getByRole("heading", { name: "Medusa T-Shirt" })
  ).toBeVisible();

  await expect(
    page.getByRole("button", { name: "Add to cart" })
  ).toBeVisible();
});

test("El cliente puede agregar una camiseta al carrito", async ({ page }) => {
  await page.goto("http://localhost:8000/fr/store");

  await page
    .getByRole("link", { name: /Medusa T-Shirt/i })
    .first()
    .click();

  await expect(
    page.getByRole("heading", { name: "Medusa T-Shirt" })
  ).toBeVisible();

  await page.getByText("Black", { exact: true }).click();
  await page.getByText("M", { exact: true }).click();

  await page.getByRole("button", { name: "Add to cart" }).click();

  await page.getByRole("link", { name: /cart/i }).click();

  await expect(
  page.getByTestId("product-title").filter({ hasText: "Medusa T-Shirt" })
).toBeVisible();

 await expect(
  page.getByTestId("cart-item-variant")
).toContainText("M / Black");

  await expect(
    page.getByRole("button", { name: "Go to checkout" })
  ).toBeVisible();
});
