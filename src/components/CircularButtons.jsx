import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid' // 或者 '@heroicons/react/solid'，取决于你想要的风格


export default function CircularButtons({direction, onClick}) {

  const Icon = direction === 'left' ? ArrowLeftIcon : ArrowRightIcon;

  return (
    <button
      type="button"
      onClick={onClick}
      className="m-10 rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <Icon className="h-6 w-6 text-white" />
    </button>

    
  );
}
