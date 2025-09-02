import { useState } from "react";
import { useNavigate } from "react-router";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";
export function Refund() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState<File | null>(null);

  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(name, category, amount, fileName);
    navigate("/confirm", { state: { fromSubmit: true } });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w[517px]"
    >
      <header>
        <h1 className="text-2xl font-bold">Solicitação de reembolso</h1>
        <p className="text-sm text-gray-200">
          Dados de despesa para solicitar reembolso
        </p>
      </header>

      <Input
        legend="Nome da solicitação"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex gap-4">
        <Select
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((category) => {
            return (
              <option key={category} value={category}>
                {CATEGORIES[category].name}
              </option>
            );
          })}
        </Select>

        <Input
          legend="valor"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <Upload
        fileName={fileName && fileName.name}
        onChange={(e) => e.target.files && setFileName(e.target.files[0])}
      />

      <Button type="submit" isLoading={isLoading}>
        Enviar
      </Button>
    </form>
  );
}
