const Header = ({data,changeUser}) => {
  const logout=()=>{
    localStorage.setItem('loggedInUser','');
    changeUser('');
  }
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-xl">Hello,<br/><span className="text-3xl font-bold">{data?data.name:"Admin"} 👋</span></h1>
      <button onClick={logout} className="bg-red-500 rounded px-4 py-2 font-semibold">Log Out</button>
    </div>
  )
}

export default Header
