import React from 'react'
import imgLog from '../../assets/Logo (7).svg'
import imgPerson from '../../assets/Group 1 (1).svg'
import imgHero from '../../assets/imghero.png'
import imgsearch from '../../assets/search.png'
import "./Header.css"

const Header = () => {
  return (
    <>


        <header className="header">
        <div className="container">
            <nav className="navbar">
                <div className="navbar__logo"><img src={imgLog} alt=""/></div>
                <ul className="navbar__collection">
                    <li>Home</li>
                    <li>Brands</li>
                    <li>Recent Products</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
                <div className="menu__navbar">
                    <img src={imgPerson} alt=""/>
                </div>
                <div className="navbar__menu">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </div>
    </header>

   
        <section className="hero">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__text">
                        <h1 className="hero__h1">Discover <br/> Most Suitable Watches</h1>
                        <p className="hero__p">Find the best, reliable, and cheap smart watches here. We focus on product
                            quality. Here you
                            can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                        <div className="main__search">
                            <img src={imgsearch} className='search__icon' alt="" />
                            <input type="search" className="search" placeholder="Find the best brands"/>
                            <button className="search__btn">search</button>
                        </div>
                    </div>
                    <div className="hero__image">
                        <img src={imgHero} alt="" className='' />
                    </div>
                </div>
            </div>
        </section>
   


    </>


  )
}

export default Header