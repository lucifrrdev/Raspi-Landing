import React from 'react'

export const TwitchWidget = () => {
  const channels = [
    { name: 'zackrawrr', status: 'Just Chatting', viewers: '2h · 64k viewers', live: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zack' },
    { name: 'ThePrimeagen', status: 'Software and Game Develop..', viewers: '26m · 1.8k viewers', live: true, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=prime' },
    { name: 'KevinPowellCSS', status: 'Offline', viewers: '', live: false, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kevin' },
  ]

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-mono text-muted text-xs uppercase">Twitch Channels</h3>
      
      <div className="flex flex-col gap-4">
        {channels.map((channel, idx) => (
          <div key={idx} className="flex items-start gap-3 cursor-pointer group">
            <div className="relative">
              <img src={channel.avatar} alt={channel.name} className={`w-10 h-10 rounded-full bg-surface-hover ${channel.live ? 'border-2 border-red' : 'border border-border opacity-50'}`} />
              {channel.live && (
                <div className="absolute -bottom-1 -left-1 bg-red text-white font-mono text-3xs p-2 rounded-sm uppercase border border-background">
                  Live
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className={`font-mono text-sm ${channel.live ? 'text-text-strong' : 'text-muted'}`}>{channel.name}</span>
              <span className="font-mono text-muted text-xs truncate max-w-[150px]">{channel.status}</span>
              {channel.live && <span className="font-mono text-muted text-xxs">{channel.viewers}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
