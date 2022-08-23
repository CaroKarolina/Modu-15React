import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';


const Favorite = () => {

    const favoriteCards = useSelector(state => getFavoriteCards(state))

    return (
        <div className={styles.favorite}>
            <h1 className={styles.title}>Favorite</h1>
            <p className={styles.subtitle}>My favorites</p>
            <ul className={styles.cards}>
                {favoriteCards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} /> )}
            </ul>
        </div>
    );
};

export default Favorite;