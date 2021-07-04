import { memo, useContext, VFC } from "react"
import { useLoginUser } from "../../hooks/useLoginUser"

export const Page404: VFC = memo(() => {
  const { loginUser } = useLoginUser()
  console.log(`ログインユーザーPage404：${JSON.stringify(loginUser)}`)

  return <p>404ページです。</p>
})
