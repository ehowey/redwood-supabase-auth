// web/src/components/CommentsCell/CommentsCell.mock.js

export const standard = (/* vars, { ctx, req } */) => ({
  comments: [
    {
      id: 1,
      postId: 1,
      name: 'Rob Cameron',
      body: 'First comment',
      createdAt: '2020-01-02T12:34:56Z',
    },
    {
      id: 2,
      postId: 1,
      name: 'David Price',
      body: 'Second comment',
      createdAt: '2020-02-03T23:00:00Z',
    },
  ],
})
