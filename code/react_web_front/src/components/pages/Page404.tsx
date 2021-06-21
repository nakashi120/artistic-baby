import { Button } from "@chakra-ui/react"
import { memo, VFC } from "react"
import { useAllPosts } from "../../hooks/useAllPosts"

export const Page404: VFC = memo(() => {
  const { getPosts } = useAllPosts()
  const onClickButton = () => getPosts()
  return <Button onClick={onClickButton}>ボタン</Button>
})
