import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeCard, toggleFavCard } from '../../redux/cardsRedux'

const Card = props => {

    const dispatch = useDispatch();

    const toggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleFavCard({id: props.id, isFavorite: props.isFavorite}))
    }

    const deleteCard = e => {
        e.preventDefault();
        dispatch(removeCard({id: props.id}));
    }

    return (
        <li className={styles.card}>{props.title}
        <div>
            <button className={styles.button} onClick={toggleFavorite}>
                <span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)}></span>
            </button>
            <button className={styles.button} onClick={deleteCard}>
                <span className='fa fa-trash'></span>
            </button>
        </div>
        </li>
    );
};

export default Card;