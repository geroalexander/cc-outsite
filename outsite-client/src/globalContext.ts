import React from 'react';
import { InitialState } from './Interfaces/InitalState';

const GlobalContext = React.createContext({} as InitialState);

export const GlobalProvider = GlobalContext.Provider;
export default GlobalContext;
