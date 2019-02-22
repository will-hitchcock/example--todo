import React from 'react';
import withStyles from './withStyles';
import { map } from 'lodash/fp';
import { compose, withReducer, withHandlers } from 'recompose';
import Todo from './Todo'
import Input from './Input'
import Button from './Button'
import { Container, Row } from 'styled-shoelaces';
import { addTodo, updateDraft, toggleStatus } from '../ducks/todo/actions'
import { reducer} from '../ducks/todo/reducers';

const Ul = compose(
  withStyles({
    width: '100%',
    padding: 0,
    margin: '10px',
  })
)('ul');

export default compose(
  withReducer('todos', 'dispatch', reducer, reducer()),
  withHandlers({
    addTodo: ({ dispatch }) => (data) => () => dispatch(addTodo(data)),
    updateDraft: ({ dispatch }) => (e) => dispatch(updateDraft(e)),
    toggleStatus: ({ dispatch }) => (idToUpdate) => (status) => dispatch(toggleStatus(idToUpdate, status)),
  }),
  withStyles({
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    padding: '20px',
    margin: '30vh auto',
    maxWidth: '500px',
  }),
)(({ todos, addTodo, updateDraft, toggleStatus, className }) => (
  <Container className={className}>
    <Row justifyContent="around">
      <Ul>
        {map(({ name, id, ...props }) => (
          <Todo key={id} id={id} toggleStatus={toggleStatus(id)} {...props}>{name}</Todo>
        ), todos.list)}
      </Ul>
    </Row>
    <Row justifyContent="around" alignItems="center" >
      <Input value={todos.draft} onChange={updateDraft} placeholder="Type a todo to add" /> 
      <Button onClick={addTodo(todos.draft)}>Add todo</Button>
    </Row>
  </Container>
));
