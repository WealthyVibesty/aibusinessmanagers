import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useContactCapture() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pendingRedirect, setPendingRedirect] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleButtonClick = (redirectPath: string) => {
    setPendingRedirect(redirectPath);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setPendingRedirect(null);
  };

  const handleSuccess = () => {
    if (pendingRedirect) {
      navigate(pendingRedirect);
    }
  };

  return {
    isDialogOpen,
    handleButtonClick,
    handleDialogClose,
    handleSuccess,
  };
}