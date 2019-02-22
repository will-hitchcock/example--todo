import React from 'react';
import { compose, withHandlers } from 'recompose';
import withStyles from './withStyles';
import { Row } from 'styled-shoelaces';

export default compose(
  withStyles(({ done }) => ({
    textDecoration: done ? 'line-through' : 'none',
    padding: '15px',
    listStyle: 'none',
    margin: '5px',
    display: 'flex',
    cursor: 'pointer',
    border: '1px solid #DB7093CC',
    borderRadius: '5px',
    '&:hover': {
      background: '#DB7093CC',
      color: 'white',
    },
  })),
  withHandlers({
    onClick: ({ done, toggleStatus }) => () => toggleStatus(!done)
  }),
)(({ children, className, done, onClick }) => (
  <Row className={className} onClick={onClick} >
    <span>{children}</span>
  </Row>
))

