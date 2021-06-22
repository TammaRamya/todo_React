import React, { Component } from 'react'
export default class Todoo extends Component {
    constructor(props){
        super(props)
        this.state={
              task:'',
              activeTaskShow:'',//conditional rendering
              allTaskShow:'',//conditional rendering 
              completedTaskShow:'',//conditional rendering
              editText:'',
              indexValue:'',
              taskArray:[],
              activeTaskArray:[],
              completedTaskArray:[]
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
        var newTask ={
             text:this.state.task,
             key:false
        }
              this.setState({
                taskArray:[...this.state.taskArray,newTask],
                activeTaskArray:[...this.state.activeTaskArray,newTask],
                task:''  
        })
    }
    }
    onShowAllTasks=()=>{
        this.setState({
            allTasksShow:1
        })
     }
     onShowActiveTasks=()=>{
        this.setState({
            activeShowTask:1
        })
            
     }
     onCompletedTasks=()=>{
        this.setState({
            completedTaskShow:1
        })
            
     }

     onDelOrCOmpleted=(id,type)=>{
        if(type==='complete')
        {
            let h=[...this.state.taskArray]
            h[id].key=true
           
      this.setState(state => ({
        
          taskArray:[...h]
          
      }));
    }
      const taskslist =this.state.activeTaskArray.slice(0,id).concat(this.state.activeTaskArray.slice(id+1));

        this.setState ({
            activeTaskArray: taskslist
        });
         }

         onEditing=(event)=>{
            this.setState({
                editText:event.target.value
                
    
            })
        }
        onEdit=(index)=>{
            const l=this.state.activeTaskArray[index]
            const g=l.text
       this.setState ({
              editText:g,
              indexValue:index
       });
        }
        editElement=()=>{
            let markers=[...this.state.activeTaskArray]
            markers[this.state.indexValue].text=this.state.editText
            this.setState(state =>({
                  activeTaskArray:[...markers]
            })
                );
    
        }
    render()
    {
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
                 {this.state.allTasksShow && Object.entries(this.state.taskArray).map(([key,value])=>(
            <li id={key}>{value.text}</li>))}
                 <h4>Tasks Remaining</h4>
                <div> <input value={this.state.editText}  onChange={this.onEditing} placeholder="edit the task"/> &nbsp;
                 <button onClick={this.editElement}>Edittheelement</button></div> &nbsp;
                 {this.state.activeShowTask &&
                  Object.entries(this.state.activeTaskArray).map(([index,value])=>(
            <li id={index}>{value.text}
            <button onClick={()=>this.onDelOrCOmpleted(index,'delete')} >delete</button> &nbsp;
            <button  onClick={()=>this.onDelOrCOmpleted(index,'complete')} >Complete</button> &nbsp;
            <button onClick={()=>this.onEdit(index,)} >Edit</button> &nbsp;
            </li>) )}
                 <h4>Tasks Completed</h4>
                 {this.state.completedTaskShow && this.state.taskArray.filter(valuee=>valuee.key===true).map(filtervalue=>(
                     <li>{filtervalue.text}</li>
                 ))}

            </div>
        )
    }
}