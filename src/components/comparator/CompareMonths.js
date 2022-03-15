
import leftThread from '../../assets/icons/left_thread.png'
import centerThread from '../../assets/icons/center_thread.png'
import rightThread from '../../assets/icons/right_thread.png'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentMonth } from '../../redux'
import { getMonthName } from '../../utils/getMonthName'
  

const CompareMonths = () => {
    const dispatch = useDispatch();
    const {start, end, current} = useSelector(state => state.comparator.month)

    return (
        <div className='uk-flex uk-flex-column uk-flex-middle uk-overflow-hidden uk-visible@m' style={{transform: 'translateY(-40px)'}}>
            <div className='uk-inline'>
                <img src={leftThread}  width="202"  alt='Thread'/>
                <img src={centerThread} width="1" height="188" alt='Thread'/>
                <img src={rightThread}  width="202" alt='Thread'/>
            </div>

            <div>
                <a
                onClick={() => dispatch(changeCurrentMonth(start))} 
                className={'outline-box uk-text-decoration-none ' + (start === current ? 'bg-primary text-white' : '')}
                style={{width: '128px'}}
                data-uk-scroll
                href="#compare-scroll-to"
                >
                    {getMonthName(start)}
                </a>

                <div className='uk-inline' style={{width: '284px'}}>
                    <div className='uk-flex uk-flex-center'>
                        <a
                        onClick={() => dispatch(changeCurrentMonth(start+1))} 
                        className={'outline-box uk-text-decoration-none ' + (start+1 === current ? 'bg-primary text-white' : '')}
                        style={{width: '128px'}}
                        data-uk-scroll
                        href="#compare-scroll-to"
                        >
                            {getMonthName(start+1)}
                        </a>

                    </div>
                </div>

                <a
                onClick={() => dispatch(changeCurrentMonth(end))} 
                className={'outline-box uk-text-decoration-none ' + (end === current ? 'bg-primary text-white' : '')}
                style={{width: '128px'}}
                data-uk-scroll
                href="#compare-scroll-to"
                >
                    {getMonthName(end, 'short')}
                </a>
            </div>

        </div>
    )
}

export default CompareMonths;