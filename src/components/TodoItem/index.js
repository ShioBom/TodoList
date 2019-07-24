import React, { Component } from "react";
import { connect } from "react-redux";
import { editAction, delAction, FinishAction, updateAction } from "../action";
import "./index.css";

var clickTimeId;
export class TodoItem extends Component {
  handleEdit=(e) => {
    // 取消上次延时未执行的方法
    clearTimeout(clickTimeId);
    let value = e.target.innerText;
    let html = `<input type='text' value=${value}></input>`;
    e.target.innerHTML = html;
  }
  render() {
    return (
      <li className="item">
        <input
          type="checkbox"
          checked={this.props.status === "finish" ? true : false}
          onChange={e => this.props.handleFinish(e, this.props.index)}
        />
        <p onDoubleClick={e => this.handleEdit(e)}
        onClick ={e=>{this.props.handleUpdate(e,this.props.index)}}>
          {this.props.todo.value}
          
        </p>
        <button onClick={() => this.props.handleDel(this.props.index)}>
          删除
        </button>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // handleAdd:()=>{dispatch(addAction(val))},
    handleDel: ind => {
      dispatch(delAction(ind));
    },
    handleFinish: (e, ind) => {
      e.target.checked
        ? dispatch(FinishAction(ind))
        : dispatch(updateAction(ind));
    },
    handleUpdate:(e,ind)=>{
      clearTimeout(clickTimeId);
      let pDom = e.target;
        clickTimeId = setTimeout(function() {
          //此处为单击事件要执行的代码
         if(pDom.nodeName === 'P'){
           let value = pDom.childNodes[0].value;
           dispatch(editAction({value,ind}))
         }
      }, 250);
    }
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
