import { imageMarkup } from "../components/image-markup.js";
import { escapeHtml } from "../utils/html.js";

export function productDetailPage(id, state) {
  const product = state.products.find((item) => item.id === Number(id));

  if (!product) {
    document.title = "Producto no encontrado | Hermes";
    return `
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h2 class="text-2xl mb-4">Producto no encontrado</h2>
          <a href="/products" data-link class="text-[#2563EB] hover:underline">Volver al catálogo</a>
        </div>
      </div>
    `;
  }


  document.title = `${product.name} | Hermes`;

  return `
    <div class="min-h-screen bg-[#F5F5F5]">
      <h1 class="text-4xl mb-4 text-[#111111]">Detalle</h1>
    </div>
  `;
}
