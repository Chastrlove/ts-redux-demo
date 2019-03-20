import * as React from "react";
import { bindActionCreators } from "redux";
import { connect  } from "react-redux";
import * as all from "../redux/actions/actions";
import { Button } from "antd";

interface AddTodoProps {
  addTodo: (value) => void;
  getRemoteValue: () => void;
}

interface TodoHeaderState {
  input: string;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(all, dispatch);
};

class AddTodo extends React.Component<AddTodoProps, TodoHeaderState> {
  constructor(props) {
    super(props);
  }
  public state = {
    input: ""
  };

  public updateInput = input => {
    this.setState({ input });
  };

  public handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  public getTodo = () => {
    this.props.getRemoteValue();
  };

  public render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <Button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </Button>
        <Button className="get-todo" onClick={this.getTodo}>
          get Todo
        </Button>
      </div>
    );
  }
}

const ConnectedTodos = connect(
  null,
  mapDispatchToProps
)(AddTodo);

export default ConnectedTodos
