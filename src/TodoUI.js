import React, { Component } from 'react'
import Todisplay from './Todisplay'
let v=0
export default class Todoo extends Component {
    constructor(props){
        super(props)
        this.state={
              task:'',
              activeTaskShow:'',//conditional rendering
              allTaskShow:'',//conditional rendering 
              completedTaskShow:'',//conditional rendering
              taskArray:[],
              visibleTaskArray:[],
        }
    } 
    onChange=(event)=>{
        this.setState({
            task:event.target.value

        })
    }
    onAdd=()=>{
        if(this.state.task !=='')
        {
            v++;
        let newTask ={
            uniqueid:v,
             text:this.state.task,
             status:false
        }
              this.setState({
                taskArray:[...this.state.taskArray,newTask],
                task:''  
        })
    }
    }
    onShowAllTasks=()=>{
        this.setState({
            allTasksShow:1,
            visibleTaskArray:this.state.taskArray

        })
     }
     onShowActiveTasks=()=>{
       const result= this.state.taskArray.filter(valuee=>valuee.status===false)
        this.setState({
            activeShowTask:1,
            visibleTaskArray:result
        })        
     }
     onCompletedTasks=()=>{
        const completed= this.state.taskArray.filter(valuee=>valuee.status===true)
         this.setState({
             completedTaskShow:1,
             visibleTaskArray:completed
         })        
      }
    render()
    {
        console.log(this.state.taskArray)
        return(
            <div>
                <h1>ToDo Matic</h1>
                <h2>What needs to be done?</h2>
                <div>
                 <input value={this.state.task}  onChange={this.onChange} placeholder="Add any task"/> &nbsp;
                <button type='submit' onClick={this.onAdd}>add</button>
                </div>
                &nbsp;
                <div> <button onClick={this.onShowAllTasks}>Show AllTasks</button>&nbsp;
                <button onClick={this.onShowActiveTasks}>Show active Tasks</button>&nbsp;
                <button onClick={this.onCompletedTasks}>Show completed Tasks</button></div>
                <h4>AllTasks</h4>
                {this.state.allTasksShow &&<Todisplay h={this.state.taskArray} />}
                <h4>Tasks Remaining</h4>
                {this.state.activeShowTask && <Todisplay h={this.state.visibleTaskArray}  g={this.state.activeShowTask} />}
                <h4>Tasks Completed</h4>
                {this.state.completedTaskShow &&<Todisplay h={this.state.visibleTaskArray} />}
            </div>
        )
    }
}