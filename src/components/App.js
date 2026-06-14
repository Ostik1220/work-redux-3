import { ListPage } from "pages/ListPage";
import { Layout } from "./Layout/Layout";
import { AuthPage } from "pages/AuthPage";
import { Route} from "react-router-dom";
import { Routes } from "react-router";


export const App = () => {



  return (<>
     <Routes>
       <Route path="/" element={<AuthPage />} />
       <Route path="/list" element={<ListPage />} />
    </Routes>
</>
  )
}
