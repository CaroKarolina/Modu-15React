import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const CardForm = props => {

    const [title, setTitle] = useState('');
    
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: {title, columnId:props.columnId} });
        console.log('co sie dzieje', handleSubmit)
        // props.action({ title: title }, props.columnId);
        setTitle('');
    };

	return (        
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput type='text' value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>);
};

export default CardForm;