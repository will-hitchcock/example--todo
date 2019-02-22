import { curry } from 'lodash/fp';

export default curry((unit, { padding }) => ({ padding: `${padding}${unit}` }));
