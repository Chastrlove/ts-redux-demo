import { connect } from "react-redux";
import * as React from "react";
import * as _ from "lodash";

class TodoList extends React.Component<any> {
  render() {
    const { todos } = this.props;
    return todos
      ? _.map(todos.byIds, item => {
          return <div>{item.content}</div>;
        })
      : null;
  }
}

const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
