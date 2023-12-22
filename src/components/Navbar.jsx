import React from "react";
import ProfilePic from '../images/image-avatar.png';
import Cart from '../images/icon-cart.svg';
import '../css/nav.css'
import hamburger from '../images/icon-menu.svg'

const Navbar = (props) => {
    const [click,setClick] = React.useState(true)

    const navRef = React.useRef(null);

    const change = () => {
        setClick((preClick) => !preClick)
    }

    const closeMenu = (e) => {
        if (navRef.current && !navRef.current.contains(e.target))
        setClick(true)
    }

    React.useEffect(()=>{
        document.addEventListener('click',closeMenu);
        return () => {
            document.removeEventListener('click',closeMenu)
        }
    },[])

    return(
        <div className="nav" ref={navRef}>
            <nav>
                <div className="nav--left">
                    <div >
                        <h3 className="nav__logo">sneakers</h3>
                    </div>
                    <div>
                        <img src={hamburger} alt="hamburger" className="nav__hamburger" onClick={change}/>
                    </div>
                    <div className={`${click ? 'nav__nav': 'nav__nav__600'}`}>
                        <h3>Collections</h3>
                        <h3>Men</h3>
                        <h3>Women</h3>
                        <h3>About</h3>
                        <h3>Contact</h3>
                    </div>
                </div>
                <div className="nav--right">
                    <div className="nav--right__cart">
                        <img src={Cart} alt="cart" className="cart"/>
                        <div className="nav--cart__count">
                            {props.addCount}
                        </div>
                    </div>
                    <img src={ProfilePic} alt="avatar" className="nav__avatar"/>
                </div>
            </nav>
        </div>
    )
}   
export default Navbar;