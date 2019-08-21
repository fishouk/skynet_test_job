import React from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import CheckTarifByID from "./CheckTarifByID";

import { getTarifs, getMonth } from "../reducers";


class SubTarifDetails extends React.Component {

    getLastPayDate = pay_period => {
        let todayDate = new Date();
        todayDate.setMonth(parseInt(todayDate.getMonth()) + parseInt(pay_period) + 1);
        let dd = todayDate.getDate();
        let mm = todayDate.getMonth();
        let yyyy = todayDate.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        } 
        if (mm < 10) {
            mm = '0' + mm;
        } 
        return dd + '.' + mm + '.' + yyyy;
    }

    render() {
        const { subtarif, tarifId, tarifs, month  } = this.props;
        const tarif = tarifs[tarifId];
        let lastPayDate;
        if(subtarif) {
            lastPayDate = this.getLastPayDate(subtarif.pay_period);
        }
        return (  
            <CheckTarifByID tarif={subtarif}>
                {subtarif? (
                    <React.Fragment>
                        <Helmet 
                            title={`Вы выбрали - "${subtarif.title}"`}
                        />
                        <div className="gray_header header_with_back_arrow">
                            <Link className="arrow_back"  to={`/tarif-${tarifId}/`}><i class="arrow left_arrow arrow_green"></i></Link>
                            <h2 className="tarifs_header text_center header_top_padding">Выбор тарифа</h2>
                        </div>
                        <div className="tarif_details_card checked_tarif">
                            <p className="green_colored_text bottom_border_gray tarif_details_month">Тариф "{tarif.title}"</p>
                            <p className="tarif_card_price">Период оплаты &#8211; {subtarif.pay_period} {month[subtarif.pay_period]}</p>
                            <p className="tarif_card_price">{subtarif.price/subtarif.pay_period} &#8381;/мес</p>
                            <p>разовый платеж &#8211; {subtarif.price} &#8381;</p>
                            <p className="cheked_tarif_margin_bottom">со счета спишется  &#8211; {subtarif.price} &#8381;</p>
                            <p className="gray_colored_text">вступит в силу &#8211; сегодня</p>
                            <p className="gray_colored_text bottom_border_gray cheked_tarif_margin_bottom">активно до &#8211; {lastPayDate ? lastPayDate : null}</p>
                            <button className="green-button">Выбрать</button>
                        </div>
                    </React.Fragment>
                ) : (
                    null
                )}
            </CheckTarifByID>
        )
    }
}

const mapStateToProps = state => ({
    tarifs: getTarifs(state),
    month: getMonth(state)
  })
  
export default connect(mapStateToProps)(withRouter(SubTarifDetails));

