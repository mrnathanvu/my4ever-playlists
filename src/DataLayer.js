import React, { createContext, useContext, useReducer } from 'react';

// Prepare a data layer
export const DataLayerContext = createContext();

// Childrens are components under the DataLayer wrapper in index.js
export const DataLayer = ({ reducer, initialState, children }) => (
    // Similar layout in index.js
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

// Accessing to data layer to get data
export const useDataLayerValue = () => useContext(DataLayerContext);

