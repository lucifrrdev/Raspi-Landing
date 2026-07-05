import { z } from 'zod'

// Validasi environment variables menggunakan Zod
const envSchema = z.object({
  VITE_HOLIDAYS_API_URL: z.string().default('/api-proxy/holidays/indonesia/'),
  VITE_HOLIDAYS_API_KEY: z.string().optional(),
})

export const env = envSchema.parse({
  VITE_HOLIDAYS_API_URL: import.meta.env.VITE_HOLIDAYS_API_URL,
  VITE_HOLIDAYS_API_KEY: import.meta.env.VITE_HOLIDAYS_API_KEY,
})
