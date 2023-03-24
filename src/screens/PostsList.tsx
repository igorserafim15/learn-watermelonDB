import { database } from '@database/index'
import { PostModel } from '@database/models/PostModel'
import withObservables from '@nozbe/with-observables'
import { FlatList, Text, View } from 'native-base'

interface PostsListProps {
  posts: PostModel[]
}

function PostsList({ posts }: PostsListProps) {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <View backgroundColor="#cfeef6" padding={2} marginBottom={2}>
          <Text fontSize={18} fontWeight="bold">
            {item.title}
          </Text>
          <Text>{item.body}</Text>
        </View>
      )}
    />
  )
}

const collection = database.collections.get<PostModel>('posts')
const observePosts = () => collection.query().observe()

const enhanceWithPosts = withObservables([], () => ({
  posts: observePosts(),
}))
const PostsListRender = enhanceWithPosts(PostsList)

export { PostsListRender }
