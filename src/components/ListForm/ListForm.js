import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ListForm = props => {

    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState(''); 
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_LIST', payload: {title, description}});
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
            Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            Description: <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>);
};

export default ListForm;