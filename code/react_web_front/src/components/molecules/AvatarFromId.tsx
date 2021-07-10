import { Avatar } from "@chakra-ui/react"
import { memo, useEffect, VFC } from "react"
import { useProfile } from "../../hooks/useProfile"
import { Profile } from "../../types/user/profile"

type Props = {
  id: number
  profiles: Array<Profile>
}

export const AvatarFromId: VFC<Props> = memo((props) => {
  const { id, profiles } = props

  const { userProfile, getProfile } = useProfile()
  useEffect(() => getProfile({ profiles: profiles, user_profile: id }), [])

  return (
    <>
      <Avatar src={userProfile?.img as string} size="xs" />
    </>
  )
})
