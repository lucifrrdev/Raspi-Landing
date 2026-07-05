import { z } from 'zod'

// Skema untuk memvalidasi respon dari API Hari Libur
export const HolidayItemSchema = z.object({
  tanggal: z.string().optional(),
  date: z.string().optional(),
  keterangan: z.string().optional(),
  name: z.string().optional(),
  is_cuti: z.boolean().optional()
}).passthrough()

export const HolidaysResponseSchema = z.array(HolidayItemSchema)
