import React, { Component } from 'react'
import TodisplayActiveTasks from './Todisplaytasks'
let v=0
export default class Todoo extends Component {
    constructor(props){
        super(props)
        this.state={
              task:'',
              taskShow:'',
              activeTaskShow:'',
              taskArray:[],
              activeTaskArray:[],
              visibleTaskArray:[],
              tasksTitle:[],
              editText:'',
             indexValue:''
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
                activeTaskArray:[...this.state.activeTaskArray,newTask],
                task:''  
        })
    }
    }
    onShowAllTasks=()=>{
        this.setState({
            taskShow:1,
            activeTaskShow:0,
            tasksTitle:"Showing all Tasks",
            visibleTaskArray:this.state.taskArray,

        })
     }
     onShowActiveTasks=()=>{
       const result= this.state.activeTaskArray.filter(valuee=>valuee.status===false)
        this.setState({
            taskShow:1,
            activeTaskShow:1,
            tasksTitle:"Showing Active Tasks",
            visibleTaskArray:result
        })        
     }
     onCompletedTasks=()=>{
        const completed= this.state.taskArray.filter(valuee=>valuee.status===true)
         this.setState({
             taskShow:1,
             activeTaskShow:0,
             tasksTitle:"Showing completed Tasks",
             visibleTaskArray:completed
         })        
      }
      onEdit=(index)=>{
          console.log(index)
       const arrayid= (this.state.taskArray.findIndex(element=>element.uniqueid===this.state.activeTaskArray[index].uniqueid));
        const l=this.state.taskArray[arrayid]
        console.log(arrayid)
        
        const j=l.text
        
       this.setState ({
          editText:j,
          indexValue:arrayid
          });
          }

        
    onEditing=(event)=>{
        this.setState({
            editText:event.target.value
            

        })
    }

    editElement=()=>{
        let markers=[...this.state.taskArray]
        markers[this.state.indexValue].text=this.state.editText
        this.setState(state =>({
              taskArray:[...markers]
        })
            );
    }

    onDelOrCOmpleted=(id,type)=>{
        if(type==='complete')
        {
            let k=[...this.state.taskArray]
            for(var i = 0; i < k.length; i++){
             if((k[i].uniqueid)===(this.state.activeTaskArray[id].uniqueid))
             {
                k[i].status=true
             }
             }
             this.setState(state => ({
              taskArray:[...k]  
              
            }));
        }
      const taskslist =this.state.activeTaskArray.slice(0,id).concat(this.state.activeTaskArray.slice(id+1));
      this.setState ({
        activeTaskArray: taskslist
    });
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
                <button onClick={this.onCompletedTasks}>Show completed Tasks</button></div>&nbsp;
                <div> {this.state.activeTaskShow&&<> <input value={this.state.editText}  onChange={this.onEditing} placeholder="edit the task"/> &nbsp;
                     <button onClick={this.editElement}>Edittheelement</button></>}</div>&nbsp;
                {this.state.taskShow && <TodisplayActiveTasks h={this.state.visibleTaskArray}  callDElOrCompleted={this.onDelOrCOmpleted} callEdit={this.onEdit} activeTaskShow={this.state.activeTaskShow} title={this.state.tasksTitle} />}
            </div>
        )
    }
}
