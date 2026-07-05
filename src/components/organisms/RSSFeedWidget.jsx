import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../atoms/Button'

export const RSSFeedWidget = () => {
  const feeds = [
    { title: 'CSS display contents', time: '1d', author: 'Ahmad Shadeed' },
    { title: 'CSS @property and the New Style', time: '4d', author: 'Ryan Mulligan' },
    { title: 'Center Items in First Row with..', time: '18d', author: 'Ryan Mulligan' },
    { title: 'Notes on handling events in We..', time: '1mo', author: 'Ryan Mulligan' },
  ]

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-mono text-muted text-xs uppercase">RSS Feed</h3>
      
      <div className="flex flex-col gap-4">
        {feeds.map((feed, idx) => (
          <div key={idx} className="flex flex-col gap-2 cursor-pointer group">
            <h4 className="font-mono text-accent font-medium text-sm group-hover:underline">{feed.title}</h4>
            <span className="font-mono text-muted text-xs">{feed.time} · {feed.author}</span>
          </div>
        ))}
      </div>
      
      <Button variant="ghost" size="xs" className="w-fit">
        SHOW MORE
        <ArrowUpRight className="w-3 h-3 transition-colors" />
      </Button>
    </div>
  )
}
