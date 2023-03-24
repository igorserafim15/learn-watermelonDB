import { tableSchema } from '@nozbe/watermelondb'

const commentSchema = tableSchema({
  name: 'comments',
  columns: [
    {
      name: 'comment_id',
      type: 'string',
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'body',
      type: 'string',
    },
  ],
})

export { commentSchema }
