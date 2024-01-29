import MainRoutes from "./infra/routes"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  )
}

export default App
