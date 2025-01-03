import { useContext, useState } from "react";
import UserContext from "../Context/AuthContext";
import { toast } from "keep-react";

function Login() {
  const { GoogleLogin, LogOut, user } = useContext(UserContext);
  const [err, seterr] = useState("");
  const handleGoogleLogin = async () => {
    const result = await GoogleLogin();
    if (result.user.email === "juwelrana3426@gmail.com") {
      toast.success("Login Success");
    } else {
      toast.error("not allowed for login");
      LogOut();
      seterr("not allowed for login");
      return;
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center space-y-5">
        {user && (
          <h1>
            {user?.email}
            <img
              className="w-16  h-16 rounded-full mx-auto my-5"
              src={user?.photoURL}
              alt=""
            />
          </h1>
        )}
        <div className="space-x-5">
          {user ? (
            <button
              onClick={LogOut}
              className="bg-red-500   hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
            >
              logout
            </button>
          ) : (
            <button
              onClick={handleGoogleLogin}
              className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          )}
        </div>
        <p className="text-red-500 font-semibold animate-pulse">{err}</p>
      </div>
    </div>
  );
}

export default Login;
