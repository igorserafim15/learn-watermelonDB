import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

class PostModel extends Model {
  static table = 'posts'

  @field('post_id')
  post_id!: string

  @field('title')
  title!: string

  @field('body')
  body!: string
}

export { PostModel }
