import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Service.css';

const useStyles = makeStyles( theme => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    root: {
        width: 275,
        height: 200
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    },
}));

const Service = (props) => {
    const classes = useStyles();
    const { title, image } = props.list;

    return (
        <main className="d-flex justify-content-center col-md-4 col-sm-3">
            <Link to={"/dashboard/order/"} style={{textDecoration: 'none'}}>
            <Card className={classes.root} id="card">
                <CardContent>
                    <Avatar alt="Remy Sharp" src={`data:image/png;base64,${image.img}`} className={classes.large} style={{margin: "auto"}} /> 
                    <h3 style={{textAlign:"center"}}>{title}</h3>
                </CardContent>
            </Card>
            </Link>
        </main>
    );
};

export default Service;