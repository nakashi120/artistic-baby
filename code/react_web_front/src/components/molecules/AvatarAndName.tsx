/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Center, Flex, Text } from "@chakra-ui/react"
import { memo, VFC } from "react"

type Props = {
  name: string
  src: string
  size: string
}

export const AvatarAndName: VFC<Props> = memo((props) => {
  console.log("AvatarAndName")
  const { name, src, size } = props
  return (
    <Flex textAlign="center">
      <Center mr={3}>
        <Avatar
          name={name}
          src={src}
          size={size}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        />
      </Center>
      <Center>
        <Text fontSize="15px">{name}</Text>
      </Center>
    </Flex>
  )
})
