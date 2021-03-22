import { ProgressBar } from '../progress'
export const Card = ({ }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mr-2">
    <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">A new project</div>
      <p className="text-grey-darker text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    </div>
    <div className="px-6 py-4">
      <ProgressBar width={40} color="bg-red-500" />
    </div>
  </div>
)
