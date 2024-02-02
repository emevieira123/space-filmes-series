import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { AdminTopBar } from "../../components/AdminTopBar";
// import { Footer } from "../../components/Footer";

export function Admin() {
  return (
    <Box minH="100vh" bg="blackAlpha.900" color="white">
      <AdminTopBar />
      <Outlet />
      {/* <Footer /> */}
    </Box>
  )
}
