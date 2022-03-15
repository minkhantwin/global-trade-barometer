import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import UIkit from 'uikit'
import {v4 as uuidv4} from 'uuid'

const Dropdown = ({list, currentValue, onSelect, label = '', disabledItemValue = null}) => {
    const currItem = list.filter(item => item.value === currentValue) 
    const [listId, setListId] = useState('list_' + uuidv4())
    const [iconId, setIconId] = useState('list_' + uuidv4())

    useEffect(() => {
        const util = UIkit.util;

        const listToggle = () => {
            util.$('#'+iconId).classList.toggle('dd-icon-transform')
        }
        // transform icon on dropdown toggle
        util.on('#' + listId, 'show hide', listToggle)

        return () => {
            util.off('#' + listId, 'show hide', listToggle)
        }
    }, [listId, iconId])

    return (
        <div 
        className="uk-position-relative" 
        style={{flexGrow: '1'}}
        >
            
            <button 
            type="button" 
            className="dd-header uk-flex uk-flex-between uk-flex-middle" 
            >
                <div className='uk-text-left'>
                    { label && <span className='uk-hidden@m' style={{fontSize: '12px'}}>{label}</span> }

                    <div className='uk-flex uk-flex-middle' style={{marginTop: '3px'}}>
                        {currItem[0].icon && <img src={currItem[0].icon} width='25' height='25'className='uk-margin-small-right' alt='Country flag'/>}
                        <div className="dd-header-title">{currItem[0].text}</div>
                    </div>

                </div>
                <FontAwesomeIcon icon={faAngleDown} id={iconId} style={{transition: 'all .3s linear'}}/>

            </button>
            
            <div
            uk-dropdown="mode:click; pos:top-center; offset:-10px"
            role="list"
            id={listId}
            className="dd-list uk-padding-remove"
            >
            {list.map((item,index) => (
                disabledItemValue && disabledItemValue === item.value ?
                <button
                className="dd-list-item"
                key={index}
                style={{ opacity: .6 }}
                >
                    {item.icon && <img src={item.icon} width='25' height='25' className='uk-margin-small-right' alt='Country flag'/>}
                    {item.text}
                </button>
                :
                <button
                className="dd-list-item"
                key={index}
                uk-toggle={"target: #"+ listId} 
                onClick={() => onSelect(item.value)}
                >
                    {item.icon && <img src={item.icon} width='25' height='25' className='uk-margin-small-right' alt='Country flag'/>}
                    {item.text}
                </button>
            ))}
            </div>
            
        </div>
    )

}

export default Dropdown