import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsByLists, getListById } from '../../redux/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

const List = () => {

    const { listId } = useParams();

    const columns = useSelector(state => getColumnsByLists(state, listId))

    const listData = useSelector(state => getListById(state, listId))

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
        // <div className={styles.list} onSubmit={handleSubmit}>
        //     <header className={styles.header}>
        //         <p className={styles.title} value={title} onChange={e => setTitle(e.target.value)} />
        //     </header>
        //     <p className={styles.description} value={description} onChange={e => setDescription(e.target.value)} />
        //     <section className={styles.columns}>
        //         {columns.map(column => 
        //             <Column
        //             key={column.id} 
        //             {...column} />
        //         )}
        //     </section>
        //     <ColumnForm />
        // </div>
        <div className={styles.list}>
            <header className={styles.header}>
                {/* <h2 className={styles.title}>{listData.title}<span></span></h2> */}
            </header>
            {/* <SearchForm /> */}
            {/* <p className={styles.description}>{listData.description}</p> */}
            <section className={styles.columns}>
            {columns.map(column =>
                <Column
                key={column.id}
                {...column} />
            )}
            </section>
            <ColumnForm listId={listId} />
        </div>
        );
    ;}
export default List;