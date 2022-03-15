import { connect } from "react-redux";
import CompareDetails from "./CompareDetails";
import LargeScreenCountry from "./LargeScreenCountry";

const LargeScreenResult = (props) => {

    return (
    <div className="uk-flex uk-flex-center uk-margin-large-top"  id="compare-scroll-to">
        <div className="uk-flex uk-flex-between container-large">
            <LargeScreenCountry country={props.leftCountry}/>
            <CompareDetails 
            leftCountry={props.leftCountry} 
            rightCountry={props.rightCountry}
            year={props.year} 
            month={props.currentMonth}/>
            <LargeScreenCountry country={props.rightCountry}/>

        </div>
    </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        ...props,
        leftCountry: state.comparator.leftCountry,
        rightCountry: state.comparator.rightCountry,
        year: state.comparator.year,
        currentMonth: state.comparator.month.current
    }
}

export default connect(mapStateToProps)(LargeScreenResult);