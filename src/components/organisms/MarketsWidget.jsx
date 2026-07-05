import React from 'react'

export const MarketsWidget = () => {
  const markets = [
    { name: 'BTC-USD', desc: 'Bitcoin', price: '$53,464.86', change: '-4.80%', down: true, sparkline: [5, 6, 5, 8, 9, 8, 6, 7, 5, 4, 3, 2, 3] },
    { name: 'AMD', desc: 'AMD', price: '$133.48', change: '-4.27%', down: true, sparkline: [8, 9, 7, 8, 9, 8, 6, 5, 4, 3, 2, 2, 1] },
    { name: 'NVDA', desc: 'NVIDIA', price: '$102.79', change: '-4.12%', down: true, sparkline: [9, 10, 8, 9, 8, 7, 5, 4, 3, 2, 2, 3, 2] },
    { name: 'GOOGL', desc: 'Alphabet', price: '$150.12', change: '-3.46%', down: true, sparkline: [6, 7, 6, 7, 6, 5, 4, 3, 2, 3, 2, 1, 1] },
  ]

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-mono text-muted text-xs uppercase">Markets</h3>
      
      <div className="flex flex-col gap-4">
        {markets.map((market, idx) => (
          <div key={idx} className="flex justify-between items-center group cursor-pointer">
            <div className="flex flex-col">
              <span className="font-mono text-text text-sm font-medium">{market.name}</span>
              <span className="font-mono text-muted text-xs">{market.desc}</span>
            </div>
            
            {/* Sparkline (mock) */}
            <div className="flex items-end h-6 gap-[1px] mx-2 opacity-50 group-hover:opacity-100 transition-opacity">
              {market.sparkline.map((val, i) => (
                <div key={i} className="w-0.5 bg-muted rounded-t-sm" style={{ height: `${val * 10}%` }}></div>
              ))}
            </div>

            <div className="flex flex-col items-end">
              <span className={`font-mono text-xs ${market.down ? 'text-red' : 'text-green-400'}`}>{market.change}</span>
              <span className="font-mono text-muted text-xs">{market.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
