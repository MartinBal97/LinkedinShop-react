import Rating from '../Rating/Rating'
import './UserCard.css'


const style = {
    display: 'flex'
}

export default function UserCard(props) {

    return (
        <>
            <div className="persons">
                <h3 className="name">{props.person.name}</h3>
                <div style={style} className="rating">
                    <Rating rating={props.person.rating}/> 
                </div>
                <p className="gender">{props.person.gender}</p>
                <h4 className="job">{props.person.job}</h4>
                <p className="city">{props.person.city}</p>
            </div>
        </>
    )
}

