import { appSchema } from '@nozbe/watermelondb'
import { commentSchema } from './CommentSchema'
import { postSchema } from './PostSchema'

const schemas = appSchema({
  version: 2,
  tables: [postSchema, commentSchema],
})

export { schemas }
