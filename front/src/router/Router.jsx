import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorePage from "../pages/StorePage";
import BoardList from "../components/board/BoardList";
import BoardWrite from "../pages/BoardWrite";
import BoardDetail from "../pages/BoardDetailPage";
import BoardEdit from "../pages/BoardEdit";
import StoreDetail from "../pages/StoreDetailPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="/boards" element={<BoardList />} />
        <Route path="/boards/write" element={<BoardWrite />} />
        <Route path="/boards/:id" element={<BoardDetail />} />
        <Route path="/boards/:id/edit" element={<BoardEdit />} />
        <Route path="/stores/:id" element={<StoreDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
