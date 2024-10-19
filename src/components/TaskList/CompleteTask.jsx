const CompleteTask = ({task}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-2xl p-6 relative'>
    <div className="font-semibold flex items-center justify-between text-sm">
        <h3 className="bg-red-600 px-3 py-1 rounded-lg">{task.category}</h3>
        <h4>{task.date}</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
    <p className="text-sm mt-4">{task.description}</p>
    <div className="mt-20 gap-2 absolute bottom-3 w-[82%]">
       <p className='w-full text-center bg-green-500 px-2 rounded-xl py-2 text-sm'>Completed</p>
    </div>
</div>
  )
}

export default CompleteTask
