import {MenuActionTypes, PendingActionTypes} from '../ActionTypes';

export const fetchmenustart = () => ({
    type: MenuActionTypes.FETCH_CURRENT_MENU_START,
});

export const fetchMenuSuccess = collection => ({
    type: MenuActionTypes.FETCH_CURRENT_MENU_SUCCESS,
    payload: collection
});
export const fetchmenufailure  = errorMessage => ({
    type: MenuActionTypes.FETCH_CURRENT_MENU_FAILURE,
    payload: errorMessage
})

export const notifyloading = () => ({
    type: PendingActionTypes.SHOW_LOADER_START
})

export const fetchmenustartasync = () => {
    return dispatch =>{
        dispatch(fetchmenustart())
        fetch('https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json')
        .then(res => (res.json()))
        .then(data =>{
            let fetchedData = data.MenuSections;
            fetchedData.pop();
            dispatch(fetchMenuSuccess(data.MenuSections))
        })
        .catch(error => dispatch(fetchMenuSuccess(error)))
    }
}

export const fetchmenuoptionsstart = collection => ({
    type: MenuActionTypes.SET_CURRENT_MENU_OPTIONS,
    payload: collection
})