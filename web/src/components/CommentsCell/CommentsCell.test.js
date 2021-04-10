import { render, screen } from '@redwoodjs/testing'
import { Loading, Empty, Failure, Success } from './CommentsCell'
import { standard } from './CommentsCell.mock'

describe('CommentsCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  test('Empty renders a "no comments" message', () => {
    render(<Empty />)
    expect(screen.getByText('No comments yet')).toBeInTheDocument()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  //   expect(screen.getByText('Hello, world')).toBeInTheDocument()

  test('Success renders successfully', async () => {
    const comments = standard().comments
    render(<Success comments={comments} />)

    comments.forEach((comment) => {
      expect(screen.getByText(comment.body)).toBeInTheDocument()
    })
  })
})
