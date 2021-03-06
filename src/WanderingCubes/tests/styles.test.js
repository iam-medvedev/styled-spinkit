// @flow
import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import 'jest-styled-components'
import { Child, StyledWanderingCubes } from '../styles'

test('render Child', () => {
  const wrapper = shallow(<Child />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('render', () => {
  const wrapper = shallow(<StyledWanderingCubes size={40} color={'#333'} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
