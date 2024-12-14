import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../marketplace-backend/public", // Ruta de salida del frontend
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000", // Proxy para evitar problemas CORS
    },
  },
});
