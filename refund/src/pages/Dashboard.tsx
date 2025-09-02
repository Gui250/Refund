import { Input } from "../components/Input";
import { useState } from "react";
import searchSvg from "../assets/search.svg";
import { Button } from "../components/Button";
import { RefundItem } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";
const REFUND_EXAMPLE = {
  id: "123",
  title: "Rodrigo",
  subtitle: "Alimentação",
  categoryImg: CATEGORIES.transport.icon,
  amount: "R$ 100,00",
};

export function Dashboard() {
  const [name, setName] = useState("");

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form className="flex flex-1 items-center justify-between pb-6 border-b[1px] border-b-gray-400 md:flex-row gap-3 mt-6">
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="iconSmall">
          <img src={searchSvg} alt="Search" />
        </Button>
      </form>

      <RefundItem data={REFUND_EXAMPLE} />
    </div>
  );
}
