import Head from 'next/head'
import { LeftNavigation } from '../components/nav/LeftNavigation'
import Widget from '../components/widget'
import { FiStar } from 'react-icons/fi'
import { Button, OutlineButton, FlatButton } from '../components/buttons'

export default function Home() {
  return (
    <div className="flex bg-gray-50">
      <LeftNavigation selected='Button' />
      <div className="bg-gray-50 text-gray-800 min-w-full mt-4 mb-4">
        <Widget className="mb-2" title="Buttons" description={<span>Default button styles</span>}>
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center justify-start space-y-2 lg:space-y-0 lg:space-x-2">
            <Button text="Default Button" onClick={() => { console.log("HELLO BELLO") }} />
            <Button icon={<FiStar className="w-4 h-4" />} text="Default with Icon" />
            <Button type="rounded" text="Rounded Button" />
            <Button type="rounded" icon={<FiStar className="w-4 h-4" />} text="Icon Button" />
            <Button icon={<FiStar className="w-4 h-4" />} />
          </div>
        </Widget>

        <Widget
          title="Outlined buttons"
          description={<span>Outlined button styles</span>}>
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center justify-start space-y-2 lg:space-y-0 lg:space-x-2">
            <OutlineButton text="Default Button" onClick={() => { console.log("HELLO BELLO") }} />
            <OutlineButton icon={<FiStar className="w-4 h-4" />} text="Default with Icon" />
            <OutlineButton type="rounded" text="Rounded Button" />
            <OutlineButton type="rounded" icon={<FiStar className="w-4 h-4" />} text="Icon Button" />
            <OutlineButton icon={<FiStar className="w-4 h-4" />} />
          </div>
        </Widget>

        <Widget title="Flat buttons" description={<span>Flat button styles</span>}>
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center justify-start space-y-2 lg:space-y-0 lg:space-x-2">
            <FlatButton text="Default Button" onClick={() => { console.log("HELLO BELLO") }} />
            <FlatButton icon={<FiStar className="w-4 h-4" />} text="Default with Icon" />
            <FlatButton icon={<FiStar className="w-4 h-4" />} />
          </div>
        </Widget>

        <Widget title="Buttons" description={<span>Button sizes</span>}>
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center justify-start space-y-2 lg:space-y-0 lg:space-x-2 mb-2">
            <OutlineButton text="Small Button" size="small" onClick={() => { console.log("HELLO BELLO") }} />
            <OutlineButton text="Normal Button" onClick={() => { console.log("HELLO BELLO") }} />
            <OutlineButton text="Large Button" size="large" onClick={() => { console.log("HELLO BELLO") }} />
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center justify-start space-y-2 lg:space-y-0 lg:space-x-2 mb-2">
            <Button text="Small Button" size="small" onClick={() => { console.log("HELLO BELLO") }} />
            <Button text="Normal Button" onClick={() => { console.log("HELLO BELLO") }} />
            <Button text="Large Button" size="large" onClick={() => { console.log("HELLO BELLO") }} />
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center justify-start space-y-2 lg:space-y-0 lg:space-x-2 mb-2">
            <FlatButton text="Small Button" size="small" onClick={() => { console.log("HELLO BELLO") }} />
            <FlatButton text="Normal Button" onClick={() => { console.log("HELLO BELLO") }} />
            <FlatButton text="Large Button" size="large" onClick={() => { console.log("HELLO BELLO") }} />
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center justify-start space-y-2 lg:space-y-0 lg:space-x-2 mb-2">
            <Button size="small" icon={<FiStar className="w-4 h-4" />} />
            <Button icon={<FiStar className="w-4 h-4" />} />
            <Button size="large" icon={<FiStar className="w-4 h-4" />} />
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center justify-start space-y-2 lg:space-y-0 lg:space-x-2 mb-2">
            <OutlineButton size="small" icon={<FiStar className="w-4 h-4" />} />
            <OutlineButton icon={<FiStar className="w-4 h-4" />} />
            <OutlineButton size="large" icon={<FiStar className="w-4 h-4" />} />
          </div>

        </Widget>



      </div>
    </div>
  )
}
