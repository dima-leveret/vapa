import React from 'react';
import { connect } from 'react-redux';
import { setInputValue, cleanInputValue } from '../../state/products'
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import '../navigation/NavBar.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import WhiteVapaLogo from '../../img/white_vapa_logo.svg';
import SearchIcon from '../../img/search.svg';
import UserIcon from '../../img/user.svg';
import LoggedInUserIcon from '../../img/user_loggged_in.svg';
import openBurger from '../../img/openBurger.svg';
import closeBurger from '../../img/closeBurger.svg';
import closeInput from '../../img/closeInput.svg';


import ShoppingCard from "../shoppingCard/ShoppingCard";
// import SearchProduct from '../products/SearchProduct';

import Auth from "../sign/Auth";




 class NavBar extends React.Component {

    state = {
        user: null,
        burgerMenu: openBurger,
        searchIcon: SearchIcon,
        bugregMenuClass: 'closedNav',
        searchInputClass: 'closedSearchInput',
        searchIconClass: 'searchIcon',
        navbarNavLink: 'navLink',
        navbarNav: 'navbar-nav',
        imageNavInput: 'imageNav',
        burgerBarNavClass: 'burgerBarNav',
        searchInputMobileClass: 'searchInputMobile-closed',
        inputAutoFocus: false
        // authSubscription: null, 'static nav is not requared unmounting'
    }


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

    changeInputClass = (event) => {

        const elStopScroll = document.querySelector('.table-responsive');
        // const input = document.querySelector('.openedSearchInput')

        if (this.state.searchInputClass === "closedSearchInput") {
            this.setState({
                searchInputClass: 'openedSearchInput',
                navbarNavLink: 'navLink-closed',
                navbarNav: 'navbar-nav-input',
                imageNavInput: 'imageInput',
                searchIcon: closeInput,
                inputAutoFocus: true
            })
            console.log(event);
            console.log(elStopScroll.offsetTop);
            event.view.scrollTo({
                top: elStopScroll.offsetTop-80,
                behavior: 'smooth'
            })
        } 

        if (this.state.searchInputClass === "openedSearchInput") {
            this.setState({
                searchInputClass: 'closedSearchInput',
                navbarNavLink: 'navLink',
                navbarNav: 'navbar-nav',
                imageNavInput: 'imageNav',
                searchIcon: SearchIcon,
            })
            this.props.cleanInputValue()
        } 
    }

    changeInputClassMobile = (event) => {

        const elStopScrollMobile = document.querySelector('.table-responsive')

        if (this.state.searchInputMobileClass === 'searchInputMobile-closed') {
            this.setState({
                burgerBarNavClass: 'burgerBarNav-closed',
                searchInputMobileClass: 'searchInputMobile'
            })

            event.view.scrollTo({
                top: elStopScrollMobile.offsetTop-80,
                behavior: 'smooth'
            })
        }

        if (this.state.searchInputMobileClass === 'searchInputMobile') {
            this.setState({
                burgerBarNavClass: 'burgerBarNav',
                searchInputMobileClass: 'searchInputMobile-closed'
            })
            this.props.cleanInputValue()
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

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOnClickOutside, false)
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOnClickOutside, false)
    }

    handleOnClickOutside = (event) => {
        const inputSearch = document.querySelector('.openedSearchInput');

        if (!event.path.includes(inputSearch)) {

            const searchIcon = document.querySelector('.searchIcon');
            
            if (!event.path.includes(searchIcon) && this.state.searchInputClass === "openedSearchInput") {
                this.changeInputClass();
            }
        }
    }

    // componentWillUnmount() {
    //     this.state.authSubscription && this.state.authSubscription(); 'static nav is not requared unmounting'
    // }

    signOut = () => {
        firebase.auth().signOut()
    }

    onInputChange = (event) => {
        this.props.setInputValue(event.target.value);
    }

    render () {
        return(
            <div className="navBarBody" >
                <Navbar className='navBar'>
                    <div className={this.state.imageNavInput}>
                        <Link to='/vapa' >
                            <Image 
                                className="navBrandImage" 
                                src={WhiteVapaLogo} alt={'vapa_logo'} 
                            />
                        </Link>

                        <Nav  className={this.state.navbarNav} >
                
                            <Link  to='/vapa' className={this.state.navbarNavLink} >
                                Main
                            </Link>

                            <Link  to='/catalog' className={this.state.navbarNavLink} >
                                Catalog
                            </Link>

                            <Link  to='/aboutVapa' className={this.state.navbarNavLink} >
                                About Vapa
                            </Link>
                                        
                            <Link to='/contacts' className={this.state.navbarNavLink} >
                                Contacts
                            </Link>
                    
                            <Link to='/partners' className={this.state.navbarNavLink} >
                                Partners
                            </Link>

                            <Link  to='/certificate' className={this.state.navbarNavLink} >
                                Сertificate
                            </Link>
                    
                            {/* <Link to='/paymentAndDelivery' className='navLink' >
                                Payment and delivery
                            </Link> */}

                            <input
                                autoFocus={this.state.inputAutoFocus}
                                type="text" 
                                placeholder="Search" 
                                className={this.state.searchInputClass}
                                value={this.props.searchInput}
                                onChange={this.onInputChange} 
                            />
                        </Nav>
                    </div>

                    
                    <div className="icons" >

                        <img
                            className={this.state.searchIconClass}
                            src={this.state.searchIcon}
                            alt='search icon'
                            onClick={this.changeInputClass}
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

                <div className='burgerBar' >

                    <div className={this.state.searchInputMobileClass} > 
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className='openedSearchInput'
                            value={this.props.searchInput}
                            onChange={this.onInputChange} 
                        />
                            
                        <img
                            className='closeInputMobile'
                            src={closeInput}
                            alt='search icon'
                            onClick={this.changeInputClassMobile}
                        />
                    </div>

                    <div className={this.state.burgerBarNavClass} >
                        <Link to='/vapa' >
                            <Image 
                                onClick={() => this.closeBurger()}
                                className="navBrandImage" 
                                src={WhiteVapaLogo} alt={'vapa_logo'} 
                            />
                        </Link>

                        <div className="icons" >
                            
                            <img
                                className='searchIcon'
                                src={SearchIcon}
                                alt='search icon'
                                onClick={this.changeInputClassMobile}
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
                                                onClick={() => this.closeBurger()}
                                                />
                                                :
                                                <img
                                                className="profileIcon"
                                                src={UserIcon}
                                                onClick={() => this.closeBurger()}
                                                />
                                            }
                                            
                                        </Link>
                                    )
                                } 
                                }
                            </Auth>

                            <ShoppingCard />
                            
                        </div>

                        <Image onClick={() =>  this.changeBurgerMenu()} src={this.state.burgerMenu} className="burger" alt='burger open'>
                        </Image>
                    </div>

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

const mapStateToProps = (state) => ({
    searchInput: state.products.searchInput,
})


const mapDispatchToProps = {
    setInputValue,
    cleanInputValue
}

export default connect(mapStateToProps, mapDispatchToProps) (NavBar);