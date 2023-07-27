import React from "react";
import { useSelector } from "react-redux";
import "./genres.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state?.home);

  return (
    <div className="genres">
      {data?.map((item, index) => {
        if (!genres[item]?.name) return;
        return (
          <div className="genre" key={index}>
            {genres[item]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
