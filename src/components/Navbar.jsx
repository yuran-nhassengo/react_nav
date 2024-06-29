import './NavBarStyles.css'
import {useState} from 'react'

export const NavBar = () =>{
    const [clicked,setClicked] = useState(false)


    return(
        <>
            <nav>
                <a><img src="/logoipsum-299.svg" alt="" /></a>

                <div>
                    <ul id="navbar" className={clicked?"#navbar active":"#navbar"} >
                        <li><a className="active" href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="mobile">
                        <i  onClick={() => setClicked(!clicked)} className={clicked?"fas fa-times":"fas fa-bars"}></i>
                </div>
            </nav>
        
        </>
    )
}