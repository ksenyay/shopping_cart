import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  base: "/shopping_cart/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
};
