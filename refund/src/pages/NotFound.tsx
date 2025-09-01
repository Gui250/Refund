export function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-2xl mb-10 text-gray-100 font-semibold">
          OPS! Essa página não existe
        </h1>
        <a
          href="/"
          className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
}
