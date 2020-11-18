import React, { Component } from 'react'
/* 
后台管理的路由页面 
*/
export default class Admin extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
    }
    render() {
        let num = this.props.match.params.num
        return (
            <div>
                Admin123 {num}
            </div>
        )
    }
}
