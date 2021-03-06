import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {

    const [searchString, setSearchString ] = useState('');
    
    const dispatch = useDispatch();
    
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchString });
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSearch}>
            <TextInput placeholder="Search..." value={searchString} onChange={e => setSearchString(e.target.value)} />
            <Button><span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;