import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import store from './../store'

/* 
后台管理的路由页面 
*/
export default class Course extends Component {
    constructor(props,context){
        super(props,context);
        console.log('context',store.getState())
        this.state = {
            route: props.route,
        }

    }
    render() {
        const route = this.state.route
        return ( <div>
            {renderRoutes(route.children)}
            <div>
                <ul>
                    <li>
                        <Link to="/advantage/advantage1">advantage1</Link>
                    </li>
                    <li>
                        <Link to="/advantage/advantage2">advantage2</Link>
                    </li>
                    <li>
                        <Link to="/advantage/advantage3">advantage3</Link>
                    </li>
                </ul>
            </div>
        </div>     
        )
    }
}
