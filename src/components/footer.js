export function footer() {
  return `
    <footer class="bg-[#111111] text-white py-12 px-6 mt-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl mb-4">Hermes</h3>
            <p class="text-gray-400">Zapatos deportivos modernos para tu estilo de vida activo</p>
          </div>
          <div>
            <h4 class="mb-4">Navegaci&oacute;n</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="/" data-link class="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/products" data-link class="hover:text-white transition-colors">Catálogo</a></li>
              <li><a href="/contact" data-link class="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4">Contacto</h4>
            <ul class="space-y-2 text-gray-400">
              <li>info@hermes.com</li>
              <li>+1 (555) 123-4567</li>
              <li>S&iacute;guenos en redes</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Hermes. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;
}
