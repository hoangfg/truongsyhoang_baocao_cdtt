
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';


import { Provider } from "react-redux"
import store from './redux/store';

import { Routes } from 'react-router-dom';
import Layout from './layout';
import PageHome from './pages/home/PageHome';
import PageCategory from './pages/page-category/PageCategory';
import PageOffer from './pages/page-offer/PageOffer';
import Cart from './pages/Cart/Cart';
import CheckOut from './pages/Checkout/CheckOut';
import SignBox from './pages/Account/SignBox';
import NoPage from './layout/NoPage/NoPage';
import PagePost from './pages/page-post/PagePost';
import PagePostDetail from './pages/page-post-detail/PagePostDetail';
import Contact from './pages/contact/Contact';

function App() {

  return (
    <Provider store={store} className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PageHome />} />
            <Route path="product" element={<PageCategory title="Tất cả sản phẩm" type="product" />} />
            <Route path="post" element={<PagePost title="Tất cả bài viết" type="post" />} />
            <Route path="sale" element={<PageCategory title="Sản phẩm khuyến mãi" type="sale" />} />
            <Route path="contact" element={<Contact />} />

            <Route path="/product/:slug" element={<PageOffer />} />
            <Route path="post/:slug" element={<PagePostDetail type="post" />} />
            <Route path="page/:slug" element={<PagePostDetail type="page" />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="signin" element={<SignBox />} />
            <Route
              path="genres/:slug"
              element={<PageCategory title="Sản phẩm theo thể loại" type="genres" />}
            />
            <Route
              path="author/:slug"
              element={<PageCategory title="Sản phẩm theo tác giả" type="author" />}
            />
            <Route
              path="language/:slug"
              element={<PageCategory title="Sản phẩm theo ngôn ngữ" type="language" />}
            />
            <Route
              path="publisher/:slug"
              element={<PageCategory title="Sản phẩm theo nhà xuất bản" type="publisher" />}
            />
            <Route
              path="search/:slug"
              element={<PageCategory title="Tìm kiếm" type="search" />}
            />

          </Route>

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
