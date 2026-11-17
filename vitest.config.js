import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.js"],
    coverage: {
      reporter: ["text", "html"],
      include: ["src/components/ChatForm.jsx", "src/components/ChatMessage.jsx", "src/components/ChatbotResponse.js"],
    },
  },
});
