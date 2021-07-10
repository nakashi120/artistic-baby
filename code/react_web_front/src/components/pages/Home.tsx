/* eslint-disable react-hooks/exhaustive-deps */
import { Wrap, WrapItem } from "@chakra-ui/react"
import { memo, useEffect, VFC } from "react"
import { useAllPosts } from "../../hooks/useAllPosts"
import { useAllProfiles } from "../../hooks/useAllProfiles"
import { useLoginUser } from "../../hooks/useLoginUser"
import { PostCard } from "../organisms/post/PostCard"

export const Home: VFC = memo(() => {
  const { getPosts, posts } = useAllPosts()
  const { getAllProfiles, profiles } = useAllProfiles()
  const { loginUser, getLoginUserInfo } = useLoginUser()

  useEffect(() => getPosts(), [])
  useEffect(() => getAllProfiles(), [])
  useEffect(() => getLoginUserInfo(), [])

  return (
    <>
      <Wrap p={{ base: 4, md: 10 }}>
        {posts.map((post) => (
          <WrapItem key={post.id} mx="auto">
            <PostCard
              myProfileId={loginUser!.id}
              profiles={profiles!}
              userPost={post.user_post}
              liked={post.liked}
              postImageSrc={post.img}
              title={post.title}
            />
          </WrapItem>
        ))}
      </Wrap>
    </>
  )
})
