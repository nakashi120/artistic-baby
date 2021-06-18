import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react"
import { ChangeEvent, memo, useState, VFC } from "react"
import { PrimaryButton } from "../atoms/button/PrimaryButton"

export const Login: VFC = memo(() => {
  const [email, setEmail] = useState("")

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          Artistic Children
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="Email" value={email} onChange={onChangeEmail} />
          <Input placeholder="password" />
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
