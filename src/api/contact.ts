import sendEmailRequest from "@/helpers/sendEmail";
import { ContactRequestType } from "@/types/type";

export const sendMessage = async (data: ContactRequestType) => {
  try {
    const response = await sendEmailRequest(data);
    return response;
  } catch (error: unknown) {
    return error;
  }
};
