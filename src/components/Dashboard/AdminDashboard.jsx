import AllTask from "../other/AllTask"
import CreateTask from "../other/CreateTask"
import Header from "../other/Header"

const AdminDashboard = (props) => {
  return (
    <div className="px-12 pt-12 bg-[#1c1c1c] h-fit">
        <Header changeUser={props.changeUser}/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
