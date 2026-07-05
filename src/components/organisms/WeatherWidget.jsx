import React from 'react'

export const WeatherWidget = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-mono text-muted text-xs uppercase">Weather</h3>
      
      <div className="bg-surface border border-border rounded-lg p-4 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="font-mono text-text text-sm font-medium">Partly Cloudy</div>
          <div className="font-mono text-muted text-xs">Feels like 16°C</div>
        </div>
        
        
        <div className="flex flex-col w-full gap-2">
          <div className="w-full h-16 flex items-end justify-between gap-2 relative">
            {/* Mock Sun arc */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 border-t-2 border-dashed border-accent/20 rounded-t-full"></div>
            
            {[3, 4, 3, 5, 7, 9, 10, 8, 9, 12, 4, 4, 3, 3].map((h, i) => (
              <div key={i} className={`w-1.5 rounded-t-sm ${i === 9 ? 'bg-text' : 'bg-muted/40'}`} style={{ height: `${h * 10}%` }}></div>
            ))}
            <div className="absolute right-[25%] top-1 font-mono text-xs text-text">17°</div>
          </div>
          
          <div className="w-full flex justify-between font-mono text-muted text-xxs">
            <span>6am</span>
            <span>2pm</span>
            <span>10pm</span>
          </div>
        </div>
      </div>
    </div>
  )
}
