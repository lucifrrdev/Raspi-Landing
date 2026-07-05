import React, { useState } from 'react'
import { Badge } from '../atoms/Badge'

export const RedditWidget = () => {
  const [activeSub, setActiveSub] = useState('Technology')

  const techPosts = [
    { title: 'X global affairs head Nick Pickles resigns', flair: 'Social Media', time: '6h', points: '2,246', comments: '222', domain: 'thehindu.com' },
    { title: 'Advertisers plan to withdraw from X in record numbers', flair: 'Business', time: '1d', points: '29,942', comments: '1,604', domain: 'cnn.com' },
    { title: 'After seeing Wi-Fi network named "STINKY," Navy found hidden Starlink dish', flair: '', time: '3h', points: '14,302', comments: '840', domain: 'military.com' },
  ]

  const sciencePosts = [
    { title: 'New study shows correlation between sleep and memory', flair: 'Neuroscience', time: '5h', points: '4,102', comments: '302', domain: 'nature.com' },
    { title: 'Astronomers discover potentially habitable exoplanet', flair: 'Astronomy', time: '8h', points: '12,450', comments: '1,200', domain: 'nasa.gov' },
  ]

  const gamesPosts = [
    { title: 'Valve announces new VR headset', flair: 'Hardware', time: '1h', points: '8,990', comments: '2,100', domain: 'steampowered.com' },
    { title: 'Indie game "Hollow Knight: Silksong" release date revealed', flair: 'News', time: '2h', points: '35,000', comments: '4,500', domain: 'ign.com' },
  ]

  const getPosts = () => {
    if (activeSub === 'Science') return sciencePosts
    if (activeSub === 'Games') return gamesPosts
    return techPosts
  }

  return (
    <div className="flex flex-col gap-4 min-h-[300px]">
      <div className="flex items-center gap-4 border-b border-border">
        {['Technology', 'Science', 'Games'].map(sub => (
          <h3 
            key={sub}
            onClick={() => setActiveSub(sub)}
            className={`font-mono text-xs uppercase cursor-pointer transition-colors p-2 ${activeSub === sub ? 'text-text-strong border-b-2 border-text-strong' : 'text-muted/50 hover:text-text-strong'}`}
          >
            /r/{sub}
          </h3>
        ))}
      </div>
      
      <div className="flex flex-col gap-4">
        {getPosts().map((post, idx) => (
          <div key={idx} className="flex gap-4 group animate-[fadeSlideDown_0.3s_ease_both]">
            <div className="w-12 h-12 rounded bg-surface border border-border flex items-center justify-center flex-shrink-0 text-muted">
              X
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-sans text-text font-medium text-sm group-hover:underline cursor-pointer leading-snug flex items-center gap-2">
                <span>{post.title}</span>
                {post.flair && <Badge variant="subtle" size="xs">{post.flair}</Badge>}
              </h4>
              <div className="flex items-center gap-2 font-mono text-muted text-xs">
                <span>{post.time} · {post.points} points · {post.comments} comments</span>
                {post.domain && (
                  <>
                    <span>-</span>
                    <span className="hover:underline cursor-pointer">{post.domain} ↗</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
