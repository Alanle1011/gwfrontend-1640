import { Link, NavLink, useLocation } from "react-router-dom";

import { ILoginUser, INavLink } from "@/types";
import { adminSidebarLinks, sidebarLinks } from "@/constants";
import { Button } from "../ui";
import { useEffect, useState } from "react";

// import { useUserContext, INITIAL_USER } from "@/context/AuthContext";

const LeftSidebar: React.FC<{userData: ILoginUser}> = ({userData}) => {
  const { pathname } = useLocation();

  function handleSignOut(): void {
    localStorage.clear();
    window.location.reload();
  }

  if (userData.role === "STUDENT") {
    return (
      <nav className="leftsidebar">
        <div className="flex flex-col gap-11 bg-red">
          <Link to="/" className="flex gap-3 items-center">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              width={170}
              height={36}
            />
          </Link>

          <Link to="/profile" className="flex gap-3 items-center">
            <img
              src={"/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="body-bold">{userData.userId}</p>
              <p className="small-regular text-light-3">@{userData.role}</p>
            </div>
          </Link>

          <ul className="flex flex-col gap-6">
            {adminSidebarLinks.map((link: INavLink) => {
              const isActive = pathname === link.route;

              return (
                <li
                  key={link.label}
                  className={`leftsidebar-link group ${
                    isActive && "bg-primary-500"
                  }`}>
                  <NavLink
                    to={link.route}
                    className="flex gap-4 items-center p-4">
                    <img
                      src={link.imgURL}
                      alt={link.label}
                      className={`group-hover:invert-white ${
                        isActive && "invert-white"
                      }`}
                    />
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <Button
          variant="ghost"
          className="shad-button_ghost"
          onClick={() => handleSignOut()}>
          <img src="/assets/icons/logout.svg" alt="logout" />
          <p className="small-medium lg:base-medium">Logout</p>
        </Button>
      </nav>
    );
  }

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>

        {/* <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="body-bold">{user.name}</p>
              <p className="small-regular text-light-3">@{user.username}</p>
            </div>
          </Link> */}

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}>
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4">
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={() => handleSignOut()}>
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  );
};

export default LeftSidebar;
