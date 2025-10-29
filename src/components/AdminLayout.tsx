import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminAuth");
    if (!isAdmin) {
      toast.error("Access denied. Admin login required.");
      navigate("/admin/login");
    }
  }, [navigate]);

  const isAdmin = localStorage.getItem("adminAuth");

  if (!isAdmin) {
    return null;
  }

  return <Outlet />;
};

export default AdminLayout;
