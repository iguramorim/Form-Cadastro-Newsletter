import { User, Mail } from "lucide-react";
import { useState, FormEvent } from "react";
import { UserForm } from "../types/UserForm";
import { Validacao } from "../utils/Validacao";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [erros, setErros] = useState<{ [key: string]: string } | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data: UserForm = {
      name,
      email,
      agree,
    };

    const validationErrors = Validacao(data);

    if (Object.keys(validationErrors).length > 0) {
      setErros(validationErrors);
    } else {
      setErros(null);
      alert("Formulário enviado com sucesso!");
      // Submeter os dados
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1 mt-8">
      <div className="flex border-2 border-solid border-white border-opacity-5 rounded-md">
        <label htmlFor="name" className="py-3 px-4 cursor-pointer">
          <User />
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          className="w-full bg-transparent py-3 outline-none"
        />
      </div>
      {erros?.name && <p className="text-red-500 text-sm">{erros.name}</p>}

      <div className="flex border-2 border-solid border-white border-opacity-5 rounded-md mt-3">
        <label htmlFor="email" className="py-3 px-4 cursor-pointer">
          <Mail />
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          className="w-full bg-transparent py-3 outline-none"
        />
      </div>
      {erros?.email && <p className="text-red-500 text-sm">{erros.email}</p>}

      <div className="mt-4 flex flex-col gap-1">
        <a href="#" className="text-xs hover:underline">
          Leia os termos
        </a>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="cursor-pointer scale-110"
          />
          <label
            htmlFor="agree"
            className="text-sm cursor-pointer hover:underline"
          >
            Concordo com os termos
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 bg-blue-500 py-3 rounded-md hover:bg-opacity-90"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;