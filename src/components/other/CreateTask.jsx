import {useState } from "react";

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
        const newTask = {
            'active': false,
            'newTask': true,
            'completed': false,
            'failed': false,
            title,
            description,
            date,
            category
        };
        const data = JSON.parse(localStorage.getItem('employees')) || [];
        data.forEach(elem => {
            if(elem.name===name){
                // console.log(elem.tasks);
                elem.tasks = elem.tasks || [];
                elem.tasks.push(newTask);
            }
        })
        localStorage.setItem('employees', JSON.stringify(data))
        setTitle('')
        setName('')
        setDescription('')
        setDate('')
        setCategory('');
    }
  return (
    <div className="flex justify-center mt-10">
        <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col bg-gray-500 p-10 rounded-2xl w-1/2">
            <div>
                <h3 className="text-xl font-semibold">Task Title</h3>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} className="bg-[#1c1c1c] w-full outline-none p-3 rounded-xl mt-2 mb-3 placeholder:text-gray-300 text-xl" type="text" placeholder="Make a UI Design"/>
            </div>
            <div>
                <h3 className="text-xl font-semibold">Description</h3>
                <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="bg-[#1c1c1c] w-full outline-none p-3 rounded-xl mt-2 mb-3 placeholder:text-gray-300 text-xl" name="" cols="30" rows="10" placeholder="Detailed description of task (Max 500 words)" maxLength="500"></textarea>
            </div>
            <div>
                <h3 className="text-xl font-semibold">Date</h3>
                <input value={date} onChange={(e)=>setDate(e.target.value)} className="bg-[#1c1c1c] w-full outline-none p-3 rounded-xl mt-2 mb-3 placeholder:text-gray-300 text-xl" type="date" name="" />
            </div>
            <div>
                <h3 className="text-xl font-semibold">Assign To</h3>
                <input value={name} onChange={(e)=>setName(e.target.value)} className="bg-[#1c1c1c] w-full outline-none p-3 rounded-xl mt-2 mb-3 placeholder:text-gray-300 text-xl" type="text" name="" placeholder="Employee name"/>
            </div>
            <div>
                <h3 className="text-xl font-semibold">Category</h3>
                <input value={category} onChange={(e)=>setCategory(e.target.value)} className="bg-[#1c1c1c] w-full outline-none p-3 rounded-xl mt-2 mb-3 placeholder:text-gray-300 text-xl" type="text" name="" placeholder="Design, Developemnt, etc.."/>
            </div>
            <button className="bg-green-500 hover:bg-green-600 mx-auto text-xl mt-2 py-3 px-5 rounded-xl">Create Task</button>
        </form>
    </div>
  )
}

export default CreateTask
