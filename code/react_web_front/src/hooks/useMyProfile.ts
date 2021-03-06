/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useCallback, useState } from "react"
import { Profile } from "../types/user/profile"
import { useMessage } from "./useMessage"

export const useMyProfile = () => {
  const apiUrl = process.env.REACT_APP_DEV_API_URL

  const [profile, setProfile] = useState<Profile>()
  const { showMessage } = useMessage()

  const getMyProfile = useCallback((userId: number) => {
    axios
      .get(`${apiUrl}api/profile/${userId}/`, {
        headers: {
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      })
      .then((res) => {
        setProfile(res.data)
      })
      .catch(() => {
        showMessage({
          title: "MyProfile取得に失敗しました",
          status: "error",
        })
      })
  }, [])

  return { getMyProfile, profile }
}
