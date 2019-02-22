import styled from 'styled-components'
import { curry, isFunction } from 'lodash/fp'

export default curry((style, Component) => styled(Component)`
  ${() => isFunction(style) ? style : () => style}
`)
