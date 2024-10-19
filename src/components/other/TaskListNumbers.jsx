const TaskListNumbers = ({data}) => {
    const { tasks } = data;

    const newTaskCount = tasks.filter(task => task.newTask).length;
    const completedTaskCount = tasks.filter(task => task.completed).length;
    const activeTaskCount = tasks.filter(task => task.active).length;
    const failedTaskCount = tasks.filter(task => task.failed).length;
  return (
    <div className="flex mt-10 w-full items-center justify-evenly gap-5">
        <div className=" bg-red-400 py-6 px-9 rounded-2xl flex-1">
            <h2 className="text-3xl font-bold">{newTaskCount}</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className=" bg-blue-400 py-6 px-9 rounded-2xl flex-1">
            <h2 className="text-3xl font-bold">{completedTaskCount}</h2>
            <h3 className="text-xl font-medium">Completed Task</h3>
        </div>
        <div className=" bg-green-400 py-6 px-9 rounded-2xl flex-1">
            <h2 className="text-3xl font-bold">{activeTaskCount}</h2>
            <h3 className="text-xl font-medium">Active Task</h3>
        </div>
        <div className=" bg-yellow-500 py-6 px-9 rounded-2xl flex-1">
            <h2 className="text-3xl font-bold">{failedTaskCount}</h2>
            <h3 className="text-xl font-medium">Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
