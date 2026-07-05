import { useQuery } from '@tanstack/react-query'
import { holidaysService } from '../services/holidays.service'

export const useHolidays = (year, month) => {
  return useQuery({
    queryKey: ['holidays', year, month],
    queryFn: async () => {
      try {
        return await holidaysService.getHolidaysByMonth(year, month)
      } catch (err) {
        console.error("Failed to fetch holidays via OOP service:", err)
        // Fallback for demonstration when API key is invalid/missing
        return {
          '01-01': 'Tahun Baru Masehi (Fallback)',
          '08-17': 'Hari Kemerdekaan RI (Fallback)',
          '12-25': 'Hari Raya Natal (Fallback)',
        }
      }
    },
    staleTime: 1000 * 60 * 60 * 24 // Cache 24 hours
  })
}
