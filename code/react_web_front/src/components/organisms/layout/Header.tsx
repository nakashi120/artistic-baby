/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, VFC } from "react"
import { Box, Flex, Heading, Link } from "@chakra-ui/react"
import { AiOutlineCamera } from "react-icons/ai"
import { useHistory } from "react-router-dom"

export const Header: VFC = memo(() => {
  const history = useHistory()

  const onClickHome = useCallback(() => history.push("/home"), [])
  const onClickMyProfile = useCallback(
    () => history.push("/home/myprofile"),
    []
  )

  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Flex
        align="center"
        as="a"
        mr={8}
        _hover={{ cursor: "pointer" }}
        onClick={onClickHome}
      >
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }} pr={7}>
          Aritistic Child
        </Heading>
        <Flex align="center" fontSize="sm" display="flex">
          <Box pr={4}>
            <AiOutlineCamera style={{ fontSize: 30 }} />
          </Box>
        </Flex>
      </Flex>
      <Flex align="center" fontSize="sm" display="flex" pr={3}>
        <Box>
          <Link pr={5} onClick={onClickMyProfile}>
            Profile
          </Link>
        </Box>
        <Link>Logout</Link>
      </Flex>
    </Flex>
  )
})
