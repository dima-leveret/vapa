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



 class NavBar extends React.Component {

    state = {
        user: null,
        burgerMenu: openBurger,
        openBurgerMenu: false,
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
            openBurgerMenu: false,
        })
    }

    changeBurgerMenu = () => {
        if (this.state.burgerMenu === openBurger) {
            this.setState({
                burgerMenu: closeBurger,
                openBurgerMenu: true,
            })
        } if (this.state.burgerMenu === closeBurger) {
            this.setState({
                burgerMenu: openBurger,
                openBurgerMenu: false,
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
                            <Link  to='/aboutVapa' className='navLink' >
                                About Vapa
                            </Link>
                                        
                            <Link to='/contacts' className='navLink' >
                                Contacts
                            </Link>
                    
                            <Link to='/partners' className='navLink' >
                                Partners
                            </Link>
                    
                            <Link to='/paymentAndDelivery' className='navLink' >
                                Payment and delivery
                            </Link>
                        </Nav>
                    </div>
                    

                    <div className="icons" >
                        <img
                            className="searchIcon"
                            src={SearchIcon}
                            alt='search icon'
                        />
                        <Link to='/profile'>
                            <img
                            className="profileIcon"
                            src={UserIcon}
                            />
                        </Link>
                        <ShoppingCard />
                    </div>

                    {/* {this.state.user
                    ?
                    <div>
                        <p style={{ color: "white", backgroundColor: "grey" }} >Wellcome <br/> {this.state.user.email}</p>
                        <Button
                        onClick={this.signOut} 
                        variant='warning' 
                    >Sign out</Button>
                    </div>
                    
                    : 
                    <Link to='/sign-in'  className='navLink'>
                        <Button variant='success' >Sign in</Button>
                    </Link>
                    } */}

                    {/* <a href='https://www.instagram.com/vapa.eco/' target='blank' >
                        <FiInstagram className='instaIcon' />
                    </a> */}
                </Navbar>

                {/* <Navbar className="burgerBar" collapseOnSelect expand='md'>

                    <Link to='/vapa' >
                        <Image 
                            className="navBrandImage" 
                            src={WhiteVapaLogo} alt={'vapa_logo'} 
                        />
                    </Link>

                    <div className="icons" >
                        <img
                            className="searchIcon"
                            src={SearchIcon}
                            alt='search icon'
                        />
                        <Link to='/profile'>
                            <img
                            className="profileIcon"
                            src={UserIcon}
                            />
                        </Link>
                        <ShoppingCard />
                    </div>

                    <Navbar.Toggle className='navBarToggle' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='navBarCollaps' id="responsive-navbar-nav" >
                        <Nav  className='nav' >
                            <Link  to='/aboutVapa' className='navLink' >
                                About Vapa
                            </Link>
                                    
                            <Link to='/contacts' className='navLink' >
                                Contacts
                            </Link>
                
                            <Link to='/partners' className='navLink' >
                                Partners
                            </Link>
                
                            <Link to='/paymentAndDelivery' className='navLink' >
                                Payment and delivery
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> */}

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
                        <Link to='/profile'>
                            <img
                            onClick={() => this.closeBurger()}
                            className="profileIcon"
                            src={UserIcon}
                            />
                        </Link>
                        <ShoppingCard />
                    </div>

                    <Image onClick={() =>  this.changeBurgerMenu()} src={this.state.burgerMenu} className="burger" alt='burger open'></Image>
                    {
                        this.state.openBurgerMenu === true
                        ?
                        <div className='openedNav' >
                            <Nav >
                                <Link  onClick={() => this.closeBurger()} to='/aboutVapa' className='navLink' >
                                    About Vapa
                                </Link>
                                            
                                <Link onClick={() => this.closeBurger()} to='/contacts' className='navLink' >
                                    Contacts
                                </Link>
                        
                                <Link onClick={() => this.closeBurger()} to='/partners' className='navLink' >
                                    Partners
                                </Link>
                        
                                <Link onClick={() => this.closeBurger()} to='/paymentAndDelivery' className='navLink' >
                                    Payment and delivery
                                </Link>
                            </Nav>
                        </div>
                        
                        :
                        <div className='closedNav' >
                            <Nav >
                                <Link  onClick={() => this.closeBurger()} to='/aboutVapa' className='navLink' >
                                    About Vapa
                                </Link>
                                            
                                <Link onClick={() => this.closeBurger()} to='/contacts' className='navLink' >
                                    Contacts
                                </Link>
                        
                                <Link onClick={() => this.closeBurger()} to='/partners' className='navLink' >
                                    Partners
                                </Link>
                        
                                <Link onClick={() => this.closeBurger()} to='/paymentAndDelivery' className='navLink' >
                                    Payment and delivery
                                </Link>
                            </Nav>
                        </div>
                        
                    }
                    

                </div>

            </div>
        )

    }
    
}

export default NavBar;