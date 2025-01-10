import { toast as sonnerToast } from "sonner";

interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export function useToast() {
  const toast = (props: any) => {
    sonnerToast(props.title || props, {
      description: props.description,
      position: "bottom-left",
    });
  };

  // Mock the toasts array to maintain compatibility
  const toasts: Toast[] = [];

  return {
    toast,
    toasts,
  };
}

export { useToast as toast };