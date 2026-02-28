import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Sparkles } from "lucide-react";

export function Layout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex size-9 items-center justify-center rounded-xl border bg-muted">
              <Sparkles className="size-5" />
            </span>
            <span>Foca no Quadro</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="opacity-80 hover:opacity-100" href="#cursos">Cursos</a>
            <a className="opacity-80 hover:opacity-100" href="#beneficios">Benefícios</a>
            <a className="opacity-80 hover:opacity-100" href="#depoimentos">Depoimentos</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden md:inline-flex">
              Entrar
            </Button>
            <Button className="gap-2">
              <ShoppingBag className="size-4" />
              Começar
            </Button>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm opacity-75">
          © {new Date().getFullYear()} Foca no Quadro
        </div>
      </footer>
    </div>
  );
}