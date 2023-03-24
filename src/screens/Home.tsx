import { database } from '@database/index'
import { PostModel } from '@database/models/PostModel'
import { View, Text, Input, Button } from 'native-base'
import { useState } from 'react'
import { generateRandomId } from '@utils/index'
import { PostsListRender } from './PostsList'
import { synchronize } from '@nozbe/watermelondb/sync'
import axios from 'axios'

export function Home() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  async function handleSavePost() {
    await database.write(async () => {
      await database.get<PostModel>('posts').create((data) => {
        data.post_id = generateRandomId()
        data.title = title
        data.body = body
      })
    })
  }

  async function handleSynchronize() {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const response = await axios.get(
          `https://my.backend/sync?${lastPulledAt ?? ''}`,
        )

        if (response.status !== 200) {
          throw new Error('Error') // TODO
        }

        const { changes, latesVersion } = response.data
        return { changes, timestamp: latesVersion }
      },
      pushChanges: async ({ changes }) => {
        const response = await axios.post(`https://my.backend/sync`, changes)
        if (response.status !== 200) {
          throw new Error('Error') // TODO
        }
      },
    })
  }

  return (
    <View margin={5}>
      <Button
        marginBottom={5}
        onPress={handleSynchronize}
        backgroundColor="green.600"
      >
        Sincronizar
      </Button>
      <Text fontSize={20} fontWeight="bold">
        Leia os últimos posts!
      </Text>
      <Input
        placeholder="Titulo"
        marginTop={3}
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <Input
        placeholder="Conteúdo"
        marginTop={2}
        marginBottom={2}
        value={body}
        onChangeText={(value) => setBody(value)}
      />
      <Button onPress={handleSavePost} marginBottom={4}>
        Salvar
      </Button>

      <PostsListRender />
    </View>
  )
}
