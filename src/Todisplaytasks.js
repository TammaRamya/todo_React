import React,{Component} from "react"
export default class Todis extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    onDelOrCOmp=(index,type)=>{
        this.props.callDElOrCompleted(index,type);
    }
    onEditClick=(index)=>{
        this.props.callEdit(index);
    }
    render() {
        console.log(this.props.h)
		return (
            <div>
               <h3> {this.props.title} </h3>&nbsp;
           <div>  { Object.entries(this.props.h).map(([key,value])=>(
            <li key={key}>{value.text}
            {this.props.activeTaskShow ?
            <>
            <button onClick={()=>this.onDelOrCOmp(key,'delete')}>delete</button>&nbsp;
            <button onClick={()=>this.onEditClick(key)}>edit</button>&nbsp;
            <button onClick={()=>this.onDelOrCOmp(key,'complete')}>complete</button></> :null}
            </li>))}
            </div>
            </div>
		)
}
}