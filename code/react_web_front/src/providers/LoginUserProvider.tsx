import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react"
import { Profile } from "../types/user/profile"

export type LoginUserContextType = {
  loginUser: Profile | null
  setLoginUser: Dispatch<SetStateAction<Profile | null>>
}

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
)

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props
  const [loginUser, setLoginUser] = useState<Profile | null>(null)

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}
