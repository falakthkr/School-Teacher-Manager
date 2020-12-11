import React from 'react'
import { Route } from "react-router-dom"
import Home from "../Components/Home"
import Edit from '../Components/Teacher'


export default function Routes() {
    return (
        <>
            <Route path="/home" exact component={Home} />
            <Route path="/:id" render={(props)=><Edit {...props} />} />
        </>
    )
}