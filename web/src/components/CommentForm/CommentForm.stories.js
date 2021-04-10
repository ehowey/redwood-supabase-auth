// web/src/components/CommentForm/CommentForm.stories.js

import CommentForm from './CommentForm'

export const generated = () => {
  mockGraphQLMutation('CreateCommentMutation', (variables, { ctx }) => {
    const id = parseInt(Math.random() * 1000)
    ctx.delay(1000)

    return {
      comment: {
        id,
        name: variables.input.name,
        body: variables.input.body,
        createdAt: new Date().toISOString(),
      },
    }
  })

  return (
    <div className="m-4">
      <CommentForm />
    </div>
  )
}

export default { title: 'Components/CommentForm' }
