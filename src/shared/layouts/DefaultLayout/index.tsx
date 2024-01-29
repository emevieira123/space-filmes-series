import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { TopBar } from "../../components/TopBar";
// import { Footer } from "../../components/Footer";

export function DefaultLayout() {
  return (
    <Box minH="100vh" bg="blackAlpha.900" color="white">
      <TopBar />
      <Outlet />
      {/* <Footer /> */}
    </Box>
  )
}
