import {fetchTarifsPending, fetchTarifsSuccess, fetchTarifsError} from './index';

const apiUrl = 'http://fishouk.beget.tech/api/get_tarifs/';

function fetchTarifs() {
    return dispatch => {
        dispatch(fetchTarifsPending());
        fetch(apiUrl)
        .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error('Something went wrong');
            }
          }
        )
        .then(res => {            
            dispatch(fetchTarifsSuccess(res["result"]["tarifs"]));
            return res;
        })
        .catch(error => {
            dispatch(fetchTarifsError(error));
        })
    }
}


export default fetchTarifs;