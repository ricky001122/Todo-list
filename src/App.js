import './App.css';
import {useState} from "react";
import {Task} from "./Task"


     function App() {
       let [todoList, setTodoList] = useState([]);
       let [newTask, setNewTask] = useState("");
       
          let handleChange = (event) =>{
               setNewTask(event.target.value);
          }

          let addTask = () =>{
               let task = {
                    id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id +  1,
                    taskName: newTask,
                    completed: false, 
               }

               setTodoList([...todoList, task]);
          }

          let deleteTask = (id) => {
               setTodoList(todoList.filter((task) => task.id !== id)); 
          }

          let completeTask = (id) => {
               setTodoList(
                    todoList.map((task) => {
                         if(task.id === id) {
                              return {...task, completed: true};
                         } else{
                              return task;
                         }
                    })
               );
          };
          
        return ( 
        <div className='App'>
          <div className='addTask'>
               <input onChange={ handleChange}/>
               <button onClick={addTask}> Add Task</button>
          </div>
          <div className='list'> 
          {todoList.map((task) => {
          return(
               <Task
                    taskName={task.taskName}
                    id={task.id}
                    completed={task.completed}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
               />
           ); 
               
          })}
          </div>
          </div>  
       );
     };
     export default App;

    


// // import './App.css';

// // function App() {
// //   let names = ["deku","Mineta","Ashido","Eren"];
  
// //   return (
// //   <div className='App'>
// //     {names.map((name, key) => {
// //       return <h1 key={key}> {name} </h1>;
// //     })}
// //   </div>  
// //   );
// // };

// // export default App;



//  import './App.css';

//  function App() {
// //    let planets = [
// //     {name: "Mars", isGasPlanet: false},
// //     {name: "Earth", isGasPlanet: false},
// //     {name: "Jupiter", isGasPlanet: true},
// //     {name: "Venus", isGasPlanet: false},
// //     {name: "Neptune", isGasPlanet: true},
// //     {name: "Uranus", isGasPlanet: true},

// // ];
// return <div className='App'>

//   <Planets name="Mars" isGasPlanet="false" />
//   <Planets name="Earth" isGasPlanet="false" />
//   <Planets name="Jupiter" isGasPlanet="true" />
//   <Planets name="Venus" isGasPlanet="false" />
//   <Planets name="Neptune" isGasPlanet="true" />
//   <Planets name="Uranus" isGasPlanet="true" />
 
//   </div> 
//  };

//  let Planets = (props) => {
//   return <div>
//     <h1>{props.name}</h1>
//     <h2>{props.isGasPlanet}</h2>
//   </div>
//  }
//  export default App;