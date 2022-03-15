import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSelectedCountries } from "../../redux";
import {importAllMapsAndFlags} from "../../utils/importCountryImages";

const images = importAllMapsAndFlags()

const countries = {
    us:{
        name: 'United States',
        flag: images['us-flag.png'],
        map: images['us-map.png'],
        selectedMap: images['us-color-map.png']
    },
    germany:{
        name: 'Germany',
        flag: images['germany-flag.png'],
        map: images['germany-map.png'],
        selectedMap: images['germany-color-map.png']
    },
    uk:{
        name: 'United Kingdom',
        flag: images['uk-flag.png'],
        map: images['uk-map.png'],
        selectedMap: images['uk-color-map.png']
    },
    china:{
        name: 'China',
        flag: images['china-flag.png'],
        map: images['china-map.png'],
        selectedMap: images['china-color-map.png']
    },
    india:{
        name: 'India',
        flag: images['india-flag.png'],
        map: images['india-map.png'],
        selectedMap: images['india-color-map.png']
    },
    southKorea:{
        name: 'South Korea',
        flag: images['southKorea-flag.png'],
        map: images['southKorea-map.png'],
        selectedMap: images['southKorea-color-map.png']
    },
    japan:{
        name: 'Japan',
        flag: images['japan-flag.png'],
        map: images['japan-map.png'],
        selectedMap: images['japan-color-map.png']
    },
}


const MapWrapper = () => {
    const messageRef = useRef(null)
    const dispatch = useDispatch();
    const selectedCountries = useSelector(state => state.selectedCountries)

    // select method for each country
    const selectCountry = (country) => {
        return () => {
            // return if selected country count is max
            if (isMax(country) && !isSelected(country))
            {
                messageRef.current.style.display = 'block'
                setTimeout(() => { messageRef.current.style.display = 'none'}, 2000)
                return
            }
            dispatch(toggleSelectedCountries(country))
        }
    }

    // check isSelected for each country
    const isSelected = (country) => {
        if (selectedCountries === null)
        {
            return false;
        }
        return selectedCountries.left === country || selectedCountries.right === country
    }

    // check if two countries are selected
    const isMax = () => {
        if (selectedCountries === null)
        {
            return false;
        }
        return selectedCountries.left && selectedCountries.right;
    }

    return (
        <div className='uk-position-relative uk-margin-auto map-wrapper' style={{maxWidth:'42.1em', height:'25em'}}>

            <div ref={messageRef} className="uk-overlay uk-overlay-primary uk-padding-small uk-position-bottom-center uk-border-rounded" style={{zIndex:5,fontSize:'15px',display:'none'}}>
                <p>Deselect one country before selecting another</p>
            </div>
            
            <ChinaMap 
            isMax={isMax()}
            selectCountry={selectCountry('china')} 
            selected={isSelected('china')}/>

            <IndiaMap 
            isMax={isMax()}
            selectCountry={selectCountry('india')} 
            selected={isSelected('india')}/>

            <USMap 
            isMax={isMax()}
            selectCountry={selectCountry('us')} 
            selected={isSelected('us')}/>

            <UKMap 
            isMax={isMax()}
            selectCountry={selectCountry('uk')} 
            selected={isSelected('uk')}/>

            <GermanyMap 
            isMax={isMax()}
            selectCountry={selectCountry('germany')} 
            selected={isSelected('germany')}/>

            <SouthKoreaMap 
            isMax={isMax()}
            selectCountry={selectCountry('southKorea')} 
            selected={isSelected('southKorea')}/>

            <JapanMap 
            isMax={isMax()}
            selectCountry={selectCountry('japan')} 
            selected={isSelected('japan')}/>

        </div>
    )
}


const USMap = ({isMax,selectCountry, selected}) =>{
    // reduce opacity if selected country count is max
    const opacity = isMax && !selected ? '.7' : '1'

    return (
        <div onClick={selectCountry} className='uk-position-absolute uk-transition-toggle uk-overflow-hidden us-map-animation' style={{bottom:'2.8em',display:'block'}}>
            <div className='uk-position-relative'>
                <img src={selected ? countries.us.selectedMap : countries.us.map} alt={countries.us.name+'-map'} style={{width:'18.3em'}}/>
                <img className='uk-position-absolute uk-position-center map-flag' alt={countries.us.name+'-flag'} src={countries.us.flag} style={{opacity, width:'2.7em',height:'2.7em'}}/>

                <span className='uk-transition-slide-bottom uk-overlay uk-overlay-primary uk-position-bottom-left uk-visible@m map-label'>{countries.us.name}</span>

            </div>

        </div>        
    )
}


const UKMap = ({isMax,selectCountry, selected}) =>{
    // reduce opacity if selected country count is max
    const opacity = isMax && !selected ? '.7' : '1'

    return (
        <div className='uk-position-absolute uk-transition-toggle uk-overflow-hidden uk-map-animation' onClick={selectCountry} style={{left:'6.25em',display:'block'}}>
            <div className='uk-position-relative' style={{width: '8em'}}>

                <img src={selected ? countries.uk.selectedMap : countries.uk.map} alt={countries.uk.name+'-map'} style={{width:'7.18em'}}/>
                <img className='uk-position-absolute uk-position-center map-flag' alt={countries.uk.name+'-flag'} src={countries.uk.flag} style={{opacity, width:'2.7em',height:'2.7em'}}/>

                <span className='uk-transition-slide-bottom uk-overlay uk-overlay-primary uk-position-bottom-left uk-visible@m map-label'>{countries.uk.name}</span>
            </div>

        </div>        
    )
}

