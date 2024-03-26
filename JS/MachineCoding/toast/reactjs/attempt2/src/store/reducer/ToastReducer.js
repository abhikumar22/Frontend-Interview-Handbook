import { REMOVE_TOAST, ADD_TOAST } from '../action/ToastAction';

const initialState = {
    toastState: []
}

const toastReducer = (state = initialState, actionData) => {
    const { type, id } = actionData;
    switch (type) {
        case REMOVE_TOAST:
            return {
                ...state,
                toastState: [...state.toastState.filter(currToast => currToast.id != id)]
            };
        case ADD_TOAST:
            return {
                ...state,
                toastState: [...state.toastState, { id: actionData.id, toastType: actionData.toastType }]
            };
        default:
            return state
    }
}
export default toastReducer