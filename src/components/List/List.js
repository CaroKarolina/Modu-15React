import Column from '../Column/Column';
import styles from './List.module.scss';

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>Things to do 
                    <span className={styles.span}>soon!</span>
                </h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
            <Column title="Books" />
            <Column title="Movies" />
            <Column title="Games" />
            {/* <span className={styles.icon + ' fa fa-' + props.icon} /> */}
            </section>
        </div>
    );
};

export default List;