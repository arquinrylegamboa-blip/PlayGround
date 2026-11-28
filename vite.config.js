import { defineConfig } from 'vite'

const allowedHosts = ['.omgithub.com']

export default defineConfig({
  server: { allowedHosts },
  preview: { allowedHosts },
})
