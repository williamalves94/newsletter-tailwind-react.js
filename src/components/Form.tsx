import React from "react";
import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [error, setError] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setError(null);

    const data: User = {
      name,
      email,
      agree,
    };

    const validateError = validate(data);

    if (Object.keys(validateError).length > 0) {
      setError(validateError);
      return;
    }

    alert("Obrigado por se inscrever!");

    setName("");
    setEmail("");
    setAgree(false);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm">Nome</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Digite seu nome"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        />
      </div>

      {error?.name && (
        <small className="text-xs text-red-500">{error?.name}</small>
      )}

      <div className="flex flex-col">
        <label className="text-sm">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Digite seu e-mail"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
        />
      </div>

      {error?.email && (
        <small className="text-xs text-red-500">{error?.email}</small>
      )}

      <div className="flex flex-col">
        <a href="" className="text-xs underline mb-2">
          Leia os termos
        </a>
        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="text-sm" htmlFor="agree">
            Concordo com os termos
          </label>
        </div>
      </div>

      {error?.agree && (
        <small className="text-xs text-red-500">{error?.agree}</small>
      )}

      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
