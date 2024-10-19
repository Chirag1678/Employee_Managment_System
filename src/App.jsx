import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext); // Destructure the context correctly
  const { employees } = userData || {}; 
  useEffect(() => {
    const loggedInUser=localStorage.getItem("loggedInUser");
    // console.log(loggedInUser);
    if (loggedInUser) {
      const userData=JSON.parse(loggedInUser);
      // console.log(userData);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  },[])
  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password==123){
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(employees){
      const employee=employees.find((e)=>email==e.email && e.password==password)
      if(employee){
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
      else{
        alert("Invalid credentials");
      }
    }
    else{
      alert("Invalid credentials");
    }
  }
  return (
    <>
    {!user?<Login handleLogin={handleLogin}/>:''}
    {user==='admin'?<AdminDashboard changeUser={setUser}/>: (user==='employee' ?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null)}
    </>
  )
}

export default App
