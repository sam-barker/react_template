/*
  global describe,
  global it,
  global shallow,
  global expect
*/

import React from 'react'
import App from '../../src/app'

describe('<App> Component', () => {
  it('should render the app', () => {
    const wrapper = shallow(
      <App />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
