export function notFoundPage() {
  document.title = "404 | Hermes";

  return `
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl mb-4">404</h1>
        <p class="text-xl text-gray-600">P&aacute;gina no encontrada</p>
      </div>
    </div>
  `;
}
