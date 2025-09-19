import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	resolve: {
		conditions: ["@repo/source"],
	},
	plugins: [
		tsconfigPaths(),
		tailwindcss(),
		tanstackStart({ target: "cloudflare-module", customViteReactPlugin: true }),
		viteReact(),
	],
});
