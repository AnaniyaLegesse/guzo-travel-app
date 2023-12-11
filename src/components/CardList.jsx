
import Card from './Card';
import PropTypes from 'prop-types';




const CardList = ({tourData}) => {
  return (
    <>
     
     { tourData.map((tour, index) => (
        <Card
          key={index}
          title={tour.name}
          imageUrl={tour.img}
          description={tour.info}
          rating={tour.rating}
          price={tour.price}
        />
      ))}
    </>
     
    
  );
};


CardList.propTypes = {
    tourData: PropTypes.object.isRequired,
   
  };
 

export default CardList;
