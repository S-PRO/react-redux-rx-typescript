import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import { MainActions, Todo } from './';

interface IMainProps extends IProps {
  todos: Todo[];
}

/**
 * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9951
 */
@(connect(
  (state: any) => ({ todos: state.main.todos, router: state.router }),
  (dispatch: Dispatch<void>) => ({
    actions: bindActionCreators({ ...MainActions, }, dispatch)
  }),
) as any)
export default class MainContainer extends React.Component<IMainProps, any> {

  addTodo = () => {
    this.props.actions.addTodo({
      text: 'Use Redux with TypeScript',
      completed: false,
      id: Date.now()
    })
  };

  render() {
    return (
      <div className="todoapp">
        <button onClick={this.addTodo}>Click</button>
        {this.props.todos.map(m => m.text)}
      </div>
    );
  };
}