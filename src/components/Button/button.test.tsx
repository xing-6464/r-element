// import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Button from './button'

describe('test button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const el = wrapper.queryByText('Nice')

    expect(el).toBeInTheDocument()
    expect(el?.tagName).toEqual('BUTTON')
    expect(el).toHaveClass('btn btn-default')
  })

  it('should render the correct component based on different props', () => {})

  it('should render a link when btnType equals link and href is provided', () => {})

  it('should render disabled button when disabled set to true', () => {})
})
