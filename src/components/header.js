import logoUrl from "../assets/75c109f15e02316100dcb9bbe6afb315b2611969.png";

function activeLink(path) {
  return window.location.pathname === path ? "text-[#A3E635]" : "text-white";
}

export function header() {
  return `
    <header class="bg-[#111111] text-white py-4 px-6">
      <div class="max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" data-link class="flex items-center gap-3">
          <img src="${logoUrl}" alt="Hermes Logo" class="h-12 w-auto" />
          <span class="text-2xl tracking-tight">Hermes</span>
        </a>
        <nav class="flex gap-6 sm:gap-8">
          <a href="/" data-link class="hover:text-[#A3E635] transition-colors ${activeLink("/")}">Inicio</a>
          <a href="/products" data-link class="hover:text-[#A3E635] transition-colors ${activeLink("/products")}">Catálogo</a>
          <a href="/contact" data-link class="hover:text-[#A3E635] transition-colors ${activeLink("/contact")}">Contacto</a>
        </nav>
      </div>
    </header>
  `;
}