const GermanyMap = ({isMax,selectCountry, selected}) =>{
    // reduce opacity if selected country count is max
    const opacity = isMax && !selected ? '.7' : '1'

    return (
        <div className='uk-position-absolute  uk-transition-toggle germany-map-animation' onClick={selectCountry} style={{left:'14.35em',display:'block',zIndex:1}}>
            <div className='uk-position-relative'>

                <img src={selected ? countries.germany.selectedMap : countries.germany.map} alt={countries.germany.name+'-map'} style={{width:'5.75em'}}/>
                <img className='uk-position-absolute uk-position-center map-flag' alt={countries.germany.name+'-flag'} src={countries.germany.flag} style={{opacity, width:'2.7em',height:'2.7em'}}/>

                <span className='uk-transition-slide-top uk-overlay uk-overlay-primary uk-position-bottom-left uk-visible@m map-label' style={{transform:'translateY(100%)'}} >{countries.germany.name}</span>
            </div>

        </div>        
    )
}


const ChinaMap = ({isMax,selectCountry, selected}) =>{
    // reduce opacity if selected country count is max
    const opacity = isMax && !selected ? '.7' : '1'
    
    return (
        <div className='uk-position-absolute  uk-transition-toggle uk-overflow-hidden china-map-animation' onClick={selectCountry} style={{bottom:'.2em',left:'16.18em',display:'block'}}>
            <div className='uk-position-relative'>

                <img src={selected ? countries.china.selectedMap : countries.china.map} alt={countries.china.name+'-map'} style={{width:'19.37em' }}/>
                <img className='uk-position-absolute uk-position-center map-flag' alt={countries.china.name+'-flag'} src={countries.china.flag} style={{opacity, transform:'translateY(-3em)', width:'2.7em',height:'2.7em'}}/>

                <span className='uk-transition-slide-top uk-overlay uk-overlay-primary uk-position-top-center uk-visible@m map-label'>{countries.china.name}</span>
            </div>

        </div>        
    )
}


const IndiaMap = ({isMax,selectCountry, selected}) =>{
    // reduce opacity if selected country count is max
    const opacity = isMax && !selected ? '.7' : '1'

    return (
        <div className='uk-position-absolute  uk-transition-toggle uk-overflow-hidden india-map-animation' onClick={selectCountry} style={{bottom:'0px',left:'16.2em',display:'block',zIndex:1}}>
            <div className='uk-position-relative'>

                <img src={selected ? countries.india.selectedMap : countries.india.map} alt={countries.india.name+'-map'} style={{width:'9.62em' }}/>
                <img className='uk-position-absolute uk-position-center map-flag' alt={countries.india.name+'-flag'} src={countries.india.flag} style={{opacity, transform:'translate(-2.5em,-2em)',width:'2.7em',height:'2.7em'}}/>

                <span className='uk-transition-slide-bottom uk-overlay uk-overlay-primary uk-position-bottom-left uk-visible@m map-label'>{countries.india.name}</span>
            </div>

        </div>        
    )
}


const SouthKoreaMap = ({isMax,selectCountry, selected}) =>{
    // reduce opacity if selected country count is max
    const opacity = isMax && !selected ? '.7' : '1'

    return (
        <div className='uk-position-absolute  uk-transition-toggle southKorea-map-animation' onClick={selectCountry} style={{bottom:'9em',right:'2.7em',display:'block',zIndex:1}}>
            <div className='uk-position-relative uk-flex uk-flex-center' style={{width:'7em'}}>

                <img src={selected ? countries.southKorea.selectedMap : countries.southKorea.map} alt={countries.southKorea.name+'-map'} style={{width:'3.7em' }}/>
                <img className='uk-position-absolute uk-position-center map-flag' alt={countries.southKorea.name+'-flag'} src={countries.southKorea.flag} style={{opacity, width:'2.7em',height:'2.7em', transform:'translate(-1em,-2em)'}}/>

                <span className='uk-transition-slide-top uk-overlay uk-overlay-primary uk-position-top-left uk-visible@m map-label' style={{ transform:'translateY(-100%)'}}>{countries.southKorea.name}</span>
            </div>

        </div>        
    )
}


const JapanMap = ({isMax,selectCountry, selected}) =>{
    // reduce opacity if selected country count is max
    const opacity = isMax && !selected ? '.7' : '1'

    return (
        <div className='uk-position-absolute  uk-transition-toggle uk-overflow-hidden japan-map-animation' onClick={selectCountry} style={{bottom:'2em',right:'.4em',display:'block'}}>
            <div className='uk-position-relative'>

                <img src={selected ? countries.japan.selectedMap : countries.japan.map} alt={countries.japan.name+'-map'} style={{width:'7.43em' }}/>
                <img className='uk-position-absolute uk-position-center map-flag' alt={countries.japan.name+'-flag'} src={countries.japan.flag} style={{opacity, width:'2.7em',height:'2.7em',transform:'translateX(.1em)'}}/>

                <span className='uk-transition-slide-bottom uk-overlay uk-overlay-primary uk-position-bottom-left uk-visible@m map-label'>{countries.japan.name}</span>
            </div>

        </div>        
    )
}

export default MapWrapper;