import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const usePathname = () => {
  const { pathname } = useLocation();

  return useMemo(() => pathname, [pathname]);
};

export default usePathname;
