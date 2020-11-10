import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    }
}));
const Listing = ({listing}) => {
    const classes = useStyles();
    let history = useHistory();
    const handleDetailPage = (id) => {
        history.push(`/episode-details/${id}`);
    }
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {
                    listing.length > 0 ?
                        listing.map((data, index) => {
                            let img = "https://source.unsplash.com/random"
                            if (data.image !== null) {
                                img = data.image.medium;
                            }
                            return (
                                <Grid item key={index} xs={12} sm={6} md={4}>
                                    <Card className={classes.card} onClick={() => handleDetailPage(data.id)}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={img}
                                            title="Image title"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {data.name}
                                            </Typography>
                                            <Typography>
                                                {data.summary !== null ? data.summary.replace(/<\/?[^>]+(>|$)/g, "") :""}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                View
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                        :
                        <Typography variant="h6" color="inherit" noWrap>
                            No Episodes Found!!!!
                    </Typography>
                }
            </Grid>
        </Container>
    )

}
export default Listing;