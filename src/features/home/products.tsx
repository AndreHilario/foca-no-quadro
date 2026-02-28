import { RevealSection } from "@/shared/components/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Sparkles } from "lucide-react";
import { ProductCard } from "@/shared/components/ProductCard";
import { mockProducts } from "@/mocks";

export function Products() {
  return (
    <RevealSection>
      <section className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <Badge variant="secondary" className="w-fit gap-2 rounded-full px-4 py-1.5">
              <Sparkles className="size-4" />
              Marketplace • PDFs prontos pra baixar
            </Badge>

            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Produtos em destaque
            </h2>

            <p className="max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
              Materiais digitais bem organizados, bonitos e objetivos. Compre, baixe e estude.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="gap-2 border-primary/30 bg-background/50 backdrop-blur hover:bg-background">
              <Filter className="size-4" />
              Filtrar
            </Button>
            <Button className="gap-2">
              Ver todos <span aria-hidden>→</span>
            </Button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mockProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-border/60 bg-background/60 p-6 backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold tracking-tight">
                Quer um material sob medida?
              </div>
              <div className="text-sm text-muted-foreground">
                A gente pode sugerir um kit (listas + revisão + e-book) pro seu objetivo.
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="secondary" className="text-secondary-foreground">
                Montar meu kit
              </Button>
              <Button variant="outline" className="border-primary/30 bg-background/50 backdrop-blur hover:bg-background">
                Falar comigo
              </Button>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/18 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-secondary/14 blur-3xl" />
      </section>
    </RevealSection>
  );
}