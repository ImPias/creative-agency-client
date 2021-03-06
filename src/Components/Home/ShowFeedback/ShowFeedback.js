import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7)
    },
    root: {
        width: 275,
        height: 275
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
    }
}));

const ShowFeedback = (props) => {
    const classes = useStyles();
    // const {name, comment, company, pic} = props.comment;
    const {review} = props.comment;
    return (
        <main className="d-flex justify-content-center col-md-4">
            <Card className={classes.root} id="card">
                <CardContent>
                    <Avatar alt="Remy Sharp" className={classes.large} style={{margin: "auto"}} /> 
                    <h3 style={{textAlign: "center"}}>{review.name}</h3>
                    <Typography variant="body2" component="p" style={{textAlign: "center"}}>{review.companyName}</Typography><br/>
                    <Typography variant="body2" component="p" style={{textAlign: "center"}}>{review.description}</Typography>
                </CardContent>
            </Card>
        </main>
    );
};

export default ShowFeedback;