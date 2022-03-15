import Dropdown from "./Dropdown"
import {importAllFlags} from '../../utils/importCountryImages'
import { connect, useDispatch } from "react-redux";
import { getMonthName } from "../../utils/getMonthName";
import { changeCurrentMonth, changeLeftCountry, changeRightCountry } from "../../redux";

const images = importAllFlags();
const countryList = [
    {
        value: 'china',
        text: 'China',
        icon: images['china-flag.png']
    },
    {
        value: 'germany',
        text: 'Germany',
        icon: images['germany-flag.png']
    },
    {
        value: 'india',
        text: 'India',
        icon: images['india-flag.png']
    },
    {
        value: 'japan',
        text: 'Japan',
        icon: images['japan-flag.png']
    },
    {
        value: 'southKorea',
        text: 'South Korea',
        icon: images['southKorea-flag.png']
    },
    {
        value: 'uk',
        text: 'United Kingdom',
        icon: images['uk-flag.png']
    },
    {
        value: 'us',
        text: 'United States',
        icon: images['us-flag.png']
    }

]

const LargeScreenControlNav = (props) => {
    const dispatch = useDispatch()
    const months = props.months.map(month => ({ value: month, text: getMonthName(month) + ' ' + props.year }))

    const selectLeftCountry = (value) => {
        dispatch(changeLeftCountry(value))
    }

    const selectRightCountry = (value) => {
        dispatch(changeRightCountry(value))
    }

    const selectMonth = (month) => {
        dispatch(changeCurrentMonth(month))
    }

    return (
        <div className="uk-position-fixed uk-width-1-1 control-navbar margin-nav uk-visible@m">
            <div className="uk-margin-auto container-large uk-flex uk-flex-center uk-flex-middle" style={{gap: '15px'}}>

                <div className="uk-text-bold text-secondary-color">Country Comparator</div>

                <Dropdown 
                currentValue={props.leftCountry} 
                onSelect={selectLeftCountry} 
                list={countryList} 
                disabledItemValue={props.rightCountry} 
                />

                <span className="uk-text-small">VS</span>
                
                <Dropdown 
                currentValue={props.rightCountry} 
                onSelect={selectRightCountry} 
                list={countryList} 
                disabledItemValue={props.leftCountry}
                />

                <Dropdown 
                currentValue={props.current} 
                onSelect={selectMonth} 
                list={months} 
                />

            </div>

        </div>
    )
}

const mapStateToProps = (state, props) => {
    const {start, end, current} = state.comparator.month;
    let months = []
    for (let i = start; i <= end; i++)
    {
        months.push(i)
    }

    return {
        ...props,
        leftCountry: state.comparator.leftCountry,
        rightCountry: state.comparator.rightCountry,
        year: state.comparator.year,
        months,
        current
    }
}

export default connect(mapStateToProps)(LargeScreenControlNav)