/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react"
import { Post } from "../types/post/post"
import { useMessage } from "./useMessage"
import axios from "axios"
import { useHistory } from "react-router-dom"

export const useAllPosts = () => {
  const { showMessage } = useMessage()
  const [posts, setPosts] = useState<Array<Post>>([])
  const history = useHistory()

  const apiUrl = process.env.REACT_APP_DEV_API_URL

  const getPosts = useCallback(() => {
    axios
      .get<Array<Post>>(`${apiUrl}api/post/`, {
        headers: {
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      })
      .then((res) => {
        setPosts(res.data)
        history.push("home")
      })
      .catch(() => {
        showMessage({ title: "投稿取得に失敗しました。", status: "error" })
      })
  }, [])

  return { getPosts, posts }
}
