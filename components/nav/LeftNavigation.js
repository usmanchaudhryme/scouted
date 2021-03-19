import { NavItems } from './NavItems'
export const LeftNavigation = ({ title, selected }) => {
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 max-w-xs">
      <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div className="flex items-center justify-center h-14 border-b">
          <div>{title || 'Tailwinder'}</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 px-4 space-y-1">
            {NavItems.map((i, k) => (
              < li key={'item_' + k} >
                <a href="#" className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 ${selected == i ? 'text-gray-800 border-l-4 border-transparent border-indigo-500 pr-6 bg-gray-50 text-gray-600' : ''}`}>
                  <span className="ml-2 text-sm tracking-wide truncate">{i}</span>
                  {/* <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span> */}

                </a>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div >)
}