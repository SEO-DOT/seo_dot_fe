import React, { useEffect } from "react";
import Header from "../components/Main/Header";
import BestBook from "../components/Main/BestBook";
import BookMark from "../components/Main/Bookmark";
import Footer from "../components/Main/Footer";
import Nav from "../components/Main/Nav";
import NewBook from "../components/Main/NewBook";
import Notice from "../components/Main/Notice";
import Review from "../components/Main/Review";
import Visual from "../components/Main/Visual";

const Main = () => {
  return (
    <div className="w-[375px] mx-auto">
      {/* 헤더 */}
      <Header />
      {/* 네비게이션 바 */}
      <Nav />
      {/* 메인 비주얼 */}
      <Visual />
      {/* 베스트 북 */}
      <BestBook />
      {/* 신간도서 */}
      <NewBook />
      {/* 인기리뷰 */}
      <Review />
      {/* 북마크리스트 */}
      {/* <BookMark slides={slides} /> */}
      {/* 안내 */}
      <Notice />
      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default Main;
