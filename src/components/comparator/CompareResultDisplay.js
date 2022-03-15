import { useEffect, useState } from "react";
import LargeScreenResult from "./LargeScreenResult";
import SmallScreenResult from "./SmallScreenResult";

const CompareResultDisplay = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {

        window.onresize = () => {
            setWidth(window.innerWidth)
        }
        return () => {
            window.onresize = null;
        }
    }, [])

    return (
        <>
            {width >= 942 ?
            <LargeScreenResult />
            :
            <SmallScreenResult />
            }
        </>
    )
}




export default CompareResultDisplay