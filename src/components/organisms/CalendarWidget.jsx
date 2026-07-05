import React, { useState } from 'react'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { useHolidays } from '../../hooks/useHolidays'
import { Button } from '../atoms/Button'
import { Badge } from '../atoms/Badge'

export const CalendarWidget = () => {
  const [viewDate, setViewDate] = useState(new Date())
  const today = new Date()

  const currentMonthName = viewDate.toLocaleString('default', { month: 'long' })
  const currentYear = viewDate.getFullYear()
  const viewMonth = viewDate.getMonth()

  const handlePrevMonth = () => {
    setViewDate(new Date(currentYear, viewMonth - 1, 1))
  }

  const handleNextMonth = () => {
    setViewDate(new Date(currentYear, viewMonth + 1, 1))
  }

  // Fetch holidays from API using custom hook
  const { data: holidaysData, isLoading, isError } = useHolidays(currentYear, viewMonth + 1)
  const holidays = holidaysData || {}

  // Generate days for the calendar matrix
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()
  const getFirstDayOfMonth = (year, month) => {
    let day = new Date(year, month, 1).getDay()
    return day === 0 ? 6 : day - 1 // Make Monday 0, Sunday 6
  }

  const daysInMonth = getDaysInMonth(currentYear, viewMonth)
  const firstDay = getFirstDayOfMonth(currentYear, viewMonth)
  const prevMonthDays = getDaysInMonth(currentYear, viewMonth - 1)
  
  const matrix = []
  
  // Previous month trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    matrix.push({ day: prevMonthDays - i, isCurrentMonth: false, monthOffset: -1 })
  }
  
  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    matrix.push({ day: i, isCurrentMonth: true, monthOffset: 0 })
  }
  
  // Next month leading days
  const totalSlots = matrix.length > 35 ? 42 : 35
  let nextMonthDay = 1
  while (matrix.length < totalSlots) {
    matrix.push({ day: nextMonthDay++, isCurrentMonth: false, monthOffset: 1 })
  }

  return (
    <div className="flex flex-col gap-4 bg-surface border border-border rounded-xl p-4 overflow-hidden relative group">
      {/* Decorative gradient orb (optional, keeping it subtle) */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      <h3 className="font-mono text-muted text-xxs uppercase flex justify-between items-center">
        <span className="flex items-center gap-2">
          <CalendarIcon className="w-3.5 h-3.5 text-accent/70" />
          Calendar
        </span>
        {isLoading && <span className="text-accent animate-pulse">Fetching API...</span>}
        {isError && <span className="text-red">API Error</span>}
      </h3>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button size="icon-xs" variant="ghost" onClick={handlePrevMonth}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-xs font-mono text-text-strong text-center font-medium">
            {currentMonthName} <span className="text-muted">{currentYear}</span>
          </span>
          <Button size="icon-xs" variant="ghost" onClick={handleNextMonth}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <Button 
          size="xs"
          variant="outline"
          onClick={() => setViewDate(new Date())}
        >
          Today
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center font-mono text-sm">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
          <div key={d} className={`text-xxs font-medium uppercase ${d === 'Su' ? 'text-red/80' : 'text-muted/60'}`}>{d}</div>
        ))}
        
        {matrix.map((cell, i) => {
          const cellDate = new Date(currentYear, viewMonth + cell.monthOffset, cell.day)
          const isToday = cellDate.getDate() === today.getDate() && 
                          cellDate.getMonth() === today.getMonth() && 
                          cellDate.getFullYear() === today.getFullYear()
          
          const monthStr = String(cellDate.getMonth() + 1).padStart(2, '0')
          const dayStr = String(cellDate.getDate()).padStart(2, '0')
          const holidayKey = `${monthStr}-${dayStr}`
          const holidayName = holidays[holidayKey]
          const isHoliday = !!holidayName
          const isSunday = (i % 7 === 6)

          return (
            <div 
              key={i} 
              title={holidayName || (isSunday ? 'Hari Minggu' : '')}
              className={`
                relative flex items-center justify-center w-full aspect-square max-w-[2rem] mx-auto rounded-lg cursor-default transition-all duration-300 text-xs sm:text-sm
                ${!cell.isCurrentMonth ? 'text-muted/20' : 'text-muted hover:text-text-strong hover:bg-surface-hover'} 
                ${isToday ? 'bg-accent/20 text-accent font-bold border border-accent/30 shadow-[0_0_10px_rgba(var(--color-accent-rgb),0.2)]' : ''}
                ${isHoliday || isSunday ? '!text-red font-semibold' : ''}
              `}
            >
              {cell.day}
              {isHoliday && (
                <span className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red rounded-full ${cell.isCurrentMonth ? 'shadow-[0_0_6px_rgba(239,68,68,0.8)]' : 'opacity-30'}`}></span>
              )}
            </div>
          )
        })}
      </div>
      
      {/* Legend */}
      <div className="flex justify-between items-center text-xxs font-mono text-muted border-t border-border p-2">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-accent border border-accent/20 shadow-[0_0_4px_rgba(var(--color-accent-rgb),0.5)]"></span> Today
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red shadow-[0_0_4px_rgba(239,68,68,0.5)]"></span> Holiday
          </div>
        </div>
      </div>
      
      {/* Holidays List */}
      {(() => {
        const currentMonthHolidays = Object.entries(holidays).filter(([date]) => {
          const m = parseInt(date.split('-')[0], 10)
          return m === viewMonth + 1
        })
        
        if (currentMonthHolidays.length === 0) return null

        return (
          <div className="overflow-y-auto max-h-32 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
             <ul className="text-xs font-mono flex flex-col gap-2">
               {currentMonthHolidays.map(([date, holidayName]) => (
                   <li key={date} className="flex gap-3 items-center group/item p-2 rounded-lg hover:bg-surface-hover transition-colors">
                     <Badge color="red" variant="subtle" size="xs">
                       {date.split('-')[1]} {new Date(2000, parseInt(date.split('-')[0])-1).toLocaleString('default', { month: 'short' })}
                     </Badge>
                     <span className="text-text group-hover/item:text-text-strong transition-colors line-clamp-2 leading-tight" title={holidayName}>{holidayName}</span>
                  </li>
               ))}
             </ul>
          </div>
        )
      })()}
    </div>
  )
}
