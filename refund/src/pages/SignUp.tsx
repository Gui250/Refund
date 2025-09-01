import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(name, email, password, passwordConfirm);
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        legend="Nome"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        legend="E-mail"
        type="email"
        placeholder="Digite seu e-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        legend="Senha"
        type="password"
        placeholder="Digite sua senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        legend="Confirmar senha"
        type="password"
        placeholder="Digite sua senha"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Voltar para login
      </a>
    </form>
  );
}
