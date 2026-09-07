import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "172.16.43.217",
    port: 5858,
    strictPort: false,
  },
  
});
