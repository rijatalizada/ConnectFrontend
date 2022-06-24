import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const url = "https://localhost:44336/api/Auth/register";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [newPass, setNewPass] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      firstName: firstname,
      lastName: lastname,
      username: username,
      email: email,
      password: newPass,
      confirmPassword: confirmPass,
    };

    try {
      const request = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await request.json();

      if (res.title !== null) {
        setIsError(false);
        navigate("/login");
      } else {
        setError(res.title);
        console.log(res.title);
        setIsError(true);
        setUsername("");
        setNewPass("");
        setConfirmPass("");
        setEmail("");
        setFirstname("");
        setLastname("");

      }
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        setError("Network Error");
      }
    }
  };

  const passwordInput = useRef<HTMLInputElement>(null);
  const confirmPaswordInput = useRef<HTMLInputElement>(null);

  const setPasswordType = () => {
    passwordInput.current!.type =
      passwordInput.current!.type === "password" ? "text" : "password";
  };

  const setConfirmPasswordType = () => {
    confirmPaswordInput.current!.type =
    confirmPaswordInput.current!.type === "password" ? "text" : "password";
  };

  return (
    <div className="grid vs:grid-cols-1 lg:!grid-cols-[30%,80%]">
      <div
        style={{
          backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/connectimages-7c610.appspot.com/o/loginImg.jpg?alt=media&token=4a55322f-7a6b-41d0-9519-295c49edb5b3)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
        className="relative vs:hidden lg:!block "
      >
        {/* <div className="absolute left-0 top-0 w-full h-full bg-cover bg-center bg-black opacity-[0.2] z-[-1]"></div> */}
        <div className="p-6">
          <Link to={"/"} className="cursor-pointer w-full">
            {" "}
            
            <img
              className="w-[10rem] z-10 "
              src="https://firebasestorage.googleapis.com/v0/b/connectimages-7c610.appspot.com/o/Connect(logo).png?alt=media&token=780d0634-6cf9-45cd-b06f-832256f06d00"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="bg-color-primary flex h-[100vh] items-center justify-center text-white">
        <div>
          <p className="text-[1.3rem]">
            Start <span className="font-bold">CONNECT</span>ing below
          </p>
          <div className="navigation flex">
            <Link to="/login" className="">
              <p className="mt-5 text-color-secondary border-b-2 pb-2 mr-4 opacity-[0.7]">
                Login
              </p>
            </Link>
            <Link to="/register" className="">
              <p className="mt-5 text-color-secondary border-b-2 pb-2 ">
                Register
              </p>
            </Link>
          </div>
          {isError && <p className="text-red-500 mt-5">{error}</p>}
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className=" my-5 rounded-md block text-color-primary p-2 text-[1rem] w-[20rem] focus:outline-none "
              placeholder="Firstname"
            />
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className=" rounded-md block text-color-primary p-2 text-[1rem] w-[20rem] focus:outline-none "
              placeholder="Lastname"
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="my-5 rounded-md block text-color-primary p-2 text-[1rem] w-[20rem] focus:outline-none "
              placeholder="Username"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" block rounded-md  text-color-primary p-2 text-[1rem] w-[20rem] focus:outline-none "
              placeholder="E-mail Address"
            />
            <input
              type="password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="my-5  text-color-primary  rounded-md p-2 text-[1rem] w-[20rem] focus:outline-none "
              placeholder="Password"
              ref={passwordInput}
            />
            <AiOutlineEyeInvisible
              className="inline mx-4 cursor-pointer"
              onClick={() => setPasswordType()}
            />
            <div className="">
              <input
                type="password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                className=" text-color-primary  rounded-md p-2 text-[1rem] w-[20rem] focus:outline-none "
                placeholder="Confirm Password"
                ref={confirmPaswordInput}
              />
              <AiOutlineEyeInvisible
                className="inline mx-4 cursor-pointer"
                onClick={() => setConfirmPasswordType()}
              />
            </div>
            <button className="mt-5 bg-color-secondary py-2 px-9 text-color-primary rounded-md  ">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
