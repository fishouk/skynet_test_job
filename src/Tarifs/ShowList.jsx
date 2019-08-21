import React from "react";
import { connect } from 'react-redux';

import { getTarifs } from '../reducers/index';

import TarifRow from './TarifRow';



class ShowList extends React.Component {
  render() {
    const { tarifs } = this.props;

    return (
        <div className="clearfix">
          {tarifs.map( (tarif, index) => 
            <React.Fragment key={index}>
              <TarifRow tarif={tarif} tarifId={index} />
            </React.Fragment>
          )}
        </div>
    )
  }
}


const mapStateToProps = state => ({
  tarifs: getTarifs(state)
})

export default connect(mapStateToProps)(ShowList);