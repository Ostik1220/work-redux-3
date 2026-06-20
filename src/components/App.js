import { ListPage } from "pages/ListPage";
import { Layout } from "./Layout/Layout";
import { AuthPage } from "pages/AuthPage";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import { PrivateRoute } from "utilities/routes/privateRoute";


export const App = () => {
console.log()


  return (<>
     <Routes>
       <Route path="/" element={<AuthPage />} />
       {/* <PrivateRoute path="/list">
        <ListPage />
       </PrivateRoute> */}
       {/* <Route path="/list" element={<PrivateRoute><ListPage /></PrivateRoute>} />
        */}
        <Route path="/list" element={<ListPage />} />
    </Routes>
</>
  )
}
