import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold text-[rgb(81,97,112)]">Página não encontrada</h1>
      <p className="text-sm text-[rgb(116,136,153)]">O endereço que você acessou não existe.</p>
      <Link href="/" className="text-sm font-semibold text-[rgb(61,180,242)] underline">
        Voltar ao início
      </Link>
    </div>
  );
}
