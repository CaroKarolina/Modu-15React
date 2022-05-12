import styles from './Favorite.module.scss';

const Favorite = () => {
    
    return (
        <div className={styles.favorite}>
            <h1 className={styles.title}>Favorite</h1>
            <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
        </div>
    );
};

export default Favorite;