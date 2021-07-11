/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useCallback, useState } from "react"
import { Comment } from "../types/comment/comment"
import { useMessage } from "./useMessage"

export const useAllComments = () => {
  const [comments, setComments] = useState<Array<Comment>>()
  const { showMessage } = useMessage()

  const apiUrl = process.env.REACT_APP_DEV_API_URL

  const getAllComments = useCallback(() => {
    axios
      .get<Array<Comment>>(`${apiUrl}api/comment/`, {
        headers: {
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      })
      .then((res) => {
        setComments(res.data)
      })
      .catch(() => {
        showMessage({
          title: "コメント一覧取得に失敗しました。",
          status: "error",
        })
      })
  }, [])

  return { getAllComments, comments }
}
