/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useCallback, useContext } from "react"
import { LoginUserContext } from "../providers/LoginUserProvider"
import { Profile } from "../types/user/profile"
import { useMessage } from "./useMessage"

export const useLoginUser = () => {
  const { showMessage } = useMessage()
  const { loginUser, setLoginUser } = useContext(LoginUserContext)
  const apiUrl = `${process.env.REACT_APP_DEV_API_URL}api/myprofile/`

  const getLoginUserInfo = useCallback(() => {
    axios
      .get<Profile>(apiUrl, {
        headers: {
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      })
      .then((res) => {
        console.log(res.data)
        setLoginUser(res.data)
      })
      .catch(() => {
        showMessage({
          title: "ユーザー情報取得に失敗しました。",
          status: "error",
        })
      })
  }, [])

  return { loginUser, getLoginUserInfo }
}
