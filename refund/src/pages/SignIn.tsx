import { Input } from "../components/Input";

export function SignIn() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input legend="E-mail" type="email" placeholder="Digite seu e-mail" />
      <Input legend="Senha" type="password" placeholder="Digite sua senha" />
    </form>
  );
}
