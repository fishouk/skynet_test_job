export const FETCH_TARIFS_PENDING = 'FETCH_TARIFS_PENDING';
export const FETCH_TARIFS_SUCCESS = 'FETCH_TARIFS_SUCCESS';
export const FETCH_TARIFS_ERROR = 'FETCH_TARIFS_ERROR';

export function fetchTarifsPending() {
    return {
        type: FETCH_TARIFS_PENDING
    }
}

export function fetchTarifsSuccess(tarifs) {
    return {
        type: FETCH_TARIFS_SUCCESS,
        payload: tarifs
    }
}

export function fetchTarifsError(error) {
    return {
        type: FETCH_TARIFS_ERROR,
        error: error
    }
}

