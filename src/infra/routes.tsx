import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "../shared/layouts/DefaultLayout"
import Home from "../app/features/Home"
import { path } from "./path"
import Login from "../app/features/Login"
import { Admin } from "../shared/layouts/Admin"
import { PrivateRouter } from "./PrivateRouter"
import AdminHome from "../app/features/AdminHome"
import AdminFilmes from "../app/features/AdminFilmes"

export default function MainRoutes() {
  return (
    <Routes>
      <Route path={path.LOGIN} element={<Login />} />

      <Route path={path.HOME} element={<DefaultLayout />}>
        <Route path={path.HOME} element={<Home />} />
      </Route>

      <Route path="/" element={<Admin />}>
        <Route path={path.ADMIN_HOME} element={<PrivateRouter element={<AdminHome />} />} />
        <Route path={path.ADMIN_FILMES} element={<PrivateRouter element={<AdminFilmes />} />} />
      </Route>
    </Routes>
  )
}
