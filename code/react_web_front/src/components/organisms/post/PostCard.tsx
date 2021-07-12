/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import { memo, useEffect, VFC } from "react"
import { useMyProfile } from "../../../hooks/useMyProfile"
import { useProfile } from "../../../hooks/useProfile"
import { Comment } from "../../../types/comment/comment"
import { Profile } from "../../../types/user/profile"
import { LikeButtonWithCount } from "../../atoms/button/LikeButtonWithCount"
import { AvatarAndName } from "../../molecules/AvatarAndName"
import { AvatarFromId } from "../../molecules/AvatarFromId"

type Props = {
  postId: number
  myProfileId: number
  userPost: number
  postImageSrc: string
  liked: Array<number>
  profiles: Array<Profile>
  comments: Array<Comment>
  title: string
}

export const PostCard: VFC<Props> = memo((props) => {
  const {
    postId,
    myProfileId,
    userPost,
    postImageSrc,
    liked,
    profiles,
    comments,
    title,
  } = props

  const { getMyProfile } = useMyProfile()
  useEffect(() => getMyProfile(myProfileId), [])

  const { userProfile, getProfile } = useProfile()
  useEffect(
    () => getProfile({ profiles: profiles, user_profile: userPost }),
    []
  )

  const commentsOnPost = comments.filter((comment) => {
    return comment.post === postId
  })

  return (
    <Box w="330px" h="600px" bg="white" borderRadius="10px" shadow="md" p={5}>
      <Stack textAlign="left">
        <AvatarAndName
          name={userProfile?.nickname as string}
          src={userProfile?.img as string}
          size="sm"
        />
        <Image
          boxSize="300px"
          src={postImageSrc}
          alt="Post Image"
          m="auto"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        />
        <HStack>
          <LikeButtonWithCount count={10} isLiked={false} />
          <AvatarAndName
            name={userProfile?.nickname as string}
            src={userProfile?.img as string}
            size="xs"
          />
          <Text>{title}</Text>
        </HStack>
        <Divider orientation="horizontal" />
        {/* Avatars who pushed like button */}
        <HStack>
          {liked.map((likeUserId) => (
            <AvatarFromId
              key={likeUserId}
              id={likeUserId}
              profiles={profiles}
            />
          ))}
        </HStack>
        {/* Other user's comment display area */}
        <Divider orientation="horizontal" />
        <Stack>
          {commentsOnPost.map((commentOnPost) => (
            <HStack>
              <AvatarFromId
                id={commentOnPost.user_comment}
                profiles={profiles}
              />
              <Text>{commentOnPost.text}</Text>
            </HStack>
          ))}
        </Stack>
        {/* Comment post area */}
        <Divider orientation="horizontal" />
        <Flex>
          <Input placeholder="add comment..." size="sm" variant="unstyled" />
          <Link fontSize="xs" color="teal.500">
            Post
          </Link>
        </Flex>
      </Stack>
    </Box>
  )
})
