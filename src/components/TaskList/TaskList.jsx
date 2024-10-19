import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  const { tasks } = data;
  const colors=['bg-red-400','bg-green-400','bg-blue-400','bg-yellow-400','bg-purple-400'];
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full mt-10 rounded-2xl p-5 flex items-center justify-start gap-8 flex-nowrap overflow-x-scroll"
    >
      {/* {tasks.map((task, i) => (
        <div
          key={i}
          className={`'flex-shrink-0 h-full w-[300px] ${colors[i]} rounded-2xl p-6`}
        >
          <div className="font-semibold flex items-center justify-between text-sm">
            <h3 className="bg-red-600 px-3 py-1 rounded-lg">High</h3>
            <h4>{task.date}</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
          <p className="text-sm mt-4">{task.description}</p>
        </div>
      ))} */}
      {/* <AcceptTask/>
      <NewTask/>
      <CompleteTask/>
      <FailedTask/> */}
      {tasks.map((task,i)=>{
        if(task.active){
            return <AcceptTask key={i} task={task}/>
        }
        else if(task.newTask){
            return <NewTask key={i} task={task}/>
        }
        else if(task.completed){
            return <CompleteTask key={i} task={task}/>
        }
        else{
            return <FailedTask key={i} task={task}/>
        }
      })}
    </div>
  );
};

export default TaskList;
