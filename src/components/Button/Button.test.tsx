import { describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'
const fn = vi.fn()

describe('Button.tsx', () => {
  test('basic rendering', () => {
    render(
      <Button type="primary" onClick={fn}>
        button
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button.className).toContain('x-button--primary')

    expect(button.textContent).toBe('button')

    fireEvent.click(button)
    expect(fn).toHaveBeenCalledOnce()
  })

  test('disabled button', () => {
    fn.mockClear()
    render(
      <Button type="primary" onClick={fn} disabled>
        button
      </Button>,
    )

    const button = screen.getByRole('button') as HTMLButtonElement
    expect(button.disabled).toBeTruthy()

    fireEvent.click(button)
    expect(fn).not.toHaveBeenCalled()
  })
})
