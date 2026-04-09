import { imageMarkup } from "../components/image-markup.js";
import { escapeHtml } from "../utils/html.js";

export function productsPage(state) {
  const cards = state.products
    .map(
      (product) => `
        <article class="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
          <button
            type="button"
            data-favorite-id="${product.id}"
            aria-label="Agregar a favoritos"
            class="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-xl shadow-md transition hover:scale-105 ${
              state.favorites.has(product.id) ? "text-[#2563EB]" : "text-gray-400"
            }"
          >
            ${state.favorites.has(product.id) ? "&hearts;" : "&#9825;"}
          </button>
          ${imageMarkup({
            src: product.image,
            alt: product.name,
            className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300",
            square: true,
          })}
          <div class="p-6">
            <h3 class="text-xl mb-2 text-[#111111]">${escapeHtml(product.name)}</h3>
            <p class="text-[#2563EB] mb-3">${escapeHtml(product.price)}</p>
            <p class="text-gray-600 mb-4 text-sm">${escapeHtml(product.shortDescription)}</p>
            <a href="/product/${product.id}" data-link class="block w-full text-center bg-[#111111] hover:bg-[#2B2B2B] text-white py-2 rounded-lg transition-colors">
              Ver m&aacute;s
            </a>
          </div>
        </article>
      `,
    )
    .join("");

  return `
    <div class="min-h-screen bg-[#F5F5F5]">
      <div class="max-w-7xl mx-auto py-16 px-6">
        <div class="text-center mb-12">
          <h1 class="text-4xl mb-4 text-[#111111]">Nuestro catálogo</h1>
          <p class="text-xl text-gray-600">Descubre todos nuestros modelos de zapatos deportivos</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${cards}
        </div>
      </div>
    </div>
  `;
}
