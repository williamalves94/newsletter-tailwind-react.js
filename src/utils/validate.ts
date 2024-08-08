import { User } from "../types/User";

type Error = {
  [key: string]: string;
};

export const validate = (data: User) => {
  const error: Error = {};

  if (!data.name) {
    error["name"] = "O nome é obrigatório";
  }

  if (!data.email) {
    error["email"] = "O email é obrigatório";
  }

  if (!data.agree) {
    error["agree"] = "Voce precisa concordar com os termos";
  }
  return error;
};
