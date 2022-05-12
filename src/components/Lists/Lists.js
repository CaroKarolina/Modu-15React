import styles from './Lists.module.scss';
import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/store';
import { Link } from 'react-router-dom';

const Lists = () => {
 
    // const lists = useSelector(state => getAllLists(state.list));
    // console.log('lists',lists)

    const lists = useSelector(state => state.lists)
    console.log('lists',lists)

    return (
        <section className={styles.lists}>
            <h2 className={styles.heading}>Browse lists</h2>
            {lists.map(list => (
            <Link key={list.id} to="" className={styles.listLink}>
                <h3>{list.title}</h3>
                <p>{list.description}</p>
            </Link>
            ))}
        </section>
    )
};

export default Lists;