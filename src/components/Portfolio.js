import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";
import Navbar from './Navbar';
import project1 from "../images/coolcontemp.jpg";
import project2 from "../images/new comtempt.jpg";

const useStyles =makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    CardContainer: {
        maxWidth: 345,
        
        margin: "5rem auto"
    }
});

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
        <Navbar/>
        <Grid container justify="center">
            {}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.CardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project1}
                    />
                        
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                         Project 1
                        </Typography>
                        <Typography  variant="body2" color="textSecondary" component="p">
                         Loren ipsum 30
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                           Share 
                        </Button>
                        <Button size="small" color="primary">
                           Live 
                        </Button>
                    </CardActions>

                

            </Card>
            </Grid>
            {}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.CardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project 2"
                    height="140"
                    image={project2}
                    />
                        
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                         Project 2
                        </Typography>
                        <Typography  variant="body2" color="textSecondary" component="p">
                         Loren ipsum 40
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                           Share 
                        </Button>
                        <Button size="small" color="primary">
                           Live 
                        </Button>
                    </CardActions>

                

            </Card>
        </Grid>
        {}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.CardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project 3"
                    height="140"
                    image={project2}
                    />
                        
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                         Project 3
                        </Typography>
                        <Typography  variant="body2" color="textSecondary" component="p">
                         Loren ipsum 50
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                           Share 
                        </Button>
                        <Button size="small" color="primary">
                           Live 
                        </Button>
                    </CardActions>

                

            </Card>
        </Grid>
        {}
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.CardContainer}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Project 6"
                    height="140"
                    image={project2}
                    />
                        
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                         Project 4
                        </Typography>
                        <Typography  variant="body2" color="textSecondary" component="p">
                         Loren ipsum 60
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                           Share 
                        </Button>
                        <Button size="small" color="primary">
                           Live 
                        </Button>
                    </CardActions>

                

            </Card>
        </Grid>
        </Grid>
        </Box>
    );
};

export default Portfolio;