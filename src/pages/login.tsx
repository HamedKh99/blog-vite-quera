import { Link } from "react-router-dom";
import LoginForm from "../components/login/login-form";
import AuthLayout from "../layouts/auth-layout";

export default function Login() {
  return (
    <AuthLayout>
      <h2 className="text-4xl basis-1/5 text-blue-700">ورود به حساب کاربری</h2>

      <LoginForm />

      <Link to="/signup" className="self-end text-blue-700">
        ایجاد حساب
      </Link>
    </AuthLayout>
  );
}
