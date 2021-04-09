import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import firebase from 'firebase';

import '../navigation/NavBar.css';

import Button from 'react-bootstrap/Button';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import WhiteVapaLogo from '../../img/white_vapa_logo.svg';
import SearchIcon from '../../img/search.svg';
import UserIcon from '../../img/user.svg';
import LoggedInUserIcon from '../../img/user_loggged_in.svg';
import openBurger from '../../img/openBurger.svg';
import closeBurger from '../../img/closeBurger.svg';

import AboutVapa from '../content/AboutVapa';
import Contacts from '../content/Contacts';
import Partners from "../partners/Partners";
import PaymentAndDelivery from '../content/PaymentAndDelivery';
import Sign from '../sign/Sign';

import ShoppingCard from "../shoppingCard/ShoppingCard"
import Home from '../home/Home';
import Profile from '../profile/Profile';

import Auth from "../sign/Auth"



 class NavBar extends React.Component {

    state = {
        user: null,
        burgerMenu: openBurger,
        bugregMenuClass: 'closedNav',
        // authSubscription: null, 'static nav is not requared unmounting'
    }

    // openBurger = () => {
    //     this.setState({
    //         burgerMenu: closeBurger
    //     })
    // }

    closeBurger = () => {
        this.setState({
            burgerMenu: openBurger,
            bugregMenuClass: 'closedNav',
        })
    }

    changeBurgerMenu = () => {
        if (this.state.burgerMenu === openBurger) {
            this.setState({
                burgerMenu: closeBurger,
                bugregMenuClass: 'openedNav',
            })
        } if (this.state.burgerMenu === closeBurger) {
            this.setState({
                burgerMenu: openBurger,
                bugregMenuClass: 'closedNav',
            })
        }
    }

    componentDidMount() {
        // const authSubscription = 'static nav is not requared unmounting'
        firebase.auth()
            .onAuthStateChanged(user => {
            console.log('onAuthStateChanged');
            this.setState({
                user
            })
        })
        // this.setState({ 'static nav is not requared unmounting'
        //     authSubscription 
        // })
    }

    // componentWillUnmount() {
    //     this.state.authSubscription && this.state.authSubscription(); 'static nav is not requared unmounting'
    // }

    signOut = () => {
        firebase.auth().signOut()
    }

    render () {
        return(
            <div className="navBarBody" >
                <Navbar className='navBar'>
                    <div className="imageNav">
                        <Link to='/vapa' >
                            <Image 
                                className="navBrandImage" 
                                src={WhiteVapaLogo} alt={'vapa_logo'} 
                            />
                        </Link>

                        <Nav  className='nav' >
                            <Link  to='/vapa' className='navLink' >
                                Main
                            </Link>

                            <Link  to='/catalog' className='navLink' >
                                Catalog
                            </Link>

                            <Link  to='/aboutVapa' className='navLink' >
                                About Vapa
                            </Link>
                                        
                            <Link to='/contacts' className='navLink' >
                                Contacts
                            </Link>
                    
                            <Link to='/partners' className='navLink' >
                                Partners
                            </Link>

                            <Link  to='/certificate' className='navLink' >
                                Сertificate
                            </Link>
                    
                            {/* <Link to='/paymentAndDelivery' className='navLink' >
                                Payment and delivery
                            </Link> */}
                        </Nav>
                    </div>
                    
                    <div className="icons" >
                        <img
                            className="searchIcon"
                            src={SearchIcon}
                            alt='search icon'
                        />

                        <Auth>
                            {
                               ({ user }) => {
                                   return (
                                    <Link to='/profile'>
                                        {
                                            user
                                            ?
                                            <img
                                            className="loggedInProfileIcon"
                                            src={LoggedInUserIcon}
                                            />
                                            :
                                            <img
                                            className="profileIcon"
                                            src={UserIcon}
                                            />
                                        }
                                        
                                    </Link>
                                   )
                               } 
                            }
                        </Auth>
                        
                        <ShoppingCard />
                    </div>
                </Navbar>

                <div className="burgerBar">

                    <Link to='/vapa' >
                        <Image 
                            onClick={() => this.closeBurger()}
                            className="navBrandImage" 
                            src={WhiteVapaLogo} alt={'vapa_logo'} 
                        />
                    </Link>

                    <div className="icons" >
                        <img
                            onClick={() => this.closeBurger()}
                            className="searchIcon"
                            src={SearchIcon}
                            alt='search icon'
                        />

                        <Auth>
                            {
                               ({ user }) => {
                                   return (
                                    <Link to='/profile'>
                                        {
                                            user
                                            ?
                                            <img
                                            className="loggedInProfileIcon"
                                            src={LoggedInUserIcon}
                                            />
                                            :
                                            <img
                                            className="profileIcon"
                                            src={UserIcon}
                                            />
                                        }
                                        
                                    </Link>
                                   )
                               } 
                            }
                        </Auth>

                        <ShoppingCard />
                    </div>

                    <Image onClick={() =>  this.changeBurgerMenu()} src={this.state.burgerMenu} className="burger" alt='burger open'></Image>
                        <div className={this.state.bugregMenuClass} >
                            <Nav >

                                <Link onClick={() => this.closeBurger()} to='/vapa' className='navLink' >
                                    Main
                                </Link>

                                <Link onClick={() => this.closeBurger()} to='/catalog' className='navLink' >
                                    Catalog
                                </Link>

                                <Link  onClick={() => this.closeBurger()} to='/aboutVapa' className='navLink' >
                                    About Vapa
                                </Link>
                                            
                                <Link onClick={() => this.closeBurger()} to='/contacts' className='navLink' >
                                    Contacts
                                </Link>
                        
                                <Link onClick={() => this.closeBurger()} to='/partners' className='navLink' >
                                    Partners
                                </Link>

                                <Link onClick={() => this.closeBurger()} to='/certificate' className='navLink' >
                                    Сertificate
                                </Link>
                        
                                {/* <Link onClick={() => this.closeBurger()} to='/paymentAndDelivery' className='navLink' >
                                    Payment and delivery
                                </Link> */}
                            </Nav>
                        </div>
                </div>
            </div>
        )

    }
    
}

export default NavBar;