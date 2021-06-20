import { useCallback } from "react"
import axios from "axios"
import { AuthToken } from "../types/api/authToken"
import { useHistory } from "react-router-dom"
import { useMessage } from "./useMessage"

type Props = {
  email: string
  password: string
}

export const useAuth = () => {
  const history = useHistory()
  const { showMessage } = useMessage()

  const login = useCallback(
    (props: Props) => {
      const { email, password } = props
      const apiUrl = "http://localhost:8000/authen/jwt/create"
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
        .then((res: any) => {
          console.log(res.data.access)
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
