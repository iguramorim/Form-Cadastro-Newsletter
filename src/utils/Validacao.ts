import { UserForm } from "../types/UserForm";

type Error = {
  [key: string]: string;
}

export const Validacao = (data: UserForm) => {
  const errors: Error = {};

  if (!data.name) {
    errors["name"] = "O nome é obrigatório";
  }
  if (!data.email) {
    errors["email"] = "O e-mail é obrigatório";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors["email"] = "O e-mail é inválido";
  }
  if (!data.agree) {
    errors["agree"] = "Você deve concordar com os termos";
  }

  return errors;
};