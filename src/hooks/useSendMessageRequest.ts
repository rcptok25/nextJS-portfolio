import { sendMessage } from "@/api/contact";
import { useMutation } from "@tanstack/react-query";

export const useSendMessageRequest = () => {
  const {
    mutateAsync: handleSendMessage,
    isError,
    error,
    isIdle,
    status,
  } = useMutation({
    mutationKey: ["sendMessage"],
    mutationFn: sendMessage,
    retry: 0,
  });

  return { handleSendMessage, isError, error, isIdle, status };
};
