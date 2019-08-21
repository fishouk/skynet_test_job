import React from "react";
import { Link } from "react-router-dom";


class TarifRow extends React.Component {
  
  render() {
    const { tarif, tarifId } = this.props;
    
    const tarifColorLabel = {
        "Земля" : "brown_label",
        "Огонь" : "red_label",
        "Вода" : "blue-label",
        "Вода HD" : "blue-label",
        "Огонь HD" : "red_label",
    }

    return (      
        <div className="float_left tarif_card">
            <h2 className="tarifs_header tarif_card_title bottom_border_gray" >Тариф "{tarif.title}"</h2>
            {tarif ? (
                <React.Fragment>   
                    <div className="tarif_card_description_container clearfix">
                        <div className="float_left">
                            <p className={`tarif_card_label ${tarifColorLabel[tarif.title]}`}>{tarif.speed} Мбит/с</p>
                            { tarif.tarifs ? 
                                <p className="tarif_card_price " key={tarif.tarifs[0].id}>{tarif.tarifs[0].price} &#8211; {tarif.tarifs[tarif.tarifs.length - 1].price} &#8381;/мес </p> : null
                            }
                            { tarif.free_options ? tarif.free_options.map((free_option, index) => 
                                <p className="tarif_card_otions" key={index}>{free_option}</p>
                                ) : null 
                            }
                        </div>
                        <div className="tarif_card_arrow float_right">
                            <Link to={`tarif-${tarifId}/`}><i class="arrow right_arrow"></i></Link>
                        </div>
                    </div>
                    <a href={tarif.link} target="_blank" rel="noopener noreferrer" className="tarif_card_link_to_Skynet top_border_gray" >Узнать подробнее на сайте www.sknt.ru</a>
                </React.Fragment>
            ) : null }  
        </div>  
    )
  }
}

export default TarifRow;