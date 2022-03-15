import React from 'react'
import questionIcon from '../assets/icons/question_icon.png'

const QuestionIconButton = () => {
  return (
    <div className='uk-position-fixed uk-position-bottom-right question-float'>
        <img src={questionIcon} style={{width:'70px'}} alt='Question icon'/>
    </div>
  )
}

export default QuestionIconButton