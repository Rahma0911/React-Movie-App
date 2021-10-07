import {Card , Button} from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';

function MovieCard({el}) {
    return(
        <div key={el.id} className="movie">
            <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={el.posterURL} />
            <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                {el.description}
                </Card.Text>
                <ReactStars
                    size={24}
                    activeColor="#ffd700"
                    value={el.rating}
                    edit={false}
                />
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
    );

}
export default MovieCard;