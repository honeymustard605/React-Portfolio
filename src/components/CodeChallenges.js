import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Navbar from "./Navbar";
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography, 
    Modal
} from "@material-ui/core";
import Calcapp from '../components/Calculatorapp/Calcapp';
import project1 from "../images/coolcontemp.jpg";

const useStyles = makeStyles ((theme) => ({

    mainContainer: {
        background: "#233",
        height: "100%"
    },
    CardContainer: {
        maxWidth: 345,
        
        margin: "5rem auto"
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },

}));
const CodeChallenges = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

    const classes = useStyles()

    
    return (
        
        <Box component="div">
            <Navbar/>
            <Grid container justify="center">
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.CardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project1}
                    />
                        
                    <CardContent >
                        <Typography gutterBottom variant="h5">
                         Project 1
                        </Typography>
                        <Typography  variant="body2" color="textSecondary" component="p">
                         Loren ipsum 30
                        </Typography>

                        



                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        
                        <Button onClick={handleOpen} size="small" color="primary">
                           Share 
                        </Button>
                        <Button size="small" color="primary">
                           Live 
                        </Button>
                        
                            <Modal

                                className={classes.modal}
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps= {{
                                  timeout: 500,
                                }}
                            >
                             <Fade in={open}>
                             <div className={classes.paper}>
                                <Calcapp/>
                            </div>
                             </Fade>
                                
                            </Modal>
                        
                    </CardActions>
            
            {/* <Modal>
                <Calcapp/>
            </Modal> */}

            </Card>
           
            </Grid>
            </Grid>
        </Box>


    );


};
export default CodeChallenges
