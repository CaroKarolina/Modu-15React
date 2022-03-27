import styles from './Column.module.scss'

const Column = props => {
    return (
        <div className={styles.column}>
            {/* <span className={styles.icon + ' fa fa-' + props.icon} /> */}
            <h2 className={styles.title}>
            <span className={styles.icon + ' fa fa-' + props.icon} />
            {props.title}</h2>
        </div>
    );
};

export default Column;