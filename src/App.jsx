import { useState } from "react";
import { api } from "./api";
import { schema } from "./Schema";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateForm = (e) => {
    e.preventDefault();
    const validPassword = schema.validate(userData.password);
    // console.log(validPassword);
    !validPassword && toast.error("Elige una contraseña mas segura");
    if (userData.username !== "" && userData.email !== "" && validPassword) {
      axios
        .post(`${api}/user`, userData)
        .then(() => {
          toast.success("Registrado exitosamente!");
        })
        .catch((err) => {
          toast.error("Algo salio mal!");
          console.log(err);
        });
    }
  };

  return (
    <>
      <Toaster />
      <div className="w-full max-w-xs mx-auto mt-40">
        <form
          onSubmit={(e) => validateForm(e)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Nombre de usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Correo electronico
            </label>
            <input
              className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="shadow bg-white appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*********"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <p className="text-red-500 text-xs italic">
              Elige una contraseña de alta seguridad
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button className="btn mx-auto btn-success w-3/4" type="submit">
              Enviar
            </button>
            {/* <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a> */}
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
      <div>{/* <div className="btn">jaja</div> */}</div>
    </>
  );
}

export default App;
