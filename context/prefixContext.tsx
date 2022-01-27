import React, { useState, createContext, useContext } from 'react';

export const PrefixContext = createContext<{
    prefix: string;
    container: string;
    setPrefix: React.Dispatch<React.SetStateAction<string>>;
    setContainer: React.Dispatch<React.SetStateAction<string>>;
}>({
    prefix: '',
    container: undefined,
    setPrefix: () => {},
    setContainer: () => {},
});

export const PrefixProvider: React.FC = ({ children }) => {
    const [prefix, setPrefix] = useState('wg-');
    const [container, setContainer] = useState();
    return (
        <PrefixContext.Provider value={{ prefix, container, setPrefix, setContainer }}>
            {children}
        </PrefixContext.Provider>
    );
};

export const usePrefix = () => useContext(PrefixContext);
