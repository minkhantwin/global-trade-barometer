const CountryReportsView = ({leftCountry, rightCountry}) => (
    <div className="uk-hidden@m uk-width-1-1 uk-flex uk-flex-center uk-child-width-expand" style={{borderTop: '.2px solid #d4d4d4'}}>
        <div style={{maxWidth: '350px'}}>
            <div className="outline-box uk-display-block uk-margin-large-top" style={{height: '48px', padding: '10px'}}>View {leftCountry} Report</div>
            <div className="outline-box uk-display-block uk-margin-top" style={{height: '48px', padding: '10px'}}>View {rightCountry} Report</div>

        </div>

    </div>

)


export default CountryReportsView