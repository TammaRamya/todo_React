import React, { Component } from 'react'
export default class Todisplay extends Component {
    constructor(props){
        super(props)
        this.state={
             taskArray:props.h,
             k:props.g,
             editText:'',
             indexValue:''
        }
    }
    onEdit=(index)=>{
        const l=this.state.taskArray[index]
        const j=l.text
   this.setState ({
          editText:j,
          indexValue:index
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
            var h=[...this.state.taskArray]
             h[id].status=true
             console.log(h);
             this.setState(state => ({
              taskArray:[...h]  
              
            }));
        }
      const taskslist =this.state.taskArray.slice(0,id).concat(this.state.taskArray.slice(id+1));
      this.setState ({
        taskArray: taskslist
    });
    }

    render() {
        console.log(this.state.taskArray)
		return (
               
           <div> 
            <div>{this.state.k===1 &&<input value={this.state.editText}  onChange={this.onEditing} placeholder="edit the task"/> }&nbsp;
            {this.state.k===1 &&<button onClick={this.editElement}>Edittheelement</button>}</div>&nbsp;  
            <div>
            { Object.entries(this.state.taskArray).map(([key,value])=>(
            <li key={key}>{value.text}&nbsp;
            {this.state.k===1 && <button onClick={()=>this.onDelOrCOmpleted(key,'delete')}>delete</button>}&nbsp;
            {this.state.k===1 && <button onClick={()=>this.onEdit(key)}>edit</button>}&nbsp;
            {this.state.k===1 && <button onClick={()=>this.onDelOrCOmpleted(key,'complete')}>complete</button>}</li>))}</div>
            </div>
		)
}
}
