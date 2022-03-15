import { faBars, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-primary-gradient uk-position-fixed'>
      <div className='uk-flex uk-flex-between uk-flex-middle uk-height-1-1 uk-padding-small uk-padding-remove-vertical'>
        <div className='uk-flex uk-flex-middle'>
          <FontAwesomeIcon className='mobile-button bg-primary uk-hidden@m' icon={faBars} />

          <img 
          className='uk-flex-wrap uk-flex-wrap-middle uk-margin-small-left uk-margin-small-right nav-brand' 
          src="https://lot.dhl.com/global-trade-barometer-gtb/_nuxt/img/c244bed.png" 
          alt='app logo'/>

          <div className='uk-text-bold text-primary-color uk-margin-small-left'>Global Trade Barometer</div>
        </div>

        <FontAwesomeIcon icon={faShareNodes} className="uk-visible@m uk-margin-small-right text-primary-color" style={{fontSize: '25px'}}/>

      </div>

    </nav>
  )
}

export default Navbar