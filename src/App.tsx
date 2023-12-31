import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MyPage from "./pages/MyPage";
import Main from "./pages/Main";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PaymentPage from "./pages/PaymentPage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import BookmarkPage from "./pages/BookmarkPage";
import NotFound from "./pages/NotFound";
import SettingPage from "./components/mypage/setting/SettingPage";
import MyInfoPage from "./components/mypage/setting/MyInfoPage";
import EditProfile from "./components/mypage/profile/EditProfile";

const queryClient = new QueryClient();


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="sm:relative pt-[54px] pb-0 px-0 text-center min-h-screen bg-[#fff] lex items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/bookmark" element={<BookmarkPage />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/setting/myinfo" element={<MyInfoPage />} />
            <Route path="/mypage/edit" element={<EditProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
};

export default App;
