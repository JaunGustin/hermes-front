import { escapeHtml } from "../utils/html.js";

export function toast(message) {
  if (!message) {
    return "";
  }

  return `
    <div class="fixed top-6 right-6 z-50 max-w-sm rounded-xl border border-[#8BCB2A] bg-[#A3E635] px-5 py-4 text-[#111111] shadow-2xl">
      <p class="text-sm font-medium">${escapeHtml(message)}</p>
    </div>
  `;
}
