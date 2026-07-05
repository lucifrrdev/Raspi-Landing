import React from 'react'

export const VideosWidget = () => {
  const videos = [
    { title: 'Advanced Slicer Settings using..', time: '4h', author: 'Maker\'s Muse', thumb: 'https://picsum.photos/seed/vid1/300/160' },
    { title: 'The easy way to understand flexbox..', time: '6h', author: 'Kevin Powell', thumb: 'https://picsum.photos/seed/vid2/300/160' },
    { title: 'Zen 5 And AI Doom w/ Casey Muratori', time: '7h', author: 'ThePrimeTime', thumb: 'https://picsum.photos/seed/vid3/300/160' },
    { title: 'Building the Lowest Rated PC', time: '23h', author: 'Linus Tech Tips', thumb: 'https://picsum.photos/seed/vid4/300/160' },
  ]

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-mono text-muted text-xs uppercase">Videos</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map((vid, idx) => (
          <div key={idx} className="flex flex-col gap-2 cursor-pointer group">
            <div className="relative aspect-video rounded-md overflow-hidden border border-border group-hover:border-accent transition-colors">
              <img src={vid.thumb} alt={vid.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-text text-xs leading-tight line-clamp-2 group-hover:text-accent transition-colors">{vid.title}</span>
              <span className="font-mono text-muted text-xxs">{vid.time} · {vid.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
