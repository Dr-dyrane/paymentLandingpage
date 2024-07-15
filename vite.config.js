import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_SAY_SWITCH_PUBLIC_KEY: JSON.stringify(process.env.VITE_SAY_SWITCH_PUBLIC_KEY),
    },
  },
});
