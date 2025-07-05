import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { SIDE_MENU_DATA } from '../../utils/data';
import Lottie from 'lottie-react';
import animationData from '../../assets/Avatar.json';

const SideMenu = ({ activeMenu }) => {
  const navigate = useNavigate(); 

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-20 h-20 rounded-full bg-slate-400"
        />
        <h5 className="text-gray-950 font-medium leading-6">YardStick</h5>
      </div>

      {SIDE_MENU_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px] ${
            activeMenu === item.label ? 'text-white bg-primary' : 'text-gray-700 hover:bg-gray-100'
          } px-6 py-3 rounded-lg mb-3 transition`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl" />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
