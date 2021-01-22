import React, { useState } from 'react';
import './App.css';
const App = () => {
 const [task, updateTask] = useState("")
 const [taskArr, updateTaskArr] = useState([])

  const taskUpdate = (event) => {
    let val = event.target.value;
    updateTask(val)
  }

  const handleSubmit = (event) => {
    let floatArr = [...taskArr];
    event.preventDefault()
    floatArr.push(task);
    updateTaskArr(floatArr)
    updateTask("")
  }

  const compTask = (index) => {
    let compArr = [...taskArr];
    compArr[index] += " ✔"
    updateTaskArr(compArr)
  }

  const removeTask = (index) => {
    let delArr = [...taskArr];
    delArr.splice(index, 1);
    updateTaskArr(delArr);
  }

 
  let isDisabled = task === ""
  return (
    <div className="App">
      <div className="inputs">
        <form onSubmit={handleSubmit} className="inputForm">
          <input className="inputBox" type="text" name="task" value={task} onChange={taskUpdate} autoComplete="off" placeholder="What do you need to do!"/>
          <button className="submit" type="submit" disabled={isDisabled}>Submit</button>
        </form>
      </div>
      <div className="todoList">
        {taskArr.map((item, index) => {
          return <ListItem key={index} compTask={compTask} removeTask={removeTask} itemNumber={index} item={item}/>
        })}
      </div>
    </div>
  );
  
}

const ListItem = (props) => {
  return(
    <div className="todoItem">
      <h2 className="taskItem">{props.item}</h2>
      <div className="controlButtons">
      <button className="compButton" onClick={() => {props.compTask(props.itemNumber)}}>Completed</button>
      <button className="removeButton" onClick={() => {props.removeTask(props.itemNumber)}}>Remove Task</button>
      </div>
    </div>
  )
}

export default App;
