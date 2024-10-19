import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {
    const [userData] = useContext(AuthContext); // Destructure the context correctly
    const { employees } = userData || {}; 
    // console.log(employees);
  return (
    <div className="p-5 mt-5 rounded" id="tasklist">
        <div  className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
             <h2 className="w-1/5">Employee Name</h2>
             <h3 className="w-1/5 text-center">New Tasks</h3>
             <h3 className="w-1/5 text-center">Active Tasks</h3>
             <h3 className="w-1/5 text-center">Completed Tasks</h3>
             <h3 className="w-1/5 text-center">Failed Tasks</h3>
        </div>
        <div className="">
        {employees.map((employee,i)=>{
             const newTasksCount = employee.tasks.filter(task => task.newTask).length;
             const activeTasksCount = employee.tasks.filter(task => task.active).length;
             const completedTasksCount = employee.tasks.filter(task => task.completed).length;
             const failedTasksCount = employee.tasks.filter(task => task.failed).length;
        return (
             <div key={i} className=" mb-2 py-2 px-4 flex justify-between rounded border border-emerald-500">
             <h2 className="w-1/5 text-lg">{employee.name}</h2>
             <h3 className="w-1/5 text-lg text-blue-600 text-center">{newTasksCount}</h3>
             <h3 className="w-1/5 text-lg text-yellow-500 text-center">{activeTasksCount}</h3>
             <h3 className="w-1/5 text-lg text-green-600 text-center">{completedTasksCount}</h3>
             <h3 className="w-1/5 text-lg text-red-600 text-center">{failedTasksCount}</h3>
         </div>   
        )})}
        </div>
    </div>
  )
}

export default AllTask
