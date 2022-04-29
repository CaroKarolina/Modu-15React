import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const ColumnForm = props => {

    const [title, setTitle] = useState('');
    
    const [icon, setIcon] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon});
        setTitle('');
        setIcon('');
    }
	
    return (
        // <form onSubmit={handleSubmit} className={styles.columnForm}>
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            Title: <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Icon: <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>);
}
    const TextInput = (props) => {
    return <input className={styles.input} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text" />
};

export default ColumnForm;