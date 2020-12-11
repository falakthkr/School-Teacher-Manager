import React from "react"
import {Redirect,Route} from "react-router-dom"
import {connect} from "react-redux"
import Home from "../Components/Home"

class PrivateRoutes extends React.Component{
    render(){
        const{isAuth} = this.props
        if(isAuth){
            console.log(isAuth)
            return(
                <Route path="/home" exact component={Home} />
            )
        }
        else{
            alert("Login")
            return <Redirect to ="/" />
        }
    }
}

const mapStateToProps = state => ({
    isAuth : state.isAuth
})

export default connect(
    mapStateToProps,
    null
)(PrivateRoutes)