import React, { useEffect, useState } from "react";
import useFetch from "../../CustomHooks/useFetch";
import BurgerToggle from "./BurgerToggle";
import { Link } from "react-router-dom";
import getCookie from "../../CustomHooks/getCookies";
import removeCookie from "../../CustomHooks/removeCookie";

const url = "https://localhost:44336/api/Constants/getConsntans";

const Nav = () => {
  const [logo, setLogo] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isActive, setIsActive] = useState<boolean>(false);

  const { isOkay } = getCookie("user");

  const getLogo = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setLogo(data.logoURL);
  };

  useEffect(() => {
    getLogo();
  }, [url]);

  const detectWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectWidth);
    if (windowWidth > 768) {
      setIsActive(false);
    }
    return () => {
      window.removeEventListener("resize", detectWidth);
    };
  }, [windowWidth]);

  const showNav = () => {
    setIsActive(!isActive);
  };

  const signOut = () => {
    removeCookie("user");
    window.location.reload();
  };

  return (
    <nav className="shadow-xl  z-50 bg-color-secondary">
      <div className="py-3 px-10 x-10 md:mx-auto  items-center grid grid-cols-2">
        <div className="logo">
          <img className="w-[12rem]" src={logo} alt="logo" />
        </div>
        <div
          className={`nav-links ${windowWidth <= 768 && "flex justify-end"} `}
        >
          {windowWidth > 768 ? (
            <ul className="list-none flex items-center justify-between">
              <li className="text-color-primary text-[1.2rem] font-bold">
                <Link to="/">HOME</Link>
              </li>
              <li className="text-color-primary text-[1.2rem] font-bold">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="text-color-primary text-[1.2rem] font-bold">
                <Link to="/schools">SCHOOLS</Link>
              </li>
              <li className="text-color-primary text-[1.2rem] font-bold">
                USERS
              </li>
              <li className="text-color-primary text-[1.2rem] font-bold">
                BLOGS
              </li>
              {!isOkay ? (
                <li className="text-color-secondary bg-color-primary p-2 rounded-md text-[1.2rem] font-bold">
                  <Link to="/register">REGISTER</Link>
                </li>
              ) : (
                <li className="text-color-secondary bg-color-primary p-2 rounded-md text-[1.2rem] font-bold">
                  <button onClick={() => signOut()}>SIGN OUT</button>
                </li>
              )}
            </ul>
          ) : (
            <BurgerToggle showNav={showNav} isActive={isActive} />
          )}
        </div>
      </div>
      <ul
        className={`relative bg-white w-full duration-[0.9s] list-none  flex flex-col items-center justify-between ${
          isActive ? "h-[20rem] " : "h-0 "
        } `}
      >
        <li
          className={`text-color-primary ${
            isActive ? "block" : "hidden"
          }   my-2 text-[1.2rem] font-bold`}
        >
          <Link to="/">HOME</Link>
        </li>
        <li
          className={`text-color-primary ${
            isActive ? "block" : "hidden"
          }  my-2 text-[1.2rem] font-bold`}
        >
          <Link to="/about">ABOUT</Link>
        </li>
        <li
          className={`text-color-primary ${
            isActive ? "block" : "hidden"
          }   my-2 text-[1.2rem] font-bold`}
        >
          <Link to="/schools">SCHOOLS</Link>
        </li>
        <li
          className={`text-color-primary ${
            isActive ? "block" : "hidden"
          }   my-2 text-[1.2rem] font-bold`}
        >
          USERS
        </li>
        <li
          className={`text-color-primary ${
            isActive ? "block" : "hidden"
          }   my-2 text-[1.2rem] font-bold`}
        >
          BLOGS
        </li>
        {!isOkay ? (
          <li
            className={`text-color-secondary my-2 bg-color-primary ${
              isActive ? "block" : "hidden"
            }  p-2 rounded-md text-[1.2rem] font-bold`}
          >
            <Link to="/register">REGISTER</Link>
          </li>
        ) : (
          <li
            className={`text-color-secondary my-2 bg-color-primary ${
              isActive ? "block" : "hidden"
            }  p-2 rounded-md text-[1.2rem] font-bold`}
          >
            <button onClick={() => signOut()}>SIGN OUT</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
