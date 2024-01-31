import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home'
import Postjob from "../pages/Postjob";
import Myjobs from "../pages/Myjobs";
import SalaryEst from "../pages/SalaryEst";
import Editjob from "../pages/Editjob";
import Login from "../components/Login";
import Signup from "../components/Signup";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/post-job",
        element: <Postjob/>,
      },
      {
        path: "/job/:id",
        element: <JobDetails/>,
      },
      {
        path: "/my-job",
        element: <Myjobs/>,
      },
      {
        path: "/salary",
        element: <SalaryEst/>,
      },
      {
        path: "/edit-job/:id",
        element: <Editjob />,
        
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/sign-up",
        element:<Signup/>,
      },
     
    ]
  }
]);

export default router;
