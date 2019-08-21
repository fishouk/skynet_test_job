import 'normalize.css';
import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Helmet} from "react-helmet";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchTarifs from './actions/fetchTarifs';
import { addDiscoountsSubtarifs, sortSubtarifsByPrice } from './reducers/index';

import TarifsApp from './Tarifs/TarifsApp';
import TarifAppContainer from './Tarifs/TarifAppContainer';
import SubtarifAppContainer from './Tarifs/SubtarifAppContainer';
import Error404 from './Components/Error404';
import Preload from './Components/Preload';


class App extends Component { 

    componentDidMount() {
        const { fetchTarifs } = this.props;
        fetchTarifs();
    }

    render() {
      return ( 
        <React.Fragment>
          <Helmet 
            htmlAttributes={{"lang": "ru", "amp": undefined}}
            defaultTitle="Выбор тарифа"
            meta={[{"charset": "utf-8"}]}
          />
          <div className="container">
            <Preload>    
              <Router>
                <Switch>     
                  <Route exact path="/"  component={() => <TarifsApp/>} />    
                  <Route
                    path="/tarif-:id/subtarif-:subId/"
                    render={props => (
                        <SubtarifAppContainer tarifId={parseInt(props.match.params.id, 10)} subtarifId={parseInt(props.match.params.subId, 10)} {...props}
                        />
                    )}
                  />    
                  <Route
                    path="/tarif-:id/"
                    render={props => (
                        <TarifAppContainer tarifId={parseInt(props.match.params.id, 10)} {...props}
                        />
                    )}
                  />
                          
                  <Route component={Error404} />
                </Switch>        
              </Router>
            </Preload>   
          </div> 
        </React.Fragment>
      );  
    }
}


const mapStateToProps = state => ({
  sortedTarifs: sortSubtarifsByPrice(state),
  sortedTarifsWithDiscount: addDiscoountsSubtarifs(state),  
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTarifs: fetchTarifs
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);