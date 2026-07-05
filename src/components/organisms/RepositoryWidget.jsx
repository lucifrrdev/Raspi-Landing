import React from 'react'

export const RepositoryWidget = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-mono text-muted text-xs uppercase">Repository</h3>
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h4 className="font-mono text-text font-medium text-sm hover:underline cursor-pointer">glanceapp/glance</h4>
          <span className="font-mono text-muted text-xs">7,281 stars · 251 forks</span>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="font-mono text-muted text-xs">Open pull requests (9 total)</span>
          <div className="flex items-start gap-2">
            <span className="font-mono text-muted text-xs whitespace-nowrap">25d</span>
            <span className="font-mono text-accent text-xs truncate hover:underline cursor-pointer">!bangs at the end</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-muted text-xs whitespace-nowrap">1mo</span>
            <span className="font-mono text-accent text-xs truncate hover:underline cursor-pointer">Bookmark status indicator</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-muted text-xs whitespace-nowrap">1mo</span>
            <span className="font-mono text-accent text-xs truncate hover:underline cursor-pointer">CSS dynamic columns refactor an..</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-mono text-muted text-xs">Issues (4 open)</span>
          <div className="flex items-start gap-2">
            <span className="font-mono text-muted text-xs whitespace-nowrap">7d</span>
            <span className="font-mono text-accent text-xs truncate hover:underline cursor-pointer">[Bug(?)] Version tag not showin..</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-muted text-xs whitespace-nowrap">7d</span>
            <span className="font-mono text-accent text-xs truncate hover:underline cursor-pointer">[Request] Mark as read</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-muted text-xs whitespace-nowrap">13d</span>
            <span className="font-mono text-accent text-xs truncate hover:underline cursor-pointer">[Feature Request] Ability to ch..</span>
          </div>
        </div>
      </div>
    </div>
  )
}
