import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../api/auth/auth";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
  });

  return { logout, isLoading };
};
