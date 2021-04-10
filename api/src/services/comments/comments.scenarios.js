// api/src/services/comments/comments.scenarios.js

export const standard = defineScenario({
  comment: {
    jane: {
      name: 'Jane Doe',
      body: 'I like trees',
      post: {
        create: {
          title: 'Redwood Leaves',
          body: 'The quick brown fox jumped over the lazy dog.',
        },
      },
    },
    john: {
      name: 'John Doe',
      body: 'Hug a tree today',
      post: {
        create: {
          title: 'Root Systems',
          body: 'The five boxing wizards jump quickly.',
        },
      },
    },
  },
})

export const postOnly = defineScenario({
  post: {
    bark: {
      title: 'Bark',
      body: "A tree's bark is worse than its bite",
    },
  },
})
