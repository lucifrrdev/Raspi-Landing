import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../atoms/Button'

export const NewsWidget = () => {
  const [activeTab, setActiveTab] = useState('HN')

  const hnNews = [
    { title: 'Show HN: Wealthfolio: Private, open-source investment tracker', time: '6h', points: 309, comments: 136, domain: 'wealthfolio.app' },
    { title: 'Nginx has moved to GitHub', time: '3h', points: 100, comments: 64, domain: 'mailman.nginx.org' },
    { title: 'Show HN: Infinity - Realistic AI characters that can speak', time: '2h', points: 71, comments: 75, domain: '' },
    { title: 'Did Sandia use a thermonuclear secondary in a product logo?', time: '11h', points: 482, comments: 159, domain: 'blog.nuclearsecrecy.com' },
    { title: '2M users but no money in the bank', time: '12h', points: 217, comments: 156, domain: 'exercism.org' },
  ]

  const lobstersNews = [
    { title: 'Rust in the Linux Kernel is looking bleak', time: '1h', points: 42, comments: 12, domain: 'lwn.net' },
    { title: 'Building a simple database in Zig', time: '4h', points: 85, comments: 3, domain: 'zig.news' },
    { title: 'Why I prefer Makefile over npm scripts', time: '7h', points: 156, comments: 89, domain: 'blog.example.com' },
  ]

  const currentNews = activeTab === 'HN' ? hnNews : lobstersNews

  return (
    <div className="flex flex-col gap-4 min-h-[300px]">
      <div className="flex items-center gap-4 border-b border-border">
        <h3 
          onClick={() => setActiveTab('HN')}
          className={`font-mono text-xs uppercase cursor-pointer transition-colors p-2 ${activeTab === 'HN' ? 'text-accent border-b-2 border-accent' : 'text-muted hover:text-text-strong'}`}
        >
          Hacker News
        </h3>
        <h3 
          onClick={() => setActiveTab('LOBSTERS')}
          className={`font-mono text-xs uppercase cursor-pointer transition-colors p-2 ${activeTab === 'LOBSTERS' ? 'text-accent border-b-2 border-accent' : 'text-muted/50 hover:text-text-strong'}`}
        >
          Lobsters
        </h3>
      </div>
      
      <div className="flex flex-col gap-4">
        {currentNews.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2 animate-[fadeSlideDown_0.3s_ease_both]">
            <h4 className="font-mono text-accent font-medium text-sm hover:underline cursor-pointer">{item.title}</h4>
            <div className="flex items-center gap-2 font-mono text-muted text-xs">
              <span>{item.time} · {item.points} points · {item.comments} comments</span>
              {item.domain && (
                <>
                  <span>-</span>
                  <span className="hover:underline cursor-pointer truncate max-w-[150px]">{item.domain} ↗</span>
                </>
              )}
            </div>
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
