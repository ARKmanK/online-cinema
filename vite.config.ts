import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './'),
			'@components': path.resolve(__dirname, './src/components'),
			'@UI': path.resolve(__dirname, './src/components/UI'),
			'@pages': path.resolve(__dirname, './src/components/pages'),
			'@lib': path.resolve(__dirname, './src/components/lib'),
			'@data': path.resolve(__dirname, './src/data/'),
		},
	},
})
