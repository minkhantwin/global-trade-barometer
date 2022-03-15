import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UIkit from "uikit";
import { compareData } from "../../redux";
import Dropdown from "./Dropdown";

const CompareDataControl = () => {
    const dispatch = useDispatch();

    const selectedCountries  = useSelector(state => state.selectedCountries)

    // get current period and set to state
    const [period, setPeriod] = useState('1-3/2018');

    // check if selected country count is max
    const isMax = () => {
        if (selectedCountries === null)
        {
            return false;
        }
        return selectedCountries.left && selectedCountries.right;
    }

    // onClick
    const compare = () => {
        if (isMax())
        {
            // period stirng format sample => 1-3/2018
            const [months, year] = period.split('/') 
            const data = {
                year,
                month: {
                    start: parseInt(months[0]),
                    end: parseInt(months[2]),
                    // at compare start, ending month is the current one
                    current: parseInt(months[2])
                },
                leftCountry: selectedCountries.left,   
                rightCountry: selectedCountries.right    
            }
            dispatch(compareData(data))
            setTimeout(() => {
                UIkit.util.scrollIntoView(UIkit.util.$('#compare-scroll-to'))
            }, 300)
        }
    }

    //
    const periods = [
        { value: '1-3/2018', text: 'Jan 2018 - Mar 2018'},
    ]

    return (
        <div className='uk-animation-slide-bottom uk-margin-auto uk-flex uk-flex-middle uk-position-relative period-container'>
            <span className='uk-text-secondary uk-padding-remove uk-visible@m'>Reporting Period</span>
            
            <Dropdown currentValue={period} onSelect={setPeriod} list={periods} label='Reporting Period'/>

            <button onClick={compare} className={isMax() ? 'uk-button uk-border-rounded uk-text-capitalize bg-primary' : 'uk-button uk-border-rounded uk-text-capitalize'}>
                Compare Data
            </button>

        </div>
    )
}

export default CompareDataControl;