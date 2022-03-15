import React from 'react'
import { useSelector } from 'react-redux'
import CompareMonths from './CompareMonths'
import CompareResultDisplay from './CompareResultDisplay'

const CompareOutputDisplay = () => {
  const isCompare = useSelector(state => state.comparator.leftCountry ? true : false)

  return (
    isCompare && <div className='uk-overflow-hidden'>
        <CompareMonths />
        <CompareResultDisplay />

    </div>
  )
}



export default CompareOutputDisplay