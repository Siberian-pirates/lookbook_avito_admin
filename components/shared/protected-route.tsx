"use client";

import { AuthService } from "@/services";
import { Spin } from "antd";
import { redirect, usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const token = AuthService.getAccessToken();

    if (!token || AuthService.isTokenExpired()) {
      setIsAuthorized(false);
      AuthService.clearTokens();
      redirect("/login");
    } else {
      setIsAuthorized(true);
    }
  }, [pathname]);

  if (!isAuthorized) return <Spin className="" />;

  return <Suspense fallback={<Spin className="" />}>{children}</Suspense>;
};

ProtectedRoute.displayName = "ProtectedRoute";

export { ProtectedRoute };
