import { ListPage } from "pages/ListPage";
import { Layout } from "./Layout/Layout";
import { AuthPage } from "pages/AuthPage";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import { PrivateRoute } from "utilities/routes/privateRoute";
import { PublicRestrictedRoute } from "utilities/routes/publicRoute";


export const App = () => {
console.log()


  return (<>
     <Routes>
       <Route path="/" element={<PublicRestrictedRoute restricted><AuthPage /></PublicRestrictedRoute>} />

       {/* <PrivateRoute path="/list">
        <ListPage />
       </PrivateRoute> */}
       <Route path="/list" element={<PrivateRoute><ListPage /></PrivateRoute>} />
        {/* <Route path="/list" element={<ListPage />} /> */}
    </Routes>
</>
  )
}
