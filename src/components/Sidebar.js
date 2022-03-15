import { faBars, faGlobe, faHouse, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import colorCompareIcon from '../assets/icons/h-compare.png'
import {importAllFlags} from '../utils/importCountryImages'
import {v4 as uuidv4} from 'uuid'

const images = importAllFlags();

const countries = [
    {
        short: 'cn',
        icon: images['china-flag.png']
    },
    {
        short: 'de',
        icon: images['germany-flag.png']
    },
    {
        short: 'in',
        icon: images['india-flag.png']
    },
    {
        short: 'jp',
        icon: images['japan-flag.png']
    },
    {
        short: 'kr',
        icon: images['southKorea-flag.png']
    },
    {
        short: 'uk',
        icon: images['uk-flag.png']
    },
    {
        short: 'us',
        icon: images['us-flag.png']
    },
]

const Sidebar = () => {
    return (
        <div className='sidebar uk-visible@m'>

            <div className='menu-button'>
                <FontAwesomeIcon icon={faBars} style={{fontSize:'18px'}}/>
            </div>
            <div className="sidebar-nav-list">
                <div>
                    <FontAwesomeIcon icon={faHouse}/>
                </div>

                <div style={{background: 'white'}}>
                    <img src={colorCompareIcon} alt="Compare icon"/>
                </div>
                
                <div>
                    <FontAwesomeIcon icon={faGlobe} style={{fontSize:'18px'}}/>
                </div>
                
                {countries.map((country, index) => {
                    const id = 'nav_' + uuidv4()
                    return (
                    <div key={index} uk-toggle={"target: #"+ id +"; mode: hover"}>
                        <span className="uk-text-uppercase" id={id} style={{ fontWeight: 900 }}>{country.short}</span>
                        <img src={country.icon} id={id} alt="Country flag" hidden/>
                    </div>
                    )
                })
                }
                <div>
                    <FontAwesomeIcon icon={faInfoCircle} style={{fontSize:'18px'}}/>
                </div>

            </div>

        </div>
    )
}

export default Sidebar