/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios"
import { useCallback, useState } from "react"
import { Profile } from "../types/user/profile"
import { useMessage } from "./useMessage"

export const useAllProfiles = () => {
  const [profiles, setProfiles] = useState<Array<Profile>>()
  const { showMessage } = useMessage()

  const apiUrl = process.env.REACT_APP_DEV_API_URL

  const getAllProfiles = useCallback(() => {
    axios
      .get<Array<Profile>>(`${apiUrl}api/profile/`, {
        headers: {
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      })
      .then((res) => {
        setProfiles(res.data)
      })
      .catch(() => {
        showMessage({
          title: "プロフィール一覧取得に失敗しました。",
          status: "error",
        })
      })
  }, [])

  return { profiles, getAllProfiles }
}
