import React, { Component } from "react";
import { connect } from "react-redux";
import { addAction, delAction, FinishAction, updateAction } from "../action";
import "./index.css";
export class TodoItem extends Component {
  render() {
    return (
      <li className="item">
        <input
          type="checkbox" checked={this.props.status==='finish'?true:false}
          onChange={e => this.props.handleFinish(e, this.props.index)}
        />
        <p>{this.props.todo.value}</p>
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
