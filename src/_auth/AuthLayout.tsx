import { Outlet, Navigate } from "react-router-dom";

export default function AuthLayout() {
const isAuthenticated = false;

    return (
<>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
            <img
                src="/assets/images/side-img1.jpg"
                alt="logo"
                className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
            />

            <section className="flex flex-1 justify-center items-center flex-col py-10">
                <Outlet />
            </section>
</>
      )}
        </>
    );
}
