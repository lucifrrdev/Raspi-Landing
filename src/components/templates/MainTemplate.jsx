import React, { useState } from 'react'
import { Home, BarChart2, Gamepad2, Server, ChevronLeft, ChevronRight, Menu, Search, Bell, Sun, Moon } from 'lucide-react'
import { Button } from '../atoms/Button'
import { Avatar } from '../atoms/Avatar'
import { useTheme } from '../../hooks/useTheme'

export const MainTemplate = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-text font-sans flex transition-all duration-300">

      {/* Mobile Backdrop Overlay */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar (Desktop & Mobile Drawer) */}
      <aside className={`
        fixed md:sticky top-0 left-0 h-screen z-50 md:z-40 
        flex flex-col gap-4 bg-surface border-r border-border p-4 
        transition-all duration-300 shrink-0 
        ${isSidebarOpen ? 'translate-x-0 w-56' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className={`font-mono font-bold text-2xl text-text-strong flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-between md:justify-center flex-col md:gap-4'}`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg shrink-0 bg-accent text-white flex items-center justify-center text-sm">G</div>
            <span className={`${isSidebarOpen ? 'block' : 'block md:hidden'}`}>Raspi</span>
          </div>
          <div className="hidden md:block">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <nav className="flex flex-col gap-2 font-mono text-sm w-full">
          <Button as="a" href="#" variant="nav" active={isSidebarOpen} size="navIcon" title="Home">
            <Home className="w-4 h-4 shrink-0" />
            <span className={`${isSidebarOpen ? 'block' : 'block md:hidden'}`}>Home</span>
          </Button>
          <Button as="a" href="#" variant="nav" active={false} size="navIcon" title="Markets">
            <BarChart2 className="w-4 h-4 shrink-0" />
            <span className={`${isSidebarOpen ? 'block' : 'block md:hidden'}`}>Markets</span>
          </Button>
          <Button as="a" href="#" variant="nav" active={false} size="navIcon" title="Gaming">
            <Gamepad2 className="w-4 h-4 shrink-0" />
            <span className={`${isSidebarOpen ? 'block' : 'block md:hidden'}`}>Gaming</span>
          </Button>
          <Button as="a" href="#" variant="nav" active={false} size="navIcon" title="Homelab">
            <Server className="w-4 h-4 shrink-0" />
            <span className={`${isSidebarOpen ? 'block' : 'block md:hidden'}`}>Homelab</span>
          </Button>
        </nav>
      </aside>

      {/* Main Content (Right Side) */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top Header (Desktop & Mobile) */}
        <header className="w-full bg-surface/80 backdrop-blur-md border-b border-border p-3 sticky top-0 z-30 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="md:hidden -ml-2">
              <Button size="icon" variant="ghost" onClick={() => setIsSidebarOpen(true)}>
                <Menu className="w-5 h-5" />
              </Button>
            </div>

            <div className="font-mono font-bold text-text-strong text-lg md:hidden">Raspi</div>
          </div>

          <div className="flex items-center gap-2 text-muted">
            <Button size="circle" variant="ghost" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button size="circle" variant="ghost">
              <Search className="w-4 h-4" />
            </Button>
            <div className="relative">
              <Button size="circle" variant="ghost">
                <Bell className="w-4 h-4" />
              </Button>
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red rounded-full pointer-events-none"></span>
            </div>
            <div className="ml-1 sm:ml-2">
              <Button size="unstyled" variant="unstyled">
                <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" size="md" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Grid Area */}
        <main className="flex-1 w-full max-w-7xl mx-auto p-4 overflow-x-hidden">
          <div className="w-full hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-start">
            {children}
          </div>
        </main>
      </div>

      {/* Bottom Nav (Mobile Only) - Using p-2 to give space without pb */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-lg border-t border-border z-40">
        <div className="flex items-center justify-around p-2">
          <Button as="a" href="#" variant="bottomNav" active={true} size="unstyled">
            <Home className="w-4 h-4" />
            <span className="text-3xs font-mono uppercase">Home</span>
          </Button>
          <Button as="a" href="#" variant="bottomNav" active={false} size="unstyled">
            <BarChart2 className="w-4 h-4" />
            <span className="text-3xs font-mono uppercase">Markets</span>
          </Button>
          <Button as="a" href="#" variant="bottomNav" active={false} size="unstyled">
            <Gamepad2 className="w-4 h-4" />
            <span className="text-3xs font-mono uppercase">Gaming</span>
          </Button>
          <Button as="a" href="#" variant="bottomNav" active={false} size="unstyled">
            <Server className="w-4 h-4" />
            <span className="text-3xs font-mono uppercase">Homelab</span>
          </Button>
        </div>
      </div>

    </div>
  )
}
