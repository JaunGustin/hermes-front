import { imageMarkup } from "../components/image-markup.js";

export function homePage(state) {
  const featured = state.products[0];

  return `
    <div class="min-h-screen">
      <section class="bg-gradient-to-br from-[#111111] to-[#2B2B2B] text-white py-20 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl mb-6 leading-tight">
              El futuro del <br />
              <span class="text-[#A3E635]">rendimiento deportivo</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8">
              Dise&ntilde;o innovador que se adapta a tu estilo de vida activo.
              Descubre la nueva generaci&oacute;n de calzado deportivo.
            </p>
            <a href="/products" data-link class="inline-block bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-3 rounded-lg transition-colors">
              Ver catálogo
            </a>
          </div>
          <div class="relative">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              ${imageMarkup({
                src: featured?.image ?? "",
                alt: featured?.name ?? "Zapato deportivo Hermes",
                className: "w-full h-auto rounded-lg",
              })}
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 px-6 bg-[#F5F5F5]">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-4xl text-center mb-16 text-[#111111]">&iquest;Por qu&eacute; elegir Hermes?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl text-center">
              <div class="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white text-3xl">&#9889;</span>
              </div>
              <h3 class="text-xl mb-3 text-[#111111]">Dise&ntilde;o moderno</h3>
              <p class="text-gray-600">Estilo contempor&aacute;neo que combina funcionalidad y est&eacute;tica</p>
            </div>
            <div class="bg-white p-8 rounded-xl text-center">
              <div class="w-16 h-16 bg-[#A3E635] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-[#111111] text-3xl">&hearts;</span>
              </div>
              <h3 class="text-xl mb-3 text-[#111111]">Comodidad extrema</h3>
              <p class="text-gray-600">Tecnolog&iacute;a de amortiguaci&oacute;n para todo el d&iacute;a</p>
            </div>
            <div class="bg-white p-8 rounded-xl text-center">
              <div class="w-16 h-16 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white text-3xl">&#10022;</span>
              </div>
              <h3 class="text-xl mb-3 text-[#111111]">Estilo &uacute;nico</h3>
              <p class="text-gray-600">Dise&ntilde;os exclusivos para destacar en cada paso</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl mb-6 text-[#111111]">Descubre nuestra colecci&oacute;n</h2>
          <p class="text-xl text-gray-600 mb-8">
            Explora todos nuestros modelos y encuentra el zapato perfecto para ti
          </p>
          <a href="/products" data-link class="inline-block bg-[#111111] hover:bg-[#2B2B2B] text-white px-10 py-4 rounded-lg transition-colors">
            Ir al catálogo
          </a>
        </div>
      </section>
    </div>
  `;
}
