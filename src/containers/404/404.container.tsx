import * as React from 'react';
import { withRouter, Link } from 'react-router-dom';

@(withRouter as any)
export class NotFoundContainer extends React.Component<IProps, any> {
  render(): JSX.Element {
    return (
      <div>
        <h2>Not Found</h2>
        <Link to="/">Go to main</Link>
      </div>
    )
  }
}