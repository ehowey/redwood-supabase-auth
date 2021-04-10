// web/src/components/CommentForm/CommentForm.js

import {
  Form,
  FormError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useState } from 'react'
import { QUERY as CommentsQuery } from 'src/components/CommentsCell'

const CREATE = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      name
      body
      createdAt
    }
  }
`

const CommentForm = ({ postId }) => {
  const [hasPosted, setHasPosted] = useState(false)

  const [createComment, { loading, error }] = useMutation(CREATE, {
    onCompleted: () => {
      setHasPosted(true)
    },
    refetchQueries: [{ query: CommentsQuery, variables: { postId } }],
  })

  const onSubmit = (input) => {
    createComment({ variables: { input: { postId, ...input } } })
  }

  return (
    <div className="relative">
      <h3 className="font-light text-lg text-gray-600">Leave a Comment</h3>
      <div
        className={`${
          hasPosted ? 'absolute' : 'hidden'
        } flex items-center justify-center w-full h-full text-lg`}
      >
        <h4 className="text-green-500">Thank you for your comment!</h4>
      </div>
      <Form
        className={`mt-4 w-full ${hasPosted ? 'invisible' : ''}`}
        onSubmit={onSubmit}
      >
        <FormError
          error={error}
          titleClassName="font-semibold"
          wrapperClassName="bg-red-100 text-red-900 text-sm p-3 rounded"
        />
        <Label
          name="name"
          className="block text-xs font-semibold text-gray-500 uppercase"
        >
          Name
        </Label>
        <TextField
          name="name"
          className="block w-full p-1 border rounded text-sm "
          validation={{ required: true }}
        />

        <Label
          name="body"
          className="block mt-4 text-xs font-semibold text-gray-500 uppercase"
        >
          Comment
        </Label>
        <TextAreaField
          name="body"
          className="block w-full p-1 border rounded h-24 text-sm"
          validation={{ required: true }}
        />

        <Submit
          disabled={loading}
          className="block mt-4 bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50"
        >
          Submit
        </Submit>
      </Form>
    </div>
  )
}

export default CommentForm
