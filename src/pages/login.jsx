import React from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen justify-center items-center text-primary">
        <div className="flex flex-col items-center p-5 rounded-xl shadow-xl w-1/4 bg-white">
          <div className="flex items-center gap-x-2 mt-3">
            <img src={logo} alt="logo" srcset="" className="w-10 object-cover" />
            <div className="text-xl font-semibold">
              Cripto Drive
            </div>
          </div>
          <form action="" method="post" className="flex flex-col items-center mt-7 w-full">
            <div class="mb-6 w-3/4">
              <input class="shadow appearance-none border rounded py-2 px-3 text-primary
              leading-tight focus:outline-none focus:shadow-outline w-full bg-lightColor text-sm"
                name="username" type="text" autoComplete="off"
                placeholder="user@email.com" />
            </div>
            <div className="mb-7 w-3/4">
              <div className="relative">
                <input
                  className="appearance-none shadow border bg-lightColor rounded w-full py-2 px-3 
                  text-sm text-primary leading-tight focus:outline-none 
                  focus:shadow-outline"
                  placeholder="*********" type="password" name="password" />
                <button type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M3 13c3.6-8 14.4-8 18 0" /><path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z" /></g></svg>
                </button>
              </div>
            </div>
            <div class="flex items-center justify-between w-3/4">
              <button class="bg-primary hover:bg-secondary font-semibold py-2 px-4 border 
              border-lightGrey rounded-xl w-full text-lightColor text-sm
              focus:outline-none focus:shadow-outline" type="submit">
                Login
              </button>
            </div>
          </form>
          <div className="pt-2 text-xs text-tertiary">
            Belum memiliki akun?
            <Link to="/register" className="text-primary font-semibold pl-1 hover:text-secondary">
              register
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage;