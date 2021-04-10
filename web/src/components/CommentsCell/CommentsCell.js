// web/src/components/CommentsCell/CommentsCell.js

import Comment from 'src/components/Comment'

// web/src/components/CommentsCell/CommentsCell.js

export const QUERY = gql`
  query CommentsQuery($postId: Int!) {
    comments(postId: $postId) {
      id
      name
      body
      createdAt
      postId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="text-center text-gray-500">No comments yet</div>
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ comments }) => {
  console.log(comments)
  return (
    <div className="-mt-8">
      {comments.map((comment) => (
        <div key={comment.id} className="mt-8">
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  )
}
