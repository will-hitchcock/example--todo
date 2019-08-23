import React, { useReducer } from 'react';
import styled from 'styled-components';
import { map } from 'lodash/fp';
import Todo from './Todo'
import Input from './Input'
import Button from './Button'
import { Container, Row } from 'styled-shoelaces';
import { reducer, initialState, ADD_TODO, UPDATE_DRAFT, TOGGLE_STATUS } from '../ducks/todo/reducers';

const Ul = styled.ul`
  width: 100%;
  padding: 0;
  margin: 10px;
  
`;

const AppContainer = styled(Container)`
  boxShadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 20px;
  margin: 30vh auto;
  max-width: 500px;
`;

const TodoList = ({ className }) => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  debugger;
  const addTodo = (name) => () => dispatch({ type: ADD_TODO, name });
  const updateDraft = (e) => dispatch({ type: UPDATE_DRAFT, draft: e.target.value });
  const toggleStatus = (idToUpdate, done) => () => dispatch({ type: TOGGLE_STATUS, idToUpdate, done });
    
  return (
    <AppContainer className={className}>
      <Row justifyContent="around">
        <Ul>
          {map(({ name, id, done, ...props }) => (
          <Todo key={id} id={id} done={done} toggleStatus={toggleStatus(id, !done)} {...props}>{name}</Todo>
          ), todos.list)}
        </Ul>
      </Row>
      <Row justifyContent="around" alignItems="center" >
        <Input value={todos.draft} onChange={updateDraft} placeholder="Type a todo to add" /> 
        <Button onClick={addTodo(todos.draft)}>Add todo</Button>
      </Row>
    </AppContainer>
  );
}

export default TodoList;
