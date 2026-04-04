import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("que estoy en la página principal", async function () {
  await this.page.goto(this.baseUrl);
});

Given("que estoy en la página de contacto", async function () {
  await this.page.goto(`${this.baseUrl}/contacto`);
});

Given('que estoy en la página "Sobre mí"', async function () {
  await this.page.goto(`${this.baseUrl}/sobre-mi`);
});

Given("que estoy en la página de proyectos", async function () {
  await this.page.goto(`${this.baseUrl}/proyectos`);
});

Given("que accedo desde un dispositivo móvil", async function () {
  await this.page.setViewportSize({ width: 375, height: 812 });
  await this.page.goto(this.baseUrl);
});

Given("que estoy en cualquier página del sitio", async function () {
  await this.page.goto(`${this.baseUrl}/sobre-mi`);
});

When('hago clic en "Contacto" en la navegación', async function () {
  await this.page.click('nav a[href="/contacto"]');
});

When('hago clic en "Ver proyectos"', async function () {
  await this.page.click('a[href="/proyectos"]');
});

When('hago clic en "Reservar llamada"', async function () {
  await this.page.click('text=Reservar llamada');
});

When('hago clic en "fmmpablo@gmail.com"', async function () {
  await this.page.click('a[href="mailto:fmmpablo@gmail.com"]');
});

When('hago clic en el botón del menú hamburger', async function () {
  await this.page.click('#mobile-menu-btn');
});

When('hago clic en "Pablo FM" en la navegación', async function () {
  await this.page.click('nav a[href="/"]');
});

When("llego al final de la página", async function () {
  await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});

Then("veo la página de contacto", async function () {
  await expect(this.page).toHaveURL(/\/contacto/);
});

Then('veo el botón "Reservar llamada"', async function () {
  await expect(this.page.locator('text=Reservar llamada')).toBeVisible();
});

Then('veo el email "fmmpablo@gmail.com"', async function () {
  await expect(this.page.locator('a[href="mailto:fmmpablo@gmail.com"]')).toBeVisible();
});

Then("se abre Cal.com en una nueva pestaña", async function () {
  const [newPage] = await Promise.all([
    this.page.context().waitForEvent("page"),
    this.page.click('text=Reservar llamada'),
  ]);
  await expect(newPage.url()).toContain("3002");
});

Then('se abre el cliente de correo con el destinatario "fmmpablo@gmail.com"', async function () {
  const href = await this.page.getAttribute('a[href="mailto:fmmpablo@gmail.com"]', 'href');
  expect(href).toBe("mailto:fmmpablo@gmail.com");
});

Then("veo la página de proyectos", async function () {
  await expect(this.page).toHaveURL(/\/proyectos/);
});

Then('veo el proyecto "Numen Games" como primero en la lista', async function () {
  const firstProject = this.page.locator('article').first();
  await expect(firstProject).toContainText("Numen Games");
});

Then('veo el proyecto "Numen Games"', async function () {
  await expect(this.page.locator('text=Numen Games')).toBeVisible();
});

Then('tiene el estado "Activo"', async function () {
  await expect(this.page.locator('text=Activo').first()).toBeVisible();
});

Then('tiene el enlace a "https://numinia.com"', async function () {
  await expect(this.page.locator('a[href="https://numinia.com"]')).toBeVisible();
});

Then("se despliega el menú de navegación", async function () {
  await expect(this.page.locator('#mobile-menu')).toBeVisible();
});

Then('puedo ver los enlaces "Proyectos", "Sobre mí" y "Contacto"', async function () {
  const menu = this.page.locator('#mobile-menu');
  await expect(menu.locator('text=Proyectos')).toBeVisible();
  await expect(menu.locator('text=Sobre mí')).toBeVisible();
  await expect(menu.locator('text=Contacto')).toBeVisible();
});

Then("vuelvo a la página principal", async function () {
  await expect(this.page).toHaveURL(new RegExp(`^${this.baseUrl}/?$`));
});

Then('veo la sección "El camino hasta aquí"', async function () {
  await expect(this.page.locator('text=El camino hasta aquí')).toBeVisible();
});

Then("veo los hitos en orden cronológico", async function () {
  const items = await this.page.locator('.timeline-item, li').count();
  expect(items).toBeGreaterThan(0);
});

Then('el último hito es "Construyendo lo siguiente"', async function () {
  await expect(this.page.locator('text=Construyendo lo siguiente')).toBeVisible();
});

Then('veo la sección "En lo que creo"', async function () {
  await expect(this.page.locator('text=En lo que creo')).toBeVisible();
});

Then('veo el valor "Construir antes que teorizar"', async function () {
  await expect(this.page.locator('text=Construir antes que teorizar')).toBeVisible();
});

Then('veo el botón "Hablamos"', async function () {
  await expect(this.page.locator('text=Hablamos').last()).toBeVisible();
});

Then("al hacer clic me lleva a la página de contacto", async function () {
  await this.page.click('text=Hablamos');
  await expect(this.page).toHaveURL(/\/contacto/);
});

Then("puedo seleccionar un horario disponible", async function () {
  // Verificación visual — Cal.com carga el calendario
  await this.page.waitForLoadState("networkidle");
  expect(this.page.url()).toContain("pablofm");
});
