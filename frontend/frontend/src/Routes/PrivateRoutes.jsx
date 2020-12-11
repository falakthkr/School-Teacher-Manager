import React from "react"
import {Redirect,Route} from "react-router-dom"
import {connect} from "react-redux"
import Home from "../Components/Home"
import Edit from "../Components/Teacher"

class PrivateRoutes extends React.Component{
    render(){
        const{isAuth} = this.props
        if(isAuth){
            console.log(isAuth)
            return(
                <>
                    <Route exact path="/home" render={()=><Home />} />
                    <Route path=":/id" render={(props)=><Edit {...props} />} />
                </>
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