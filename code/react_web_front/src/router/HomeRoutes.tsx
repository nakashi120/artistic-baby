import { Home } from "../components/pages/Home"
import { Page404 } from "../components/pages/Page404"
import { Profile } from "../components/pages/Profile"

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/myprofile",
    exact: false,
    children: <Profile />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
]
