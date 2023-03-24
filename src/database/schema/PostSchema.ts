import { tableSchema } from '@nozbe/watermelondb'

const postSchema = tableSchema({
  name: 'posts',
  columns: [
    {
      name: 'post_id',
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

export { postSchema }
