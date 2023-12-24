import { motion } from "framer-motion";
//icons
import { IoIosArrowDropleft } from "react-icons/io";
import { MdMenu, MdOutlineApps } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";

import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import SubSidebar from "./SubSidebar";
const Sidebar = () => {
  let isTab = useMediaQuery({ query: "(max-width:768px)" });
  const [isOpen, setIsOpn] = useState(isTab ? false : true);

  const { pathname } = useLocation();

  useEffect(() => {
    if (isTab) {
      setIsOpn(false);
    } else {
      setIsOpn(true);
    }
  }, [isTab]);

  useEffect(() => {
    isTab && setIsOpn(false);
  }, [pathname]);

  const sub_animation = isTab
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -100,
          width: "0",
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  console.log(isTab);

  const subMenusList = [
    {
      name: "build",
      icon: FaBuilding,
      menus: ["auth", "app settings", "stroage", "hosting"],
    },
    {
      name: "analytics",
      icon: SiSimpleanalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];
  return (
    <>
      <div
        onClick={() => setIsOpn(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50  ${
          isOpen ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        variants={sub_animation}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray shadow-xl  z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        {/* Logo*/}

        <div className="flex border-b py-3 gap-2.5 font-medium border-slate-300 items-center mx-3">
          <img src="https://img.icons8.com/color/512/firebase.png" width={45} />
          <span className="text-xl whitespace-pre">Firebase</span>
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100">
            <li>
              <NavLink to="/" className={"link"}>
                <MdOutlineApps size={23} className="min-w-max" />
                All Apps
              </NavLink>
            </li>

            <li>
              <NavLink to="/authentication" className={"link"}>
                <FaUserCog size={23} className="min-w-max" />
                Authentication
              </NavLink>
            </li>

            <li>
              <NavLink to="/stroage" className={"link"}>
                <FaDatabase size={23} className="min-w-max" />
                Stroage
              </NavLink>
            </li>
            {(isOpen || isTab) && (
              <div className="border-y py-5 border-slate-300">
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  {" "}
                  Product categories
                </small>

                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubSidebar data={menu} />
                  </div>
                ))}
              </div>
            )}

            <li>
              <NavLink to="/settings" className={"link"}>
                <IoMdSettings size={23} className="min-w-max" />
                Settings
              </NavLink>
            </li>
          </ul>
        </div>

        <motion.div
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -100,
                  rotate: 180,
                }
          }
          inherit={{ x: isTab ? -250 : 0 }}
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit z-50 right-2 bottom-3 cursor-pointer hidden md:block"
        >
          <IoIosArrowDropleft size={25} onClick={() => setIsOpn(!isOpen)} />
        </motion.div>
      </motion.div>

      <div className="m-3 md:hidden" onClick={() => setIsOpn(true)}>
        <MdMenu size={23} />
      </div>
    </>
  );
};

export default Sidebar;
