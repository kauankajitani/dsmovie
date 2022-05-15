import { ReactComponent as StarEmpty } from 'C:/Projetos/dsmovies/frontend/src/assets/img/star-empty.svg'
import { ReactComponent as StarFull } from 'C:/Projetos/dsmovies/frontend/src/assets/img/star-full.svg'
import { ReactComponent as StarHalf } from 'C:/Projetos/dsmovies/frontend/src/assets/img/star-half.svg'
import './style.css'

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    )
}
export default MovieStars;