export function loadingPage() {
  return `
    <div class="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div class="text-center">
        <div class="mx-auto mb-4 h-10 w-10 rounded-full border-4 border-gray-200 border-t-[#2563EB] animate-spin"></div>
        <p class="text-gray-600">Cargando catálogo...</p>
      </div>
    </div>
  `;
}
