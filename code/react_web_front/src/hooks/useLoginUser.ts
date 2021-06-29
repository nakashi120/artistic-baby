/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useCallback, useContext } from "react"

import { LoginUserContext } from "../providers/LoginUserProvider"
import { Profile } from "../types/user/profile"
import { useMessage } from "./useMessage"

export const useLoginUser = () => {
  const { showMessage } = useMessage()
  const { setLoginUser } = useContext(LoginUserContext)
  const apiUrl = `${process.env.REACT_APP_DEV_API_URL}api/myprofile/`

  const getLoginUserInfo = useCallback(() => {
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      })
      .then((res) => {
        setLoginUser(res.data[0])
        console.log(
          `ログインユーザーuseLoginUser：${JSON.stringify(res.data[0])}`
        )
      })
      .catch(() => {
        showMessage({
          title: "ユーザー情報取得に失敗しました。",
          status: "error",
        })
      })
  }, [])

  return { getLoginUserInfo }
}
