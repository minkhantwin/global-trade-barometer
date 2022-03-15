import { connect } from "react-redux";
import SectorDevelopment from "./SectorDevelopment";
import TradeIndex from "./TradeIndex";

const CompareDetails = ({leftCountryTrade, rightCountryTrade}) => {

    return (
        <div className="uk-flex uk-flex-center" style={{width: '448px'}}>
            <div style={{width: '350px'}}>
                <TradeIndex left={leftCountryTrade.trade_index} right={rightCountryTrade.trade_index}/>
                <SectorDevelopment left={leftCountryTrade.sector_development} right={rightCountryTrade.sector_development}/>

            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const getTradeData = (country) => {
        return state.tradeData[country]['y'+props.year].filter(item => item.month === props.month)[0]
    }

    return {
        leftCountryTrade: getTradeData(props.leftCountry),
        rightCountryTrade: getTradeData(props.rightCountry)
    }
}

export default connect(mapStateToProps)(CompareDetails);