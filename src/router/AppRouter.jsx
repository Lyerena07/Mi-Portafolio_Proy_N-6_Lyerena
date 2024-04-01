import { BrowserRouter as Router, Routes,Route,Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage";

const AppRouter = () => {

  return (
 <Router>
<Routes>
<Route path="/" element={<HomePage/>} />
{<Route path="/*" element={<Navigate  to="/" replace />} />  }
</Routes>

 </Router>

 );
 
  
};

export default AppRouter;