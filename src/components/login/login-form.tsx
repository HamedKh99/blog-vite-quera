import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const navigate = useNavigate();

  async function onSubmit(data: LoginFormData) {
    const response = await axios.post("/api/login/", data);
    navigate("/");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="basis-3/5 flex flex-col gap-y-8 items-center w-full"
    >
      <input
        type="email"
        id="email"
        className="border text-md rounded py-2 px-4 w-3/4"
        placeholder="ایمیل"
        {...register("email", { required: true })}
      />

      <input
        type="password"
        id="password"
        className="border text-md rounded py-2 px-4 w-3/4"
        placeholder="گذرواژه"
        required
        {...register("password", { required: true })}
      />

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded text-sm px-5 py-2.5 w-1/3 text-center"
      >
        ورود
      </button>
    </form>
  );
}
