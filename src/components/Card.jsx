import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const MediaCard = ({ title, imageUrl, description ,rating , price }) => {
  return (
    <Card sx={{ maxWidth: 345 , margin: 2}} >
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${price}
        </Typography>
      </CardContent>
      
      <CardActions>
        <Link to="/detailpage"><Button size="md">See More</Button></Link>
        <Link to="/checkout"><Button size="md">Check</Button></Link>
      </CardActions>
    </Card>
  );
}
MediaCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
export default MediaCard;
