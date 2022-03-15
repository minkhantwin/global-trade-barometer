import DataCompareBar from "./DataCompareBar"

const SectorDevelopment = ({left, right}) => {

    return (
        <>
            <div className="uk-margin-top uk-margin-bottom">
                <div className="uk-text-uppercase text-secondary-color uk-text-bold uk-text-center" style={{fontSize: '18px'}}>Sector Developments</div>
                <div className="uk-position-relative" style={{paddingTop: '1px', paddingBottom: '10px'}}>
                    <DataCompareBar name='Basic Raw Materials' leftData={left.basic_raw_materials} rightData={right.basic_raw_materials} />
                    <DataCompareBar name='Capital Equip. &#38; Machinery' leftData={left.capital_equ_and_mach} rightData={right.capital_equ_and_mach} />
                    <DataCompareBar name='Chemicals &#38; Products' leftData={left.chemicals_and_products} rightData={right.chemicals_and_products} />
                    <DataCompareBar name='Consumer Fashion Goods' leftData={left.comsumer_fashion_goods} rightData={right.comsumer_fashion_goods} />
                    <DataCompareBar name='High Technology' leftData={left.high_tech} rightData={right.high_tech} />
                    <DataCompareBar name='Industrial Raw Materials' leftData={left.industrial_raw_materials} rightData={right.industrial_raw_materials} />
                    <DataCompareBar name='Land Vehicles &#38; Parts' leftData={left.land_vehicles_and_parts} rightData={right.land_vehicles_and_parts} />
                    <DataCompareBar name='Machinery Parts' leftData={left.machinery_parts} rightData={right.machinery_parts} />
                    <DataCompareBar name='Personal &#38; Household Goods' leftData={left.personal_and_household_goods} rightData={right.personal_and_household_goods} />
                    <DataCompareBar name='Temp. or Climate Control' leftData={left.temp_or_climate_control} rightData={right.temp_or_climate_control} />
                    <div className="uk-position-absolute uk-position-center uk-height-1-1" style={{width: '.2px', backgroundColor: '#d8d8d8'}}></div>
                </div>
            </div>
        </>
    )
}


export default SectorDevelopment