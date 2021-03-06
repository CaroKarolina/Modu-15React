import styles from './ColumnForm.module.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {

    const {listId} = useParams();
    const [title, setTitle] = useState(''); 
    const [icon, setIcon] = useState(''); 
    const dispatch = useDispatch();
    console.log('listId', listId)

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', payload: {title, icon, listId}});
        setTitle('');
        setIcon('');
    }

    return (
        <form onSubmit={handleSubmit}>
            Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>);
};

export default ColumnForm;