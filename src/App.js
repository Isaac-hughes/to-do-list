import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    task: "",
    taskArr: []
  };

  taskUpdate = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val })
  }

  handleSubmit = (event) => {
    let floatArr = [...this.state.taskArr];
    event.preventDefault()
    floatArr.push(this.state.task);
    this.setState({ taskArr: floatArr, task: "" })
  }

  compTask = (index) => {
    let compArr = this.state.taskArr;
    compArr[index] += " ✔"
    this.setState({ taskArr: compArr })
  }

  removeTask = (index) => {
    let delArr = [...this.state.taskArr];
    delArr.splice(index);
    this.setState({ taskArr: delArr });
  }

  render() {
    let isDisabled = this.state.task === ""
    return (
      <div className="App">
        <div className="inputs">
          <form onSubmit={this.handleSubmit}>
            <input className="inputBox" type="text" name="task" value={this.state.task} onChange={this.taskUpdate}/>
            <button className="submit" type="submit" disabled={isDisabled}>Submit</button>
          </form>
          {this.state.taskArr.map((item, index) => {
            return <ListItem key={index} compTask={this.compTask} removeTask={this.removeTask} itemNumber={index} item={item}/>
          })}
        </div>
      </div>
    );
  }
}

const ListItem = (props) => {
  return(
    <div>
      <h2 className="taskItem">{props.item}</h2>
      <button className="compButton" onClick={() => {props.compTask(props.itemNumber)}}>Completed</button>
      <button className="removeButton" onClick={() => {props.removeTask(props.itemNumber)}}>Remove Task</button>
    </div>
  )
}

export default App;
