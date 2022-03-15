import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SmallScreenControlNav from "./SmallScreenControlNavbar";
import LargeScreenControlNav from "./LargeScreenControlNav";


const ControlNavBar = () => {
    
    const [canShow, setcanShow] = useState(false);
    const isCompare = useSelector(state => state.comparator.leftCountry ? true : false)

    useEffect(() => {
        const onScroll = () => {
            setcanShow(window.scrollY >= 680)
        }
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    
    return (
        isCompare && canShow && 
        <>
            <LargeScreenControlNav />
            <SmallScreenControlNav/>
        </>
        )
}




export default ControlNavBar;