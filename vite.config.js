import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'SaySwitchPay',
        short_name: 'SsPay',
        description: 'SaySwitch payment gateway',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2ecc71',
        icons: [
          {
            src: 'saySwitchLogo.svg',
            sizes: '64x64',
            type: 'image/x-icon'
          },
          {
            src: 'saySwitchLogo.svg',
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
