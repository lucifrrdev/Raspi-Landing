import React from 'react'
import { MainTemplate } from '../components/templates/MainTemplate'
import { CalendarWidget } from '../components/organisms/CalendarWidget'
import { RSSFeedWidget } from '../components/organisms/RSSFeedWidget'
import { TwitchWidget } from '../components/organisms/TwitchWidget'
import { NewsWidget } from '../components/organisms/NewsWidget'
import { VideosWidget } from '../components/organisms/VideosWidget'
import { RedditWidget } from '../components/organisms/RedditWidget'
import { WeatherWidget } from '../components/organisms/WeatherWidget'
import { RepositoryWidget } from '../components/organisms/RepositoryWidget'
import { MarketsWidget } from '../components/organisms/MarketsWidget'

export const HomePage = () => {
  return (
    <MainTemplate>
      {/* Left Column */}
      <div className="md:col-span-1 lg:col-span-3 md:order-1 lg:order-1 flex flex-col gap-4">
        <CalendarWidget />
        <RSSFeedWidget />
        <TwitchWidget />
      </div>

      {/* Middle Column */}
      <div className="md:col-span-2 lg:col-span-6 md:order-3 lg:order-2 flex flex-col gap-4 lg:border-l lg:border-r border-border lg:px-6">
        <NewsWidget />
        <VideosWidget />
        <RedditWidget />
      </div>

      {/* Right Column */}
      <div className="md:col-span-1 lg:col-span-3 md:order-2 lg:order-3 flex flex-col gap-4">
        <WeatherWidget />
        <RepositoryWidget />
        <MarketsWidget />
      </div>
    </MainTemplate>
  )
}
