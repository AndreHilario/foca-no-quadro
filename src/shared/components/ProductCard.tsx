import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import type { Product } from "@/interfaces";
import { Link } from "react-router-dom";

function formatBRL(value: number) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function ProductCard({ product }: { product: Product }) {
    return (
        <Card className="group relative overflow-hidden rounded-3xl border-border/60 bg-card/65 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-2xl">
            <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/18 blur-3xl opacity-0 transition group-hover:opacity-100" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-secondary/14 blur-3xl opacity-0 transition group-hover:opacity-100" />

            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <img
                    src={product.coverSrc}
                    alt={product.title}
                    className="h-44 w-full object-cover md:h-48"
                    loading="lazy"
                />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                    <Badge className="rounded-full bg-secondary text-secondary-foreground">
                        <FileText className="mr-1 size-3.5" />
                        PDF
                    </Badge>

                    {product.tag && (
                        <Badge variant="secondary" className="rounded-full gap-1">
                            <Sparkles className="size-3.5" />
                            {product.tag}
                        </Badge>
                    )}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-white">
                        {product.title}
                    </h3>
                </div>
            </div>

            <CardHeader className="space-y-2 pb-2">
                <p className="line-clamp-3 text-sm text-muted-foreground">
                    {product.description}
                </p>
            </CardHeader>

            <CardContent className="pt-0">
                <div className="flex items-end justify-between gap-3">
                    <div>
                        <div className="text-xs text-muted-foreground">Preço</div>
                        <div className="text-2xl font-semibold tracking-tight text-foreground">
                            {formatBRL(product.price)}
                        </div>
                    </div>

                    <div className="text-right text-xs text-muted-foreground">
                        <div>Entrega imediata</div>
                        <div>Download após compra</div>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between gap-3">
                <Button asChild variant="outline" className="hidden w-35 md:inline-flex">
                    <Link to={`/product/${product.id}`}>Ver detalhes</Link>
                </Button>
                <Button className="w-40 gap-2">
                    Comprar agora <ArrowRight className="size-4" />
                </Button>


            </CardFooter>
        </Card>
    );
}