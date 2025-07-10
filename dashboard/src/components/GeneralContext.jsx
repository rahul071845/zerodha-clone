import React, { useState } from 'react';
import BuyActionWindow from './BuyActionWindow';
import '../styles/GeneralContext.css';

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => { },
    closeBuyWindow: () => { }
});

function GeneralContextProvider(props) {
    const [buyWindow, setBuyWindow] = useState(false);
    const [uid, setUid] = useState("");
    const openBuyWindow = (uid) => {
        setUid(uid);
        setBuyWindow(true);
    }
    const closeBuyWindow = () => {
        setUid("");
        setBuyWindow(false);
    }
    return (
        <GeneralContext.Provider value={{ openBuyWindow, closeBuyWindow }}>
            {props.children}
            {buyWindow && (
                <>
                    <div className="modal-overlay" onClick={closeBuyWindow}></div>
                    <BuyActionWindow uid={uid} />
                </>
            )}
        </GeneralContext.Provider>
    );
}

export { GeneralContext, GeneralContextProvider };