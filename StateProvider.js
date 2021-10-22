import React, {createContext, useContext, useReducer} from 'react';          // imports these APIs for use


export const StateContext = createContext();                                // preparing "Data-Layer"

export const StateProvider = ({ reducer, initialState, children}) => (          // Higher order component to wrap app allowing state provider
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);                    //useStateValue for when app needs to pull something from Data-Layer 
