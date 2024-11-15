import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react(), TanStackRouterVite()],
  };
});
