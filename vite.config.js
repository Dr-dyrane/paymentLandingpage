import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Your App Name',
        short_name: 'App Name',
        description: 'Description of your app',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#007BFF',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '64x64',
            type: 'image/x-icon'
          },
          {
            src: '/favicon.ico',
            sizes: '512x512',
            type: 'image/x-icon'
          }
        ]
      }
    })
  ],
  define: {
    "process.env": {
      VITE_SAY_SWITCH_PUBLIC_KEY: process.env.VITE_SAY_SWITCH_PUBLIC_KEY,
    },
  },
});
