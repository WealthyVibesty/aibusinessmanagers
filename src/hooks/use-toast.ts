import { toast } from "sonner";

export function useToast() {
  return {
    toast: (props: any) => {
      toast(props, {
        position: "bottom-left",
      });
    },
  };
}