import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../assets/css/comparator.css'
import data from '../data/data.json'
import { setTradeData } from '../redux'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import globeIcon from '../assets/icons/bg-globe.png'
import CompareOutputDisplay from '../components/comparator/CompareOutputDisplay'
import ControlNavBar from '../components/comparator/ControlNavbar'
import MapWrapper from '../components/comparator/MapWrapper'
import CompareDataControl from '../components/comparator/CompareDataControl'
import UIkit from 'uikit'

const Comparator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // suppose data is fetched from api
    const tradeData = data;
    dispatch(setTradeData(tradeData))

  },[])

  return (
    <div>
      <Navbar/>
      <ControlNavBar/>
      <div className='comparator-page-body'>
        <ComparatorHeader />

        <div className='uk-container uk-container-small uk-overflow-hidden uk-margin-top uk-padding-small uk-padding-remove-vertical' >
            <MapWrapper />
            <CompareDataControl/>
        </div>

        <CompareOutputDisplay />

      </div>

      <ComparatorFooterBefore />
      <ComparatorFooterAfter/>
    </div>
  )
}




const ComparatorFooterBefore = () => {

  const leftCountry = useSelector(state => state.comparator.leftCountry)
  useEffect(() => {
    if (leftCountry)
    {
      UIkit.util.$('#footer-before').classList.add('uk-transition-slide-bottom')
    }

  }, [leftCountry])

  return (
  <div className='bg-secondary uk-position-fixed uk-padding-remove uk-position-bottom-right footer-responsive' id='footer-before'>
    <div className='uk-container uk-container-small'>

      <div className='uk-flex text-primary-color uk-flex-wrap uk-flex-wrap-middle'>
        <FontAwesomeIcon className='uk-visible@m' icon={faAngleDown} style={{fontSize:'20px'}}/>
        <span className='uk-text-bold uk-margin-small-left uk-margin-small-right'>Explore the report</span>
        <FontAwesomeIcon className='uk-hidden@m' icon={faAngleRight} style={{fontSize:'20px'}}/>
      </div>
      <div className='uk-text-lead text-secondary-color'>Global Index</div>

      <div className='uk-overlay uk-padding-remove uk-position-top-right uk-visible@m'>
        <img src={globeIcon} width="400" height="400" style={{transform:'translateY(-55px)'}} alt='Globe icon'/>
      </div>
    </div>
  </div>

  )
}

const ComparatorFooterAfter = () => {
  const leftCountry = useSelector(state => state.comparator.leftCountry)
  useEffect(() => {
    if (leftCountry)
    {
      UIkit.util.$('#footer-after').classList.remove('uk-hidden')
    }

  }, [leftCountry])

  return (
    <div className='bg-secondary uk-position-absolute uk-padding-remove uk-position-bottom-left footer-responsive footer-after uk-hidden' id='footer-after'>
      <div className='uk-container uk-container-small'>

        <div className='uk-flex text-primary-color uk-flex-wrap uk-flex-wrap-middle'>
          <FontAwesomeIcon className='uk-visible@m' icon={faAngleDown} style={{fontSize:'20px'}}/>
          <span className='uk-text-bold uk-margin-small-left uk-margin-small-right'>Explore the report</span>
          <FontAwesomeIcon className='uk-hidden@m' icon={faAngleRight} style={{fontSize:'20px'}}/>
        </div>
        <div className='uk-text-lead text-secondary-color'>Global Index</div>

        <div className='uk-overlay uk-padding-remove uk-position-top-right uk-visible@m'>
          <img src={globeIcon} width="400" height="400" style={{transform:'translateY(-55px)'}} alt='Globe icon'/>
        </div>
      </div>
    </div>
  )
}

const ComparatorHeader  = () => (
  <div className='bg-primary-gradient uk-animation-slide-top'>
    <div className='uk-container uk-container-medium uk-container-small uk-padding-small comparator-header'>
      <div className="uk-text-light uk-text-uppercase text-primary-color" style={{fontSize:'1.6em',lineHeight:'1em'}}>Global Trade</div>
      <div className='uk-text-uppercase text-primary-color' style={{fontSize:'2.4em', fontWeight: 900}}>Country Comparator</div>
      <p className='uk-margin-remove-top text-secondary-color' style={{fontSize:'1.2em'}}>Select between 2 countries and the reporting period to compare trade indexes.</p>
    </div>
  </div>
)

export default Comparator