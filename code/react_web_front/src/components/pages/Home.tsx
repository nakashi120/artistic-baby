/* eslint-disable react-hooks/exhaustive-deps */
import { Wrap, WrapItem } from "@chakra-ui/react"
import { memo, useContext, useEffect, VFC } from "react"
import { useAllPosts } from "../../hooks/useAllPosts"
import { LoginUserContext } from "../../providers/LoginUserProvider"
import { PostCard } from "../organisms/post/PostCard"

export const Home: VFC = memo(() => {
  const { getPosts, posts } = useAllPosts()
  useEffect(() => getPosts(), [])

  const { loginUser } = useContext(LoginUserContext)

  return (
    <>
      <Wrap p={{ base: 4, md: 10 }}>
        {posts.map((post) => (
          <WrapItem key={post.id} mx="auto">
            <PostCard
              avatarName={post.user_post}
              avatarImageSrc="https://bit.ly/dan-abramov"
              postImageSrc={post.img}
            />
          </WrapItem>
        ))}
      </Wrap>
    </>
  )
})
