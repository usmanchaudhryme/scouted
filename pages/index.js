import Head from 'next/head'
import { LeftNavigation } from '../components/nav/LeftNavigation'

export default function Home() {
  return (
    <div className="flex">
      <LeftNavigation selected='Button' />
      <div className="bg-gray-50 text-gray-800 min-w-full pl-64 pt-16">Something goes here</div>
    </div>
  )
}
