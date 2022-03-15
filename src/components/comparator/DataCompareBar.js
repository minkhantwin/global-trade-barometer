import { useRef } from "react";

const DataCompareBar = ({name, leftData = 0, rightData = 0}) => {
    const barRef = useRef();
    const isLeftGreater = leftData > rightData;
    const isRightGreater = rightData > leftData;
    const isAbsent = !leftData || !rightData;
    const isEqual = leftData === rightData;
    let progressWidth = 50; // default progress width
    
    if (!isEqual && !isAbsent)
    {
        const diff = leftData - rightData;
        const percent = 100 - (isLeftGreater ? 100 * diff / leftData : 100 * Math.abs(diff) / rightData)
        progressWidth = 50 + (50 * percent / 100) //  calculating the whole progress width
    }

    const mainProgressStyle = {
        position: 'relative',
        height: '100%',
        transition: 'all 1s linear',
        overflow: 'hidden',
        width: progressWidth + '%',
        transform: isEqual || isAbsent ? 'translateX(0px)' : (isLeftGreater ? 'translateX(-13px)' : 'translateX(13px)'),
        backgroundColor: '#d0d0d0',   // keeping default bg color
    }

    return (
        <div className="compare-bar-container" ref={barRef} style={{zIndex: leftData < rightData ? 0 : 3}}>
            <div className="uk-flex uk-flex-between uk-flex-middle uk-position-relative uk-height-1-1" style={{zIndex: 1, height: '100%'}}>
                <span
                style={{ fontWeight: isLeftGreater ? 700 : 400 }} 
                className="uk-margin-small-left text-secondary-color">
                    {leftData !== 0 ? leftData : ''}
                </span>

                <span className="uk-text-small text-secondary-color">{name}</span>

                <span 
                style={{ fontWeight: isRightGreater ? 700 : 400 }}
                className="uk-margin-small-right text-secondary-color">
                    {rightData !== 0 ? rightData : ''}
                </span>

            </div>
            
            <div  
            className="progress" 
            style={{ justifyContent: !isAbsent && isRightGreater ? 'end' : 'start'}}  /** adjust progress bar */
            >
                <div 
                className={getProgressClass(leftData, rightData, false, barRef.current)} 
                data-uk-scrollspy="cls:down-progress-width; repeat:true"
                ></div>

                <div style={mainProgressStyle}>
                    <div 
                    className={getProgressClass(leftData, rightData, true, barRef.current)} 
                    /** move the element into view to be visible for ukikit scrollspy */
                    style={{ transform : isEqual || isAbsent ? 'translateX(0px)' : (isLeftGreater ? 'translateX(13px)' : 'translateX(-13px)')}}  
                    data-uk-scrollspy="cls:up-progress-width; repeat:true"
                    ></div>
                </div>
            </div>

        </div>
    )
}

const getProgressClass = (left, right, isUpBar, barElement) => {
    let cls = isUpBar ? 'up-progress' : 'down-progress'
    // for already visible bar
    if (isVisible(barElement))
    {
        cls += isUpBar ? ' up-progress-width' : ' down-progress-width'
    }

    if (!right || !left)
    {
        cls += ' absent'
    }
    else if (left === right)
    {
        cls += ' center'
    }
    else if (left > right)
    {
        cls += isUpBar ? ' left' : ' right';
    }
    else
    {
        cls += isUpBar ? ' right' : ' left';
    }

    return cls

}

const isVisible = (element) => {
    if(!element) 
    {
        return false;
    }
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 30 // progress bar height
}

export default DataCompareBar;