import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import * as React from 'react';

import { MainActions } from './';

/**
 * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9951
 */
@(connect(
  (state: any) => ({ todos: state.main.todos, router: state.router }),
  (dispatch: Dispatch<void>) => ({
    actions: bindActionCreators({ ...MainActions, }, dispatch),
    dispatch,
  }),
) as any)
export default class MainContainer extends React.Component<IProps, any> {

  addTodo = () => {
    this.props.actions.addTodo({
      text: 'Use Redux with TypeScript',
      completed: false,
      id: Date.now()
    })
  };

  render() {
    return (
        <Route path={`${this.props.match.url}login`} component={Foo} />
    );
  };
}

const Foo = (): any => (
  <h3>3FOOOOOO></h3>
)