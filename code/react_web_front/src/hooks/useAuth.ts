/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react"
import axios from "axios"
import { AuthToken } from "../types/api/authToken"
import { useHistory } from "react-router-dom"
import { useMessage } from "./useMessage"
import { Authen } from "../types/api/authen"
import { useLoginUser } from "./useLoginUser"

export const useAuth = () => {
  const history = useHistory()
  const { showMessage } = useMessage()
  const { loginUser, getLoginUserInfo } = useLoginUser()
  useEffect(() => getLoginUserInfo(), [])

  const login = useCallback(
    (props: Authen) => {
      const { email, password } = props
      const apiUrl = `${process.env.REACT_APP_DEV_API_URL}authen/jwt/create`
      axios
        .post<AuthToken>(
          apiUrl,
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("localJWT", res.data.access)
          console.log(loginUser?.id)
          showMessage({ title: "ログインしました", status: "success" })
          history.push("/home")
        })
        .catch(() =>
          showMessage({ title: "ログインできませんでした", status: "error" })
        )
    },
    [history]
  )
  return { login }
}
