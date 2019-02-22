import { compose } from 'recompose';
import withStyles from './withStyles';

export default compose(
  withStyles({
    fontSize: '18px',
    display: 'inline-flex',
    border: 'none',
    color: '#333',
    background: 'transparent',
    borderBottom: '1px solid #00000087',
    padding: '5px 2px 0 2px',
    '&:focus': {
      outline: 'none',
      borderColor: 'palevioletred',
    }
  })
)('input')
