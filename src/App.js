import Cookies from "js-cookie";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import get_info_user from "./api/auth/user/get_info_user";
import AdminLevel1 from "./Components/AdminLevel1/AdminLevel1";
import AdminLevel2 from "./Components/AdminLevel2/AdminLevel2";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import DetailHotel from "./Components/DetailHotel/DetailHotel";
import DetailRoom from "./Components/Booking/Booking";
import DetailSubRoom from "./Components/DetailSubRoom/DetailSubRoom";
import Footer from "./Components/Footer/Footer";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ListBooking from "./Components/ListBooking/ListBooking";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import Profile from "./Components/Profile/Profile";
import Search from "./Components/Search/Search";
import Signup from "./Components/Signup/Signup";
import LoadingSpinner from "./Loading/LoadingSpinner";
import ListBill from "./Components/ListBill/ListBill";
import EventDetail from "./Components/Event/EventDetail";
import Booking from "./Components/Booking/Booking";
import PaymentSuccess from "./Components/Payment/PaymentSuccess";
import RegisterHotel from "./Components/AdminLevel1/RegisterHotel";

export const AppContext = createContext();
function App() {
  const [change, setChange]= useState(false)
  const [user, setUser] = useState();
  const [auth, setAuth] = useState(undefined);
  useEffect(() => {
    if (Cookies.get("uid")) {
      get_info_user(setUser, setAuth);
    } else {
      setUser(undefined);
      setAuth(false);
    }
  }, [change]);
  return (
    <AppContext.Provider value={{ user, auth, setChange }}>
      <Router>
        <Header />
        {auth === undefined && (
          <LoadingSpinner
            style={{
              width: "100%",
              height: 500,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#1b1b1b",
            }}
          />
        )}
        <Routes>
            
          <Route path={"/"} element={<Home />} />
            {
              user?.role?.[0]=== "ROLE_ADMIN" && <Route path="/" element={<Navigate to={"/admin"} />} />
            }
            {
              user?.role?.[0]=== "ROLE_MODERATOR" && <Route path="/" element={<Navigate to={"/manage"} />} />
            }
          {auth === true && (
            <>
              {/* done */}
              <Route path={"/login"} element={<Navigate to={"/"} />} />
              {/* done */}
              <Route path={"/signup"} element={<Navigate to={"/"} />} />
              {/* done */}
              <Route
                path={"/forgot/password"}
                element={<Navigate to={"/"} />}
              />
              {/* done */}
              <Route path={"/"} element={<Home />} />
              {/* done */}
              <Route path={"/user/profile/:idUser"} element={<Profile />} />
              {/* done */}
              <Route path={"/change/password"} element={<ChangePassword />} />
              {/* done */}
              <Route path={"/booking/search"} element={<Search />} />
              {/* done */}
              <Route
                path={"/hotel/detail/:idHotel"}
                element={<DetailHotel />}
              />
              {/* doing */}
              <Route path={"/event/detail/:eventId"} element={<EventDetail />} />
              {/* doing */}
              <Route path={"/booking/payment"} element={<Payment />} />
              {/* done */}
              <Route path={"/room/detail"} element={<DetailRoom />} />
              {/* done */}
              <Route path={"/sub/room/detail"} element={<DetailSubRoom />} />
              {/* doing */}
              <Route path={"/booking/order/*"} element={<ListBooking />} />
              {/* doing */}
              <Route path={"/bill/payment/booking"} element={<ListBill />} />
              {/* doing */}
              <Route path={"/manage/*"} element={<AdminLevel1 />} />
              {/* doing */}
              <Route path={"/admin/*"} element={<AdminLevel2 />} />
              <Route path={"/booking/detail"} element={<Booking />} />
              <Route path={"/payment/success"} element={<PaymentSuccess />} />
              <Route path={"/check/hotel/:idHotel"} element={<div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{width: "100%", maxWidth: 1116, display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <RegisterHotel is_detail={true} />
                </div>
              </div>} />
            </>
          )}
          
          {auth === false && (
            <>
              <Route path={"/login"} element={<Login />} />
              <Route path={"/signup"} element={<Signup />} />
              <Route path={"/forgot/password"} element={<ForgotPassword />} />
              <Route path={"/"} element={<Home />} />
              <Route
                path={"/user/profile"}
                element={<Navigate to={"/login"} />}
              />
              <Route
                path={"/change/password"}
                element={<Navigate to={"/login"} />}
              />
              <Route
                path={"/booking/search"}
                element={<Navigate to={"/login"} />}
              />
              <Route path={"/hotel/detail"} element={<DetailHotel />} />
              <Route
                path={"/booking/payment"}
                element={<Navigate to={"/login"} />}
              />
              <Route path={"/room/detail"} element={<DetailRoom />} />
              <Route path={"/sub/room/detail"} element={<DetailSubRoom />} />
              <Route
                path={"/booking/order/*"}
                element={<Navigate to={"/login"} />}
              />
              <Route path={"/manager/*"} element={<Navigate to={"/login"} />} />
              <Route path={"/admin/*"} element={<Navigate to={"/login"} />} />
            </>
          )}
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
