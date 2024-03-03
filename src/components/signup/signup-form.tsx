import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignupFormData } from "../../types/types";
import auth from "../../auth";

export default function SignupForm() {
  const { register, handleSubmit } = useForm<SignupFormData>();
  const navigate = useNavigate();

  async function onSubmit(data: SignupFormData) {
    try { 
      await auth.signup(data);
      navigate("/");
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="basis-3/5 flex flex-col gap-y-8 items-center w-full"
    >
      <input
        id="username"
        className="border text-md rounded py-2 px-4 w-3/4"
        placeholder="نام کاربری"
        {...register("username", { required: true })}
      />

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
        {...register("password", { required: true })}
      />

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded text-sm px-5 py-2.5 w-1/3 text-center"
      >
        ثبت‌نام
      </button>
    </form>
  );
}
