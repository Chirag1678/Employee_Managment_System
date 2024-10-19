const AcceptTask = ({task}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-2xl p-6 relative'>
        <div className="font-semibold flex items-center justify-between text-sm">
            <h3 className="bg-red-600 px-3 py-1 rounded-lg">{task.category}</h3>
            <h4>{task.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
        <p className="text-sm mt-4">{task.description}</p>
        <div className="flex justify-between mt-20 gap-2 absolute bottom-3">
            <button className="px-2 rounded-xl py-2 text-sm bg-green-500">Mark as completed</button>
            <button className="px-2 rounded-xl py-2 text-sm bg-red-600">Mark as failed</button>
        </div>
    </div>
  )
}

export default AcceptTask
