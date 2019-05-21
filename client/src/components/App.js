import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, editTodo, fetchTodos } from "../actions";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Item from "./Item";

class App extends React.Component {
  state = { input: "" };

  componentDidMount() {
    this.props.fetchTodos();
  }

  handleAdd = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  renderTodos = () => {
    return (
      this.props.isSignedIn &&
      this.props.todos && (
        <div className="ui very relaxed large divided list">
          {this.props.todos.map(
            todo =>
              todo.userId == this.props.currentUserId && (
                <Item
                  key={todo._id}
                  onDelete={() => this.props.deleteTodo(todo._id)}
                  onEdit={text => this.props.editTodo(todo._id, text)}
                >
                  {todo.text}
                </Item>
              )
          )}
        </div>
      )
    );
  };

  render() {
    console.log("state:", this.props.todos);
    return (
      <React.Fragment>
        <Header />
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Sidebar />
            </div>
            <div className="twelve wide column">
              <h3 className="ui header">
                Today
                <div className="sub header">{new Date().toDateString()}</div>
              </h3>
              {this.renderTodos()}
              <div className="ui fluid action input">
                <input
                  type="text"
                  value={this.state.input}
                  onChange={e => this.setState({ input: e.target.value })}
                />
                <button
                  onClick={this.handleAdd}
                  className="ui teal right labeled icon button"
                >
                  <i className="plus icon" />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer,
    isSignedIn: state.authReducer.isSignedIn,
    currentUserId: state.authReducer.userId
  };
};

export default connect(
  mapStateToProps,
  { addTodo, fetchTodos, deleteTodo, editTodo }
)(App);
