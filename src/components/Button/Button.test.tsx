import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button.tsx', () => {
  test('basic rendering', () => {
    render(<Button type="primary">button</Button>)

    console.log(screen)
  })
})
