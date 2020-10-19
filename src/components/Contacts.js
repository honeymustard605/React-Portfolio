import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import { withStyles } from '@material-ui/styles';
import  FormRequest  from "../FormRequest/FormRequest";


const useStyles = makeStyles(theme=>({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    button:{
        marginTop: "1rem",
        color:"tomato",
        bordercolor: "tomato"
    }
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label":{
          color: "tan",
        },
        "& label.MuiOutlinedInput-root" : {
            "& fieldset" : {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan",
            },
            "&.Mui-focused fieldset" : {
                borderColor: "tan",
            },
        },
    },
})(TextField);


// class AllowanceClass extends Component{
//     ...
//     render() {
//         const classes = this.props.classes;
//         ...
//     }
// }
// export default () => {
//     const classes = useStyles();
//     return (
//         <AllowanceClass classes={classes} />
//     )
// }
    

    const Contacts = () => {

    const classes = useStyles()

    return (
        
            <Box component = "div" style={{background: "#233", height: "100vh" }}>
                <Navbar />
                
                <Grid container justify="center">
                
                    <Box component="form" className={classes.form} onSubmit={FormRequest.submitRequest()}>
                        
                        <Typography variant="h5" style={{color: "tomato", textAlign: "center", textTransform: "uppercase"}}>
                        hire or contact me
                        </Typography>
                        {/* <InputField fullWidth={true} label="Name" variant="outlined" inputProps={{ style: { color:"white" } }} margin="dense" size="medium"/> */}
                        <br/>
                        <InputField onChange={e => FormRequest.setEmail(e.target.value)} value={FormRequest.email} fullWidth={true} label="Email" variant="outlined" inputProps={{ style: { color:"white" } }} margin="dense" size="medium"/>
                        <br/>
                        <InputField onChange={e => FormRequest.setMessage(e.target.value)} value={FormRequest.message} fullWidth={true} label="Company name" variant="outlined" inputProps={{ style: { color:"white" } }} margin="dense" size="medium" />
                        <br/>
                        <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
                            contact me
                        </Button>
                        
                    </Box>
                
            </Grid>
            
            </Box>
        
    );
    };


export default Contacts;
