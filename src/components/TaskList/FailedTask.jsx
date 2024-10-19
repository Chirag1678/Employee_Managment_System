const FailedTask = ({task}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-2xl p-6'>
    <div className="font-semibold flex items-center justify-between text-sm">
        <h3 className="bg-red-600 px-3 py-1 rounded-lg">{task.category}</h3>
        <h4>{task.date}</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
    <p className="text-sm mt-4">{task.description}</p>
    <div className="mt-20 gap-2 absolute bottom-3 w-[82%]">
        <p className='w-full text-center px-2 rounded-xl py-2 text-sm bg-red-600'>Failed</p>
    </div>
</div>
  )
}

export default FailedTask
