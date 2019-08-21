import React from "react";
import { connect } from 'react-redux';

import {getTarifsError, getTarifsPending} from '../reducers/index';

class Preload extends React.Component {
    
  render() {
    const { error, isLoading, children } = this.props;

    if (error) {
      return (<p>{error.message}</p>);
    }
    if (isLoading) {
      return (<p>Loading ...</p>);
    }
    return children;
  }
}

const mapStateToProps = state => ({
  error: getTarifsError(state),
  isLoading: getTarifsPending(state)
})

export default connect(mapStateToProps)(Preload);