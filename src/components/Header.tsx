import React from "react";
import header from '~/assets/header.png';

interface Props {
  title: String
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className="relative" >
      <img src={header} alt="Header image" />
      <div className="absolute bottom-10 w-full">
        <div className="container mx-auto 2xl:px-10">
          <h4 className="text-white font-bold text-5xl">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
