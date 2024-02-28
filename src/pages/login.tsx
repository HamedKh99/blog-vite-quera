import LoginForm from "../components/login/login-form";

export default function Login() {
  return (
    <div className="flex bg-white w-3/4 border border-solid border-black rounded p-2">
      <div className="flex-1 flex bg-blue-700 h-96 rounded justify-center items-center">
        <h1 className="text-6xl text-white">کوئراگرام</h1>
      </div>

      <div className="flex-1 flex flex-col justify-between items-center pt-2">
        <h2 className="text-4xl basis-1/5 text-blue-700">
          ورود به حساب کاربری
        </h2>

        <LoginForm />

        <a href="#" className="self-end text-blue-700">
          ایجاد حساب
        </a>
      </div>
    </div>
  );
}
