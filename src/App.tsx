import { Navigate, Route, Routes } from "react-router-dom";
import {
  AllUsers,
  ContributionsList,
  CreateContribution,
  CreateUser,
  EditUser,
  // Empty,
  Home,
  Profile,
  UpdateProfile,
  UsersList,
  PendingContribution,
  EditContribution,
  MyContribution,
  // UsersList,
} from "@/_root/pages";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

// import ContributionForm from "./components/forms/ContributionForm";
// import ContributionsList from "./_root/pages/ContributionsList";
import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/SigninForm";
import React, { useEffect, useState } from "react";
import { ILoginUser } from "./types";
import ContributionDetails from "./_root/pages/ContributionDetails";

const App = () => {
  const [userData, setUserData] = useState<ILoginUser>(
    JSON.parse(localStorage.getItem("userData")) || null
  );

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData") || '""');
    if (data) {
      setUserData(data);
    }
  }, []);
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );

  useEffect(() => {
    const items = localStorage.getItem("authenticated");
    // @ts-ignore
    if (items === true) {
      // @ts-ignore
      setauthenticated(true);
    }
  });
  console.log("authenticated", authenticated);

  if (!authenticated) {
    return (
      <main className="flex h-screen">
        <Navigate replace to="/sign-in" />
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SigninForm />} />
          </Route>
        </Routes>
        <Toaster />
      </main>
    );
  } else {
    return (
      <main className="flex h-screen">
        <Routes>
          {/* user routes */}
          <Route element={<RootLayout userData={userData} />}>
            <Route index element={<Home userData={userData} />} />
            <Route path="/sign-in" element={<Navigate replace to="/" />} />
            <Route
              path="/create-contribution"
              element={<CreateContribution userData={userData} />}
            />
            <Route
              path="/update-contribution"
              element={<EditContribution userData={userData} />}
            />
            <Route
              path="/contributions"
              element={<ContributionDetails userData={userData} />}
            />
            <Route
              path="/profile"
              element={<Profile userData={userData} />}
            />
            <Route
              path="/update-profile"
              element={<UpdateProfile userData={userData} />}
            />
            <Route
              path="/my"
              element={<MyContribution userData={userData} />}
            />
            {/* admin routes */}
            <Route path="/admin/all-users" element={<AllUsers />} />
            <Route path="/admin/users" element={<UsersList />} />
            <Route path="/admin/contributions" element={<ContributionsList />} />
            <Route path="/admin/contribution-edit/:contributionId" element={<EditContribution />} />
            <Route path="/admin/create-user" element={<CreateUser />} />
            <Route path="/admin/edit-user" element={<EditUser />} />
            <Route path="/admin/pending" element={<PendingContribution />} />

            {/* <Route path="/admin/contributions" element={<ContributionsList />} /> */}
            {/* <Route path="/admin/congrats" element={<Empty />} /> */}
          </Route>
        </Routes>
        <Toaster />
      </main>
    );
  }
};

export default App;
