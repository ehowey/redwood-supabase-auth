import { render } from '@redwoodjs/testing'

import CommentForm from './CommentForm'

describe('CommentForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentForm />)
    }).not.toThrow()
  })
})
