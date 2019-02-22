import { curry } from 'lodash/fp';

export default curry((margin = 4, props) => ({ margin: `${margin}px` }));