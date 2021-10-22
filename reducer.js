export const initialState = {
    user:null,
};                                                      // initial state of reducer, what Data layer initially looks at

export const actionTypes = {                            // actions that are dispatched into Data Layer
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:                      // Listens to changes inside reducer, this part of code listens, If just recieved set User data will return new data
            return {
                ...state,                               // return what it currently looks like ...state, but include what was just passed in @user: action.user payload
                user: action.user,
            };
        
            default:
                return state;
            }
    };

    
export default reducer;
