import { compose } from 'recompose';
import withStyles from './withStyles'

export default compose(
  withStyles({
    fontSize: '18px',
    display: 'inline-block',
    borderRadius: '3px',
    padding: '0.5rem 0',
    margin: '0.5rem 1rem',
    width: '11rem',
    background: 'palevioletred',
    color: 'white',
  })
)('button')
