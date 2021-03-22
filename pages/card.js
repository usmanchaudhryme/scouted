
import { LeftNavigation } from '../components/nav/LeftNavigation'
import Widget from '../components/widget'

import { Card } from '../components/card'
export default function MyCard() {
  return (
    <div className="flex bg-gray-50">
      <LeftNavigation selected='Card' />
      <div className="bg-gray-50 text-gray-800 min-w-full min-w-96  pl-64 pt-16 w-full ml-4 mr-4">
        <Widget title="Card" description={<span>Default card styles</span>}>
          <div className="flex flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>


        </Widget>


      </div>
    </div>
  )
}
