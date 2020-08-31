import {MenuActionTypes} from '../ActionTypes'
const INITIAL_STATE = {
    currentMenu: [],
    currentmenuOption: [],
    isfetching: false,
    errormessage: undefined,
    loading: true,
}

const MenuReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case MenuActionTypes.FETCH_CURRENT_MENU_START:
            return{
                ...state,
                isfetching: true,
            };
        case MenuActionTypes.FETCH_CURRENT_MENU_SUCCESS:
            return{
                ...state,
                isfetching: false,
                loading: false,
                currentMenu: action.payload
            };
        case MenuActionTypes.FETCH_CURRENT_MENU_FAILURE:
            return{
                ...state,
                isfetching: true,
                errormessage: action.payload
            };
        case MenuActionTypes.SET_CURRENT_MENU_OPTIONS:
            return{
                ...state,
                currentmenuOption: action.payload
            };
        default:
            return state;

    }
}

export default MenuReducer;