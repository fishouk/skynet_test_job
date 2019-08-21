import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getTarifs } from '../reducers/index';

import TarifDetails from './TarifDetails';


class TarifAppContainer extends Component { 
    
    render() {
      const { tarifs, tarifId } = this.props;

      const tarif = tarifs[tarifId];

      return (
        tarif ? <TarifDetails tarifdetails={tarif}/> : null        
      );
      
    }
}


const mapStateToProps = state => ({
  tarifs: getTarifs(state)
})

export default connect(mapStateToProps)(TarifAppContainer);