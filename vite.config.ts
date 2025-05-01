import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  preview: {
    host: true,                      
    port: Number(),    
    allowedHosts: [
      'module-13-bbw8.onrender.com'    // add your Render hostname here
    ]
  }
});
