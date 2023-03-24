import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

class CommentModel extends Model {
  static table = 'comments'

  @field('comment_id')
  comment_id!: string

  @field('title')
  title!: string

  @field('body')
  body!: string
}

export { CommentModel }
