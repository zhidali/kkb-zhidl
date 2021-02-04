import React, {createContext} from 'react';
export const ThemeContext = createContext();

export const ThemeProvide = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;