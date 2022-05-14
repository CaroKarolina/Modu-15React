import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById } from '../../redux/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

const List = () => {

    const { listId } = useParams();
    const columns = useSelector(state => getColumnsByList(state, listId));
    const listData = useSelector(state => getListById(state, listId));
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('')
    // const dispatch = useDispatch();
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     dispatch({ type: 'RENDER_LIST', payload: {title, description } });
    //     setTitle('');
    //     setDescription('');
    // }

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}</h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} {...column} />)}
            </section>
            <ColumnForm />
        </div>
        // <div className={styles.list} onSubmit={handleSubmit}>
        //     <header className={styles.header}>
        //         {/* <p className={styles.title} value={title} onChange={e => setTitle(e.target.value)} /> */}
        //         <h2 className={styles.title} value={title} onChange={e => setTitle(e.target.value)}> </h2>
        //     </header>
        //     <p className={styles.description} value={description} onChange={e => setDescription(e.target.value)}></p>
        //     <SearchForm />  
        //         <section className={styles.columns}>
        //             {columns.map(column => (
        //             <Column key={column.id} 
        //             {...column} />
        //             ))}
        //         </section>
        //     <ColumnForm />
        // </div>
    );
}

export default List;