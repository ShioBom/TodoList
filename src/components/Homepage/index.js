import React, { Component } from 'react'

import { connect } from 'react-redux'
import TodoItem from '../TodoItem';
import { addAction} from '../action';
import './index.css'
export class HomePage extends Component {
    constructor(){
        super();
        this.state ={
            value:"",
        }
    }
    handleChange(e){
        // console.log(this.state.value)
        this.setState({value:e.target.value})
    }
    render() {
        return (
            <div className='todolist'>
                <input type="text" placeholder="添加TODO" value={this.state.value} onChange={(e)=>{this.handleChange(e)}}/>
                <button onClick={()=>{this.props.handleAdd(this.state.value)}}>添加</button>
                <div>
                    <h3>进行中<span>{this.props.waiting.length}</span></h3>
                    {this.props.waiting.map((ele,ind)=>(<TodoItem key={ele.id} todo={ele} index={ele.id} status={ele.status}></TodoItem>))}
                </div>
                <div>
                    <h3>已完成<span>{this.props.finish.length}</span></h3>
                    {this.props.finish.map((ele,ind)=>(<TodoItem key={ele.id} todo={ele} index={ele.id} status={ele.status}></TodoItem>))}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        waiting:state.todos.filter((ele)=>ele.status==='waiting'),
        finish:state.todos.filter((ele)=>ele.status==='finish'),
    }
}

const mapDispatchToProps = (dispatch,ownProps)=> {
    return{
        handleAdd:(val)=>{
            const id = parseInt(Math.random()*1000000000)
            console.log(id)
            dispatch(addAction({id,val}))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
