import { useEffect } from "react";
import { fetchDataFromAPI } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state?.home?.url);
  // console.log(url);
  const fetchApiConfiguration = () => {
    fetchDataFromAPI("/configuration").then((response) => {
      const url = {
        backdrop: response?.images?.base_url + "original",
        poster: response?.images?.base_url + "original",
        profile: response?.images?.base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  useEffect(() => {
    fetchApiConfiguration();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mediaType/:id" element={<Details />} />
        <Route path="/search/:id" element={<SearchResult />} />
        <Route path="/explore/:id" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
