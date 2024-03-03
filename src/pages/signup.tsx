import { Link } from "react-router-dom";
import AuthLayout from "../layouts/auth-layout";
import SignupForm from "../components/signup/signup-form";

export default function Signup() {
  return (
    <AuthLayout>
      <h2 className="text-4xl basis-1/5 text-blue-700">ساخت حساب کاربری</h2>

      <SignupForm />

      <Link to="/login" className="self-end text-blue-700">
        ورود
      </Link>
    </AuthLayout>
  );
}
