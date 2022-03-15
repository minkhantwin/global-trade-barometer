import { connect } from "react-redux";
import { getMonthName } from "../../utils/getMonthName";
import CompareDetails from "./CompareDetails";
import CountryReportsView from "./CountryReportsView";
import SmallScreenCountries from "./SmallScreenCountries";


const SmallScreenResult = (props) => (
    <div className="uk-flex uk-flex-middle uk-flex-column"  id="compare-scroll-to">
        <div className="uk-text-uppercase uk-text-bold text-secondary-color uk-text-center uk-margin-large-bottom uk-margin-large-top" style={{fontSize: '18px'}}>
            {getMonthName(props.currentMonth) + ' ' + props.year} 
        </div>
        <SmallScreenCountries leftCountry={props.leftCountry} rightCountry={props.rightCountry}/>
        <CompareDetails 
        leftCountry={props.leftCountry.key} 
        rightCountry={props.rightCountry.key}
        year={props.year} 
        month={props.currentMonth}/>
        
        <CountryReportsView leftCountry={props.leftCountry.name} rightCountry={props.rightCountry.name} />

    </div>
)



const mapStateToProps = (state, props) => {
    const {leftCountry, rightCountry} = state.comparator;
    return {
        ...props,
        leftCountry: {
            key: leftCountry,
            name: state.tradeData[leftCountry].name
        },
        rightCountry: {
            key: rightCountry,
            name: state.tradeData[rightCountry].name
        },
        year: state.comparator.year,
        currentMonth: state.comparator.month.current
    }
}

export default connect(mapStateToProps)(SmallScreenResult);