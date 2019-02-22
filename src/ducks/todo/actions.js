
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_DRAFT = 'UPDATE_DRAFT';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';

export const addTodo = (name) => ({ type: ADD_TODO, name });
export const updateDraft = (e) => ({ type: UPDATE_DRAFT, draft: e.target.value });
export const toggleStatus = (idToUpdate, done) => ({ type: TOGGLE_STATUS, idToUpdate, done });