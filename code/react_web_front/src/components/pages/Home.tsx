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
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { memo, VFC } from "react"
import { AvatarAndName } from "../molecules/AvatarAndName"
import { LikeButtonWithCount } from "../atoms/button/LikeButtonWithCount"

export const Home: VFC = memo(() => {
  return (
    <>
      <Wrap p={{ base: 4, md: 10 }}>
        {[...Array(10)].map(() => (
          <WrapItem>
            <Box
              w="330px"
              h="550px"
              bg="white"
              borderRadius="10px"
              shadow="md"
              p={5}
            >
              <Stack textAlign="left">
                <AvatarAndName
                  name="Nakashi"
                  src="https://bit.ly/dan-abramov"
                  size="sm"
                />
                <Image
                  boxSize="300px"
                  src="https://source.unsplash.com/random"
                  alt="Post Image"
                  m="auto"
                  _hover={{ cursor: "pointer", opacity: 0.8 }}
                />
                <HStack>
                  <LikeButtonWithCount count={10} isLiked={false} />
                  <AvatarAndName
                    name="Nakashi"
                    src="https://bit.ly/dan-abramov"
                    size="sm"
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
                <Divider orientation="horizontal" />
                <Flex>
                  <Input
                    placeholder="add comment..."
                    size="sm"
                    variant="unstyled"
                  />
                  <Link fontSize="xs" color="teal.500">
                    Post
                  </Link>
                </Flex>
              </Stack>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </>
  )
})
