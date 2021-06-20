import { Wrap, WrapItem } from "@chakra-ui/react"
import { memo, VFC } from "react"

import { PostCard } from "../organisms/post/PostCard"

export const Home: VFC = memo(() => {
  return (
    <>
      <Wrap p={{ base: 4, md: 10 }}>
        {[...Array(10)].map(() => (
          <WrapItem>
            <PostCard
              avatarName="Nakashi"
              avatarImageSrc="https://bit.ly/dan-abramov"
              postImageSrc="https://source.unsplash.com/random"
            />
          </WrapItem>
        ))}
      </Wrap>
    </>
  )
})
