import DataCompareBar from "./DataCompareBar"


const TradeIndex = ({left, right}) => {
    return (
        <>
            <div className="uk-text-uppercase text-secondary-color uk-text-bold uk-text-center" style={{fontSize: '18px'}}>Trade Indexes</div>
            <div className="uk-position-relative" style={{paddingTop: '1px', paddingBottom: '10px'}}>
                <DataCompareBar name='Country Trade' leftData={left.country} rightData={right.country} />
                <DataCompareBar name='Air Trade' leftData={left.air} rightData={right.air} />
                <DataCompareBar name='Ocean Trade' leftData={left.ocean} rightData={right.ocean} />
                <div className="uk-position-absolute uk-position-center uk-height-1-1" style={{width: '.2px', backgroundColor: '#d8d8d8'}}></div>
            </div>
        </>
    )
}

export default TradeIndex