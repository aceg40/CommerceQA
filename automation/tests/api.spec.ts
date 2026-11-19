import { test, expect } from "@playwright/test";

test("La API de Medusa devuelve regiones válidas", async ({ request }) => {
  const response = await request.get(
    "http://localhost:9000/store/regions",
    {
      headers: {
        "x-publishable-api-key":
          process.env.MEDUSA_PUBLISHABLE_KEY || "",
      },
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toHaveProperty("regions");
  expect(Array.isArray(body.regions)).toBe(true);
  expect(body.regions.length).toBeGreaterThan(0);
});
test("La API rechaza solicitudes sin API Key", async ({ request }) => {
  const response = await request.get(
    "http://localhost:9000/store/regions"
  );

  expect(response.status()).toBe(400);

  const body = await response.json();

  expect(body.message).toContain(
    "Publishable API key required"
  );
});

test("La API devuelve un error para una ruta inexistente", async ({ request }) => {
  const response = await request.get(
    "http://localhost:9000/store/ruta-inexistente-commerceqa",
    {
      headers: {
        "x-publishable-api-key":
          process.env.MEDUSA_PUBLISHABLE_KEY || "",
      },
    }
  );

  expect(response.status()).toBe(404);
});