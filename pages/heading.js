import Head from 'next/head'
import { LeftNavigation } from '../components/nav/LeftNavigation'
import Widget from '../components/widget'
import { Heading } from '../components/heading'

export default function Home() {
    return (
        <div className="flex bg-gray-50">
            <LeftNavigation selected='Heading' />
            <div className="bg-gray-50 text-gray-800 min-w-full min-w-96  pl-64 pt-16 w-full ml-4 mr-4">
                <Widget title="Headings" description={<span>Default heading styles</span>}>
                    <Heading size="tiny">Tiny</Heading>
                    <Heading size="small">Small</Heading>
                    <Heading size="medium">Medium</Heading>
                    <Heading size="large">Large</Heading>
                    <Heading size="huge">Huge</Heading>

                </Widget>


            </div>
        </div>
    )
}
