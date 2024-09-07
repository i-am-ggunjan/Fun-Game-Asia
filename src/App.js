import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/private-routes";
import Login from './pages/login';

//! Dahboard 
import Dashboard from "./pages/dashboard";

//! Customer
// import AllCustomers from "./pages/customer/all-customer";
import AllCustomers from "./pages/customer/Our-Customer";

//! User Team
// import AllCustomers from "./pages/customer/all-customer";
import UserTeam from "./pages/userTeam/user-team";

//! Curretn Game
import Currentgame from "./pages/current-game/current-game";

//! Withdraw
import Withdraw from "./pages/withdraw-history/withdraw-history";

//! Deposit History
import Deposit from "./pages/deposit-history/deposit-history";

//! Master
import HsnCode from "./pages/master/hsn-code";
import SaleArea from "./pages/master/sale-area";
import SalePerson from "./pages/master/sale-person";
import ItemCategory from "./pages/master/item-category";
import ItemPacking from "./pages/master/item-packing";

//! Setting 
import Blogs from "./pages/setting/blogs";
import AddBlog from "./pages/setting/blogs/add-blogs";
import AboutUs from "./pages/setting/about-us";
import TermsAndConditions from "./pages/setting/terms-and-conditions";
import PrivacyPolicy from "./pages/setting/privacy-policy";
import SupportCategory from "./pages/setting/support/category";
import SupportSubCategory from "./pages/setting/support/category/sub-category";
import SupportQuery from "./pages/setting/support-query";
import ChangePassword from "./pages/setting/change-password";
import Subadmin from "./pages/setting/sub-admin";
import AddSubadmin from "./pages/setting/sub-admin/add-sub-admin";

// Game
import FunSoratgame from "./pages/games/Fun-sorat-game";
import FunTargettimer from "./pages/games/fun-target-timmer";
import Teenpatti from "./pages/games/Teen-patti";
import Rummy from "./pages/games/Rummy";
import Aviator from "./pages/games/Aviator";
import Roulette from "./pages/games/Roulette";
import Prologic777 from "./pages/games/Prologic777";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path="/" exact element={<PrivateRoutes />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<> Not Ready</>} />

          {/* Game */}
          <Route path="/game/fun-sorat-game" element={<FunSoratgame />} />
          <Route path="/game/fun-target-timmer" element={<FunTargettimer />} />
          <Route path="/game/Teen-patti" element={<Teenpatti />} />
          <Route path="/game/Rummy" element={<Rummy />} />
          <Route path="/game/Aviator" element={<Aviator />} />
          <Route path="/game/Roulette" element={<Roulette />} />
          <Route path="/game/Prologic777" element={<Prologic777 />} />

          {/* Customer */}
          <Route path="/customer/Our-customer" element={<AllCustomers/>} />

          {/* Customer */}
          <Route path="/userTeam/user-team" element={<UserTeam/>} />
          
          {/* Current Game */}
          <Route path="/current-game/current-game" element={<Currentgame/>} />

          {/* Withraw history */}
          <Route path="/withdraw-history/withdraw-history" element={<Withdraw/>} />

            {/* Deposite History */}
            <Route path="/deposit-history/deposit-history" element={<Deposit/>} />

 
          {/* Master */}
          <Route path="/master/hsn-code" element={<HsnCode />} />
          <Route path="/master/sale-area" element={<SaleArea />} />
          <Route path="/master/sale-person" element={<SalePerson />} />
          <Route path="/master/item-category" element={<ItemCategory />} />
          <Route path="/master/item-packing" element={<ItemPacking />} />

          {/* Setting */}
          <Route path="/setting/blogs" element={<Blogs />} />
          <Route path="/setting/blogs/add-blog" element={<AddBlog mode={'Add'} />} />
          <Route path="/setting/blogs/edit-blog" element={<AddBlog mode={'Edit'} />} />

          <Route path="/setting/about-us" element={<AboutUs />} />
          <Route path="/setting/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/setting/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/setting/support/category" element={<SupportCategory />} />
          <Route path="/setting/support/category/:name" element={<SupportSubCategory />} />
          <Route path="/setting/support-query" element={<SupportQuery />} />
          <Route path="/setting/change-password" element={<ChangePassword />} />
          <Route path="/setting/sub-admin" element={<Subadmin />} />
          <Route path="/setting/add-sub-admin" element={<AddSubadmin mode={'Add'} />} />
          <Route path="/setting/edit-sub-admin" element={<AddSubadmin mode={'Edit'} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;