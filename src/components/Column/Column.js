import styles from './Column.module.scss'
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {

    const searchString = useSelector(state => state.searchString)

    const cards = useSelector(state => state.cards)
        .filter(card => card.columnId === props.id)
        .filter(card => card.title.toLowerCase().includes(searchString.toLowerCase()));

        return (
        <div className={styles.column}>
            <h2 className={styles.title}>
            <span className={styles.icon + ' fa fa-' + props.icon} />
            {props.title}</h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id}/>)}
            </ul>
            <CardForm columnId={props.id} />
        </div>
    );
};

export default Column;