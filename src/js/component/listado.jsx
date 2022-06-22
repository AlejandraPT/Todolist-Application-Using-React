import React, {useState, useCallback} from "react";

const Listado = () => {

    const [newTask, setnewTask] = useState ('');
    const [tasks, setTasks] = useState([]);
    
    const onNewTaskChange = useCallback((event)=>{
        setnewTask(event.target.value);
    }, []);
    
    const formSubmitted =useCallback ((event) => {
        event.preventDefault();
        if (!newTask.trim()) return;
        setTasks([
            ...tasks,
            {
                id: tasks.length + 1,
                content: newTask,
                done: false,
            }
        ]);
        setnewTask('');
    }, [newTask, tasks]);
    
    const deleteTask = useCallback((task) => (event) => {
        setTasks(tasks.filter(otherTask => otherTask!= task));
    }, [tasks]);
    
    
        return (
            <div className="container col-12 mb-3 text-center">
                <div className="row">
                    <div className="col-12 p-2">
                            <form className="form" onSubmit={formSubmitted}>
                                <input
                                id="newTask"
                                name="newTask"
                                placeholder="Escribe la tarea a realizar..."
                                autoComplete="off"
                                value={newTask}
                                onChange={onNewTaskChange}
                                />
                                <button id="button1">AÑADIR</button>
                                </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3 mt-3 text-center">
                        <ul>
                            {tasks.map((task)=>(
                                <p key={task.id}>
                                        <span className={task.done ? 'done' : ''}>
                                            {task.content}</span>
                                    <button id="button2" onClick={deleteTask(task)}><i class="fas fa-trash-alt"></i></button>
                                    </p>
                            ))}
                            
                            
                        </ul>
                    </div>
                    <label><strong> Te quedan {tasks.length} tareas !!</strong></label>
                </div>
            </div>
        );

};

export default Listado;