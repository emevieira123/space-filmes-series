import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "../shared/layouts/DefaultLayout"
import Home from "../app/features/Home"
import { path } from "./path"

export default function MainRoutes() {
  return (
    <Routes>
      <Route path={path.HOME} element={<DefaultLayout />}>
        <Route path={path.HOME} element={<Home />} />
      </Route>
    </Routes>
  )
}
