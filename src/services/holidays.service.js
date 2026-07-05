import { ApiClient } from '../libs/apiClient'
import { env } from '../config/env'
import { HolidaysResponseSchema } from '../schemas/holidays.schema'

class HolidaysService extends ApiClient {
  constructor() {
    super(env.VITE_HOLIDAYS_API_URL, {
      'Accept': 'application/json',
      ...(env.VITE_HOLIDAYS_API_KEY ? { 'x-api-co-id': env.VITE_HOLIDAYS_API_KEY } : {})
    })
  }

  /**
   * Mengambil daftar hari libur berdasarkan tahun dan bulan.
   * Karena base URL yang ada di env sudah merupakan full endpoint, 
   * kita mengabaikan path endpoint pada method `get` (menggunakan string kosong).
   */
  async getHolidaysByMonth(year, month) {
    const response = await this.get('', {
      params: { year, month }
    })
    
    // api.co.id returns an object with 'data' array, while other APIs might return array directly
    const actualData = response.data || response;
    
    // Parse menggunakan Zod schema
    const parsedData = HolidaysResponseSchema.parse(actualData)
    
    const holidayMap = {}
    parsedData.forEach(h => {
      const dateStr = h.tanggal || h.date
      const nameStr = h.keterangan || h.name || h.description
      
      if (dateStr) {
        const [, m, d] = dateStr.split('-')
        holidayMap[`${m}-${d}`] = nameStr || 'Hari Libur'
      }
    })
    
    return holidayMap
  }
}

export const holidaysService = new HolidaysService()
