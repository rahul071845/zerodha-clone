import React from 'react';
import Hero from './Hero';
import Left from './Left';
import Right from './Right';
import Universe from './Universe';
import Ad from './Ad.jsx'

function ProductPage() {
    return ( 
        <div>
            <Hero />
            <Left imgSrc={"media/images/kite.png"} title={"Kite"} description={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} link1Head={"Try demo"} link2Head={"Learn more"} />
            <Right imgSrc={"media/images/console.png"} title={"Console"} description={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} linkHead={"Learn more"} />
            <Left imgSrc={"media/images/coin.png"} title={"Coin"} description={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} link1Head={"Coin"} />
            <Right imgSrc={"media/images/kiteconnect.svg"} title={"Kite Connect API"} description={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} linkHead={"Kite connect"} />
            <Left imgSrc={"media/images/varsity.png"} title={"Varsity mobile"} description={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."} />
            <Ad />
            <Universe />
        </div>
    );
}

export default ProductPage;