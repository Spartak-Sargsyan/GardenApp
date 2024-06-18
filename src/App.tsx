import { RouterProvider } from "react-router-dom"
import { UnAuthenticatedApp } from "./routes/UnAuthenticatedApp"

function App() {

  return (
    <>
     <RouterProvider router={UnAuthenticatedApp}/>
    </>
    
  )
}

export default App
