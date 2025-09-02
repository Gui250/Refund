import logoSvg from "../assets/logo.svg";
import logoutSvg from "../assets/logout.svg";

export function Header() {
  return (
    <header className="w-full flex justify-between items-center">
      <img src={logoSvg} alt="Logo" className="my-8" />

      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-gray-200">
          Olá, Rodrigo
        </span>

        <img src={logoutSvg} alt="Logout" className="cursor-pointer" />
      </div>
    </header>
  );
}
