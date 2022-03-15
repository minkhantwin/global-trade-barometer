import { useRef, useLayoutEffect } from "react"
import { connect, useDispatch } from "react-redux"
import changeIcon from '../../assets/icons/change.png'
import { changeCurrentMonth } from "../../redux";
import { getMonthName } from "../../utils/getMonthName";

const SmallScreenControlNav = (props) => {

    const leftFlagRef = useRef();
    const rightFlagRef = useRef();
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        (async () => {
            // dynamic image import
            const leftFlag = await import(`../../assets/icons/flags and maps/${props.leftCountry.key}-flag.png`); 
            const rightFlag = await import(`../../assets/icons/flags and maps/${props.rightCountry.key}-flag.png`);
            leftFlagRef.current.src = leftFlag.default;
            rightFlagRef.current.src = rightFlag.default;
        })()
    },[props.leftCountry.key, props.rightCountry.key])

    return (
        <div className="uk-position-fixed uk-width-1-1 margin-nav mobile-control-navbar uk-hidden@m">
            <div className="uk-margin-auto uk-flex uk-flex-center uk-flex-between" style={{padding: '8px', backgroundColor: '#f0efef'}}>
                <div>
                    <span className="uk-text-bold text-secondary-color uk-text-uppercase">
                        <img ref={leftFlagRef} width='16' height='16' style={{marginRight: '8px'}} alt="Country flag"/>
                        {props.leftCountry.name}
                    </span>
                    <span style={{margin: '0px 8px'}}>VS</span>
                    <span className="uk-text-bold text-secondary-color uk-text-uppercase">
                        {props.rightCountry.name}
                        <img ref={rightFlagRef} width='16' height='16' style={{marginLeft: '8px'}} alt="Country flag"/>
                    </span>
                    
                </div>
                <div data-uk-scroll>
                    <img src={changeIcon} width='16' height='10' alt="Change icon"/>
                    <span style={{color: '#e13232'}}> Change</span>
                </div>
            </div>

            <div className="uk-margin-remove uk-child-width-expand uk-text-bold" style={{backgroundColor: 'white', height: '68px'}} data-uk-tab>
                {props.months.map(month => (
                    <a 
                    key={month} 
                    onClick={() => { dispatch(changeCurrentMonth(month)) }}
                    className={"uk-padding-remove uk-text-decoration-none uk-flex uk-flex-center uk-flex-middle nav-tab " + (props.current === month && "active")}
                    href="#compare-scroll-to"
                    data-uk-scroll="offset: -70"
                    >
                        {getMonthName(month, 'short')}
                    </a>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const leftCountry = state.comparator.leftCountry
    const rightCountry = state.comparator.rightCountry
    const {start, end, current} = state.comparator.month
    
    let months = []
    for (let i = start; i <= end; i++)
    {
        months.push(i)
    }

    return {
        ...props,
        months,
        current,
        leftCountry: {
            key: leftCountry,
            name: state.tradeData[rightCountry].name,
        },
        rightCountry: {
            key: rightCountry,
            name: state.tradeData[rightCountry].name,
        }
    }
}

export default connect(mapStateToProps)(SmallScreenControlNav)