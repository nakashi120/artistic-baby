/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react"
import axios from "axios"
import { AuthToken } from "../types/api/authToken"
import { useHistory } from "react-router-dom"
import { useMessage } from "./useMessage"
import { Authen } from "../types/api/authen"
import { useLoginUser } from "./useLoginUser"

export const useAuth = () => {
  const history = useHistory()
  const { showMessage } = useMessage()
  const { setLoginUser } = useLoginUser()

  const login = useCallback(
    (props: Authen) => {
      const { email, password } = props
      const apiUrl = "http://localhost:8000/authen/jwt/create/"
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
          showMessage({ title: "ログインしました", status: "success" })
          history.push("/home")
        })
        .catch(() =>
          showMessage({ title: "ログインできませんでした", status: "error" })
        )
    },
    [history, setLoginUser]
  )
  return { login }
}
