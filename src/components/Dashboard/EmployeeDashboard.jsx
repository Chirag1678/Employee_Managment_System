import Header from "../other/Header"
import TaskListNumbers from "../other/TaskListNumbers"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = (props) => {
  // console.log(data);
  return (
    <div className="bg-[#1c1c1c] h-screen p-12">
      <Header data={props.data} changeUser={props.changeUser}/>
      <TaskListNumbers data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
