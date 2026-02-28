import { RevealSection } from "@/shared/components/RevealSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import { Preview } from "./preview";
import { Products } from "./products";

export function Home() {
  return (
    <>
      <div className="bg-background text-foreground">
        <RevealSection>
          <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-40 left-[-120px] h-[520px] w-[520px] rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute -bottom-48 right-[-140px] h-[560px] w-[560px] rounded-full bg-secondary/25 blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
            </div>

            <div className="relative mx-auto grid min-h-[calc(100dvh-4rem)] max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="w-fit gap-2 rounded-full px-4 py-1.5 text-secondary-foreground"
                >
                  <Sparkles className="size-4" />
                  Marketplace de mentorias • Química em destaque
                </Badge>

                <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                  Estude com{" "}
                  <span className="text-primary">foco</span> e tenha{" "}
                  <span className="text-secondary">resultado</span>.
                </h1>

                <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                  Uma experiência moderna, leve e organizada para você aprender do jeito certo —
                  com mentorias, materiais e compras rápidas.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Button size="lg" className="gap-2">
                    Ver cursos <ArrowRight className="size-4" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 bg-background/50 backdrop-blur hover:bg-background"
                  >
                    Como funciona
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Pill>✅ Aulas objetivas</Pill>
                  <Pill>📚 PDFs + exercícios</Pill>
                  <Pill>⚡ Acesso imediato</Pill>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-secondary/20 blur-2xl" />

                <div className="rounded-[2rem] border border-border/60 bg-card/65 p-6 shadow-2xl backdrop-blur md:p-8">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-muted-foreground">
                      Foca no Quadro
                    </div>
                    <Badge className="rounded-full bg-secondary text-secondary-foreground">
                      Novidades
                    </Badge>
                  </div>

                  <div className="mt-6 flex items-center justify-center">
                    <img
                      src={logo}
                      alt="Foca no Quadro"
                      className="h-28 w-auto md:h-36 drop-shadow-sm"
                      loading="eager" />
                  </div>

                  <div className="mt-6 space-y-2 text-center">
                    <div className="text-xl font-semibold tracking-tight">
                      Cursos, e-books e revisões
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Tudo em um só lugar — escolha seu caminho e avance.
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <MiniStat title="+120" desc="aulas" />
                    <MiniStat title="PDFs" desc="extras" />
                    <MiniStat title="Trilhas" desc="guiadas" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>
      </div>
      <Preview />
      <Products />
    </>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-foreground/80 backdrop-blur">
      {children}
    </span>
  );
}

function MiniStat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background/60 px-3 py-3 text-center backdrop-blur">
      <div className="text-lg font-semibold leading-none">{title}</div>
      <div className="mt-1 text-xs text-muted-foreground">{desc}</div>
    </div>
  );
}