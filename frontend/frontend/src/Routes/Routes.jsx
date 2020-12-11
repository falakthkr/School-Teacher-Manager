import React from 'react'
import { Route } from "react-router-dom"
import Home from "../Components/Home"


export default function Routes() {
    return (
        <>
           
            {/* <Route path="/" exact component={Navbar} />  */}
            <Route path="/login" exact component={Home} />
        </>
    )
}