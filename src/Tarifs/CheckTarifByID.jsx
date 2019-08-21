import React from "react";

import Error404 from '../Components/Error404';

class CheckTarifByID extends React.Component {

  render() {
    const { tarif, children } = this.props;

    // return tarif ? <Error404 /> : children;
    if(!tarif) {
      return <Error404 />;
    } else {
      return  children;
    }   
  }
}

export default CheckTarifByID;