import { useLayoutEffect, useRef } from "react";

const SmallScreenCountries = ({leftCountry, rightCountry}) => {
    
    const leftFlagRef = useRef();
    const rightFlagRef = useRef();

    useLayoutEffect(() => {
        (async () => {
            // dynamic image import
            const leftFlag = await import(`../../assets/icons/flags and maps/${leftCountry.key}-flag.png`); 
            const rightFlag = await import(`../../assets/icons/flags and maps/${rightCountry.key}-flag.png`);
            leftFlagRef.current.src = leftFlag.default;
            rightFlagRef.current.src = rightFlag.default;
        })()
    },[leftCountry.key, rightCountry.key])

    return (
        <div className="uk-flex uk-flex-around uk-width-1-1 uk-flex-middle uk-margin-bottom">
            <div className="uk-flex uk-flex-middle uk-flex-column">
                <img ref={leftFlagRef} alt="Country flag" width='80'/>
                <div className="uk-margin-small-top uk-text-bold uk-text-center text-secondary-color">{leftCountry.name}</div>
            </div>

            <div>VS</div>

            <div className="uk-flex uk-flex-middle uk-flex-column">
                <img ref={rightFlagRef} alt="Country flag" width='80'/>
                <div className="uk-margin-small-top uk-text-bold uk-text-center text-secondary-color">{rightCountry.name}</div>
            </div>
        </div>
    )
}

export default SmallScreenCountries;