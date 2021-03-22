
import { LeftNavigation } from '../components/nav/LeftNavigation'
import Widget from '../components/widget'
import { ProgressBar } from '../components/progress'
import { ProgressBarWithText } from '../components/progress'

export default function MyProgress() {
    return (
        <div className="flex bg-gray-50">
            <LeftNavigation selected='Progress' />
            <div className="bg-gray-50 text-gray-800 min-w-full min-w-96  pl-64 pt-16 w-full ml-4 mr-4">
                <Widget title="Headings" description={<span>Progress styles</span>}>
                    <ProgressBarWithText width={10} color={'bg-red-500'} />
                    <ProgressBar width={20} color={'bg-green-500'} />
                    <ProgressBar width={40} color={'bg-blue-500'} />

                </Widget>


            </div>
        </div>
    )
}
