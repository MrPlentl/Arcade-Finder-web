"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import NavigationBar from '@/components/NavigationBar';

export default function HomePage() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("session_token");
    router.push("/login");
  };

  return (
    <div className="login-container">
      <NavigationBar />
      <div>
        <h1>Welcome to the Arcade Locator!</h1>
        <button onClick={handleLogout}  className="login-form button">Logout</button>
      </div>
    </div>
  );
}
