import {Route, Routes} from "react-router-dom";

import {AllUsers, CreatePost, EditPost, Home, PostDetails, Profile, UpdateProfile,} from "@/_root/pages";
import RootLayout from "./_root/RootLayout";
import {Toaster} from "@/components/ui/toaster";

import "./globals.css";

const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                {/* public routes */}
                {/* <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route> */}

                {/* private routes */}
                <Route element={<RootLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/admin/all-users" element={<AllUsers/>}/>
                    <Route path="/create-post" element={<CreatePost/>}/>
                    <Route path="/update-post/:id" element={<EditPost/>}/>
                    <Route path="/posts/:id" element={<PostDetails/>}/>
                    <Route path="/profile/:id/*" element={<Profile/>}/>
                    <Route path="/update-profile/:id" element={<UpdateProfile/>}/>

                </Route>
            </Routes>

            <Toaster/>
        </main>
    );
};

export default App;
