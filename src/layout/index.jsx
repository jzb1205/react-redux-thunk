
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';

import Header from './../components/Header'

const Layout = ()=>{
    return (
        <div className={"view-container"}>
            <div className={'main-header-box'}></div>
            <Header/>
            {/* {renderRoutes(routes)} */}
        </div>
    )
}

export default Layout