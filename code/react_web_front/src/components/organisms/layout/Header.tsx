import { memo, VFC } from "react"
import { Box, Flex, Heading, Link } from "@chakra-ui/react"

export const Header: VFC = memo(() => {
  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }} pr={3}>
          Aritistic Child
        </Heading>
        <Flex align="center" fontSize="sm" display="flex">
          <Box pr={4}>
            <Link>New Post</Link>
          </Box>
        </Flex>
      </Flex>
      <Flex align="center" fontSize="sm" display="flex" pr={3}>
        <Box>
          <Link pr={5}>Profile</Link>
        </Box>
        <Link>LogOut</Link>
      </Flex>
    </Flex>
  )
})
