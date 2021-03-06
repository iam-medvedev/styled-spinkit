// @flow
import * as React from 'react'
import roundTo from 'round-to'
import { Child, StyledWanderingCubes } from './styles'

type Props = {
  size: number,
  color: string,
}

class WanderingCubes extends React.PureComponent<Props, void> {
  static defaultProps = {
    color: '#333',
    size: 40,
  }

  static displayName = `__styled-spinkit__WanderingCubes`

  render() {
    const speed = 1.8
    const cubeSize = roundTo(this.props.size / 4, 2) // eslint-disable-line react/prop-types

    return (
      <StyledWanderingCubes speed={speed} {...this.props}>
        <Child delay={speed} size={cubeSize} />
        <Child delay={speed / 2} size={cubeSize} />
      </StyledWanderingCubes>
    )
  }
}

export default WanderingCubes
