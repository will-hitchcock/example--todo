import {concat, uniqueId, map, merge, flow, set, get, curry, findIndex } from 'lodash/fp';

import { ADD_TODO, UPDATE_DRAFT, TOGGLE_STATUS } from './actions'

const initialState = {
  list: [],
  draft: '',
}

const newTodo = (name) => ({ name, id: uniqueId(), done: false, });
const updateAt = curry((path, func, item, obj) => set(path, func(get(path, obj), item), obj));
const concatTo = curry((path, item, obj) => updateAt(path, concat, item, obj));

const toggleStatus = curry((done, idToUpdate, state) => set(
  ['list', findIndex(({ id }) => console.log(id) || (id === idToUpdate), get('list', state)), 'done'],
  done,
  state,
))
const updateDraft = set('draft')
const addTodo = curry((name, state) => flow(
  concatTo('list', newTodo(name)),
  updateDraft(''),
)(state))

export const reducer = (state = initialState, { type, draft, name, idToUpdate, done } = {}) => {
  console.log(state, { type, draft, name, idToUpdate, done });
  switch(type) {
    case ADD_TODO:
      return addTodo(name, state);
    case UPDATE_DRAFT:
      return updateDraft(draft, state);
    case TOGGLE_STATUS:
      return toggleStatus(done, idToUpdate, state);
    default:
      return state;
  }
}
