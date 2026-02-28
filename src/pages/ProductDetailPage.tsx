import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { RevealSection } from "@/shared/components/RevealSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Download, Shield, Sparkles } from "lucide-react";
import { mockProducts } from "@/mocks";


function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function ProductDetailPage() {
  const { productId } = useParams();

  const product = useMemo(
    () => mockProducts.find((p) => p.id === Number(productId)),
    [productId]
  );
  console.log(product)
  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-border/60 bg-card/65 p-8 backdrop-blur">
          <div className="text-xl font-semibold">Produto não encontrado</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Verifique o link ou volte para o marketplace.
          </p>
          <Button asChild className="mt-6">
            <Link to="/">Voltar para Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
      <RevealSection>
        <div className="mb-6 flex items-center justify-between gap-3">
          <Button
            asChild
            variant="outline"
            className="border-primary/30 bg-background/50 backdrop-blur hover:bg-background"
          >
            <Link to="/" className="gap-2 inline-flex items-center">
              <ArrowLeft className="size-4" />
              Voltar
            </Link>
          </Button>

          <div className="text-xs text-muted-foreground">
            <span className="opacity-70">Marketplace</span>{" "}
            <span className="opacity-50">/</span>{" "}
            <span className="text-foreground/80">{product.title}</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-card/65 shadow-2xl backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
              <img
                src={product.coverSrc}
                alt={product.title}
                className="h-[600px] w-full object-cover"
              />

              <div className="absolute left-5 top-5 flex items-center gap-2">
                <Badge className="rounded-full bg-secondary text-secondary-foreground">
                  PDF
                </Badge>
                {product.tag && (
                  <Badge variant="secondary" className="rounded-full gap-1">
                    <Sparkles className="size-3.5" />
                    {product.tag}
                  </Badge>
                )}
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-white/90 text-sm">Material digital</div>
                <div className="text-white text-2xl font-semibold tracking-tight">
                  {formatBRL(product.price)}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5">
              <div className="space-y-2">
                <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  {product.title}
                </h1>
                <p className="text-base text-muted-foreground md:text-lg">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <MiniChip>
                  <Download className="size-4" /> Download imediato
                </MiniChip>
                <MiniChip>
                  <Shield className="size-4" /> Compra segura
                </MiniChip>
                <MiniChip>
                  <Check className="size-4" /> Conteúdo objetivo
                </MiniChip>
              </div>

              <Card className="rounded-3xl border-border/60 bg-card/65 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Preço</div>
                      <div className="text-3xl font-semibold tracking-tight">
                        {formatBRL(product.price)}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        Acesso imediato após confirmação.
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button size="lg" className="gap-2">
                        Comprar agora <Download className="size-4" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-primary/30 bg-background/50 backdrop-blur hover:bg-background"
                      >
                        Ver conteúdo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <InfoCard
                  title="O que vem no PDF"
                  items={[
                    "Resumo direto ao ponto",
                    "Exercícios selecionados",
                    "Gabarito (quando aplicável)",
                    "Checklist de revisão",
                  ]}
                />
                <InfoCard
                  title="Ideal para"
                  items={[
                    "Revisão rápida",
                    "Fixação por exercícios",
                    "ENEM/Vestibular",
                    "Acelerar o estudo",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}

function MiniChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-foreground/80">
      {children}
    </span>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="rounded-3xl border-border/60 bg-card/65 backdrop-blur">
      <CardContent className="p-6">
        <div className="text-sm font-semibold">{title}</div>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {items.map((i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 inline-block size-2 rounded-full bg-secondary" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}