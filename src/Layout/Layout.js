import React from 'react';
import NavBar from '../Component/NavBar/NavBar';
import Spinner from '../Component/Spinner/Spinner'
const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Spinner/>
            <NavBar/>
            {children}
        </React.Fragment>
    )
};

export default Layout;