export const state = {
  products: [],
  loading: true,
  submitted: false,
  favorites: new Set(),
};

export async function loadProducts(onComplete) {
  try {
    const response = await fetch("/data/products.json");
    state.products = await response.json();
  } catch (error) {
    console.error("No se pudo cargar el cat&aacute;logo local.", error);
    state.products = [];
  } finally {
    state.loading = false;
    onComplete();
  }
}
