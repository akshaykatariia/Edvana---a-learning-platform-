import {createContext} from 'react' ;

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const value = {


    }

    return (
        <AppContext.Provider value = {value}> {/* first value is prop and second is js variable */}
            {props.children}
        </AppContext.Provider>
    );


}

