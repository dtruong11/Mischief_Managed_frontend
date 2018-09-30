// import { Card, CardTitle } from 'react-materialize'
// import React from 'react';
// import '../styles/InfoCardMap.css'

// const InfoCard = (props) => {
//     console.log('this props inside InfoCard', props)
//     const { image_url, title, description, min_age, max_age, start_date, end_date } = props.event
//     return (
//         <Card className='small smaller'
//             header={<CardTitle image={image_url}>{title}</CardTitle>}
//             actions={[<a href='#'>Check out this event!</a>]}>
//             {description}
//         </Card>
//     )
// }

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import '../styles/InfoCardMap.css'


const styles = {
  card: {
    maxWidth: 200,
  },
  media: {
    height: 140,
  }
};

function MediaCard(props) {
const { image_url, title, description, min_age, max_age, start_date, end_date } = props.event

  const { classes } = props;
  return (
    <Card className={classes.card} style={{height: '40%'}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image_url}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h5">
            {title}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);