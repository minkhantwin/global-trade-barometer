import { useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";

const LargeScreenCountry = ({country}) => {
    const flagImg = useRef();
    const mapImg = useRef();
    const name = useSelector(state => state.tradeData[country] ? state.tradeData[country].name : '')

    useLayoutEffect(() => {
        (async () => {
            // dynamic image import
            const flag = await import(`../../assets/icons/flags and maps/${country}-flag.png`); 
            const map = await import(`../../assets/icons/flags and maps/${country}-map.png`);
            flagImg.current.src = flag.default;
            mapImg.current.src = map.default;
        })()
    },[country])


    return (
        <div className="" style={{width:'224px'}}>
            <div className="ul-flex uk-flex-center uk-position-relative" style={{height: '200px'}}>
                <img className="uk-absolute uk-position-top-center" ref={mapImg} alt="Country map" style={{objectFit: 'contain', width: '224px', height: '200px'}}/>
                <img className="uk-absolute uk-position-center" ref={flagImg} alt="Country flag" style={{width: '80px'}}/>
            </div>
            <h2 className="text-secondary-color uk-text-center uk-margin-top" style={{fontWeight: 800, fontSize: '27px'}}>{name}</h2>
            <div className="outline-box uk-width-1-1 uk-margin-large-top">View Report</div>
        </div>
    )
}

export default LargeScreenCountry;