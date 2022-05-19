import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import cardsRedux from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();

    const toggleFavorite = e => {
        e.preventDefault();
        dispatch({ type: 'TOGGLE_CARD_FAVORITE', payload: {id: props.id, isFavorite: props.isFavorite}})
    }

    const deleteCard = e => {
        e.preventDefault();
        dispatch( { type: 'REMOVE_CARD', payload: {id: props.id}});
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

// import { deleteCard, toggleFavorite } from '../../redux/cardsReducer';

//   const toggle = e => {
//     e.preventDefault();
//     dispatch(toggleFavorite({ id: props.id, isFavorite: props.isFavorite }))
//   }

//   const handleDelete = e => {
//     e.preventDefault();
//     dispatch(deleteCard({ id: props.id }))

//   }


//   return (
//     <li className={styles.card}>{props.title}
//       <div>
//         <button onClick={toggle}>
//           <span className={clsx(' fa fa-star-o', props.isFavorite && styles.isFavorite)}></span>
//         </button>
//         <button onClick={handleDelete}>
//           <span className={'fa fa-trash'}></span>
//         </button>
//       </div>
//     </li>
//   );
// };

};

export default Card;