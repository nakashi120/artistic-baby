import {
  Avatar,
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
import { useProfile } from "../../../hooks/useProfile"
import { LikeButtonWithCount } from "../../atoms/button/LikeButtonWithCount"
import { AvatarAndName } from "../../molecules/AvatarAndName"

type Props = {
  avatarName: number
  avatarImageSrc: string
  postImageSrc: string
}

export const PostCard: VFC<Props> = memo((props) => {
  const { avatarName, avatarImageSrc, postImageSrc } = props

  const { getProfile, profile } = useProfile()
  useEffect(() => getProfile(avatarName), [avatarName, getProfile])
  console.log(`ニックネーム：${profile?.id}`)

  return (
    <Box w="330px" h="600px" bg="white" borderRadius="10px" shadow="md" p={5}>
      <Stack textAlign="left">
        <AvatarAndName
          name={profile?.nickname as string}
          src={avatarImageSrc}
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
            name={profile?.nickname as string}
            src={avatarImageSrc}
            size="xs"
          />
          <Text>Yeah!!!</Text>
        </HStack>
        <Divider orientation="horizontal" />
        {/* Avatars who pushed like button */}
        <HStack>
          <Avatar size="xs" />
          <Avatar size="xs" />
          <Avatar size="xs" />
          <Avatar size="xs" />
        </HStack>
        {/* Other user's comment display area */}
        <Divider orientation="horizontal" />
        <Stack>
          <HStack>
            <Avatar size="2xs" />
            <Text>sample comment</Text>
          </HStack>
          <HStack>
            <Avatar size="2xs" />
            <Text>sample comment</Text>
          </HStack>
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
