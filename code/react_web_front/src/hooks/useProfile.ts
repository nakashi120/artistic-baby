import { useCallback, useState } from "react"
import { Profile } from "../types/user/profile"

type Props = {
  user_profile: number
  profiles: Array<Profile>
}

export const useProfile = () => {
  const [userProfile, setUserProfile] = useState<Profile | null>(null)

  const getProfile = useCallback((props: Props) => {
    const { user_profile, profiles } = props
    const targetUserProfile = profiles.find(
      (profile) => profile.user_profile === user_profile
    )
    setUserProfile(targetUserProfile ?? null)
  }, [])

  return { userProfile, getProfile }
}
