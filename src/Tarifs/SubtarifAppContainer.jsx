import React, {Component} from 'react';
import { getTarifs } from '../reducers/index';
import { connect } from 'react-redux';

import SubTarifDetails from "./SubTarifDetails";

class SubtarifAppContainer extends Component { 
    
    render() {
      const { tarifs, subtarifId, tarifId } = this.props;
      const currentTarif = tarifs ? tarifs[tarifId] : null;
      const subtarif = currentTarif ? currentTarif.tarifs[subtarifId] : null;
          
      return <SubTarifDetails subtarif={subtarif} tarifId={tarifId}/>
    }
}


const mapStateToProps = state => ({
  tarifs: getTarifs(state)
})

export default connect(mapStateToProps)(SubtarifAppContainer);