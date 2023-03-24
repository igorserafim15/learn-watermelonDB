import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { schemas } from './schema'
import { CommentModel } from './models/CommentModel'
import { PostModel } from './models/PostModel'

const adapter = new SQLiteAdapter({
  schema: schemas,
})

export const database = new Database({
  adapter,
  modelClasses: [PostModel, CommentModel],
})
