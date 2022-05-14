import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';

//selectors
export const getFilteredCards = (state, columnId) => state.cards
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()));

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ({columns}, columnListId) => columns
  .filter(column => column.listId === columnListId);
  
export const getAllColumns = (state, id) => state.columns
// export const getColumnsByList = ({columns}, columnListId) => columns.filter(column => column.listId === columnListId);
export const getAllLists = (state, id) => state.lists;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }]};
    case 'UPDATE_SEARCHSTRING':
      console.log('update', action.payload)
      return { ...state, searchString: action.payload };
    case 'RENDER_LIST':
      return { lists: [...state.lists, { ...action.payload, id: shortid() }]};
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;