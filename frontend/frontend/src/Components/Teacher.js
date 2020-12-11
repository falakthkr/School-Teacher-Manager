import React from "react"
import axios from "axios"
import {Redirect} from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PublishIcon from '@material-ui/icons/Publish';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    }
}));

class Edit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
			email: '',
			avatar: '',
			gender: '',
			age:"",
            status : false,
            data : []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/teachers").then(res=>{
            this.setState({
                data:res.data
            })
        })        
    }

    // editCity = (id) => {
    //     axios.post("http://localhost:5000/api/student/update/"+id,{
    //         name : this.state.name,
    //         email : this.state.email,
    //         avatar : this.state.avatar,
    //         city : this.state.city,
    //         group : this.state.group
    //     })
    //     .then(res=>console.log(res))        
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = (id) => {
        this.editCity(id)
        this.setState({
            status : true
        })
    }

    render(){
        const {classes} = this.props
        const {data,email,avatar} = this.state
        const {handleChange} = this
        const {id} = this.props.match.params
        const{status} = this.state
        if(status) {
            return <Redirect to="/home" />
        }
        return(
            <div justify="center">
                {data.map((item)=>{
                    if(id == item.id){
                        return(
                            <div key = {item.id}>
                            <h1>Update {`${item.first_name} ${item.last_name}`}'s Information</h1>
                                <TextField style={{"margin":"5px"}} onChange={handleChange} name="email" value={email} id="outlined-basic" label={`${item.email}`} variant="outlined" />
                                <br />
                                <TextField style={{"margin":"5px"}} onChange={handleChange} name="avatar" value={avatar} id="outlined-basic" label="Enter Avatar URL" variant="outlined" /> 
                                <br />
                                <Button
                                    style={{"margin":"5px"}}
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<PublishIcon />}
                                    onClick={() =>this.handleClick(item.id)}
                                >
                                    Update
                                </Button>   
                            </div>
                            
                        )
                    }
                })}
            </div>
        )
    }
}

export default withStyles(useStyles)(Edit);
