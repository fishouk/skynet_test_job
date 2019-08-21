import React from "react";
import {Helmet} from "react-helmet";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { getMonth } from '../reducers/index';

import CheckTarifByID from "./CheckTarifByID";


class TarifDetails extends React.Component {

  render() {
    const { tarifdetails, match, month } = this.props;

    return (      
      <CheckTarifByID tarif={tarifdetails}>
        { tarifdetails ? (
          <React.Fragment>
            <Helmet 
                title={`Тариф - "${tarifdetails.title}"`}
            />
              <div className="gray_header header_with_back_arrow">
                <Link className="arrow_back" to="/"><i class="arrow left_arrow arrow_green"></i></Link>
                <h2 className="tarifs_header text_center header_top_padding">Тариф {tarifdetails.title}</h2>
              </div>
              {tarifdetails.tarifs.map( (tarif, index) => 
                tarif ? (
                  <div className="float_left tarif_details_card" key={index}>
                      <p className="green_colored_text bottom_border_gray tarif_details_month">{tarif.pay_period} {month[tarif.pay_period]}</p>
                    <div className="subtarif_details">
                      <div>
                        <p className="tarif_card_price ">{tarif.price/tarif.pay_period} &#8381;/мес</p>
                        <p>Разовый платеж &#8211; {tarif.price} &#8381;</p>
                        {tarif.discount > 0 ? <p>Скидка &#8211; {tarif.discount} &#8381;</p> : null }
                      </div>
                      <div className="tarif_card_arrow">
                        <Link to={`${match.url}subtarif-${index}/`}><i class="arrow right_arrow"></i></Link>
                      </div>
                    </div>
                  </div>
                ) : null
              )}   
          </React.Fragment>
        ) : (
          null
      )}
      </CheckTarifByID>
    );
   
  }
}

const mapStateToProps = state => ({
  month: getMonth(state)
})

export default connect(mapStateToProps)(withRouter(TarifDetails));