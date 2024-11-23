import { useEffect } from "react";
import { useRouter } from "next/router";
import HomeTemplate from "@/components/templates/HomeTemplate";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem("token");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return <HomeTemplate />;
};

export default HomePage;
