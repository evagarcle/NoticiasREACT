import { createContext } from 'react';


const initialState = {
  characters: []
}


export const GlobalContext = createContext(initialState)