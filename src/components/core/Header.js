import React, { Component } from 'react';
import { Navbar, Icon, NavItem, Container } from 'react-materialize';
import '../css/Header.css';
import { firebaseApp } from '../../firebase';

class Header extends Component {
    render () {
        return (
            <div className="custom-nav">
                <Container>
                    <Navbar
                        alignLinks="right"
                        brand={<a className="brand-logo" target="_" href="https://pavanaditya.com">
                            <img src={require('../../assets/images/fb-white-round.png')} alt="logo"
                                style={{ marginTop: '1px' }} height="60px" />
                        </a>}
                        id="mobile-nav"
                        className="nav-row"
                        menuIcon={<Icon>menu</Icon>}
                        options={{
                            draggable: true,
                            edge: 'left',
                            inDuration: 250,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 200,
                            preventScrolling: true
                        }}
                    >
                        {/* <NavItem href="">
                            Search
                        </NavItem> */}
                        <NavItem onClick={() => firebaseApp.auth().signOut()}>
                            Log out
                        </NavItem>
                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default Header;
