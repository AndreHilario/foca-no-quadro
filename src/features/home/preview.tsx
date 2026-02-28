import { RevealSection } from "@/shared/components/RevealSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    BookOpen,
    NotebookPen,
    ClipboardList,
    Sparkles,
    ArrowRight,
    Play,
} from "lucide-react";

const YT_EMBED_URL = "https://www.youtube.com/embed/h4eHzT2DcsM";

export function Preview() {
    return (
        <RevealSection>
            <section className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="space-y-3">
                        <Badge
                            variant="secondary"
                            className="w-fit gap-2 rounded-full px-4 py-1.5"
                        >
                            <Sparkles className="size-4" />
                            Degustação do Marketplace
                        </Badge>

                        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                            Veja tudo que você encontra no{" "}
                            <span className="text-primary">Foca no Quadro</span>
                        </h2>

                        <p className="max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
                            Conteúdos organizados para você aprender rápido: cursos,
                            e-books, revisões, listas e muito mais. E já deixamos um vídeo
                            rolando pra você sentir a vibe.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Button className="gap-2">
                            Explorar agora <ArrowRight className="size-4" />
                        </Button>
                        <Button
                            variant="outline"
                            className="border-primary/30 bg-background/50 backdrop-blur hover:bg-background"
                        >
                            Ver categorias
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-12">
                    <div className="grid gap-4 lg:col-span-7 md:grid-cols-2">
                        <FeatureCard
                            icon={<BookOpen className="size-5" />}
                            title="Cursos"
                            desc="Aulas objetivas com trilhas e material de apoio."
                            tag="Principal"
                        />
                        <FeatureCard
                            icon={<ClipboardList className="size-5" />}
                            title="Listas e Exercícios"
                            desc="Listas por tema + exercícios selecionados pra fixar."
                            tag="Treino"
                        />
                        <FeatureCard
                            icon={<NotebookPen className="size-5" />}
                            title="E-books"
                            desc="Resumos, guias e conteúdo direto ao ponto."
                            tag="Prático"
                        />
                        <FeatureCard
                            icon={<Play className="size-5" />}
                            title="Revisões"
                            desc="Revisões guiadas do que mais cai e o que mais importa."
                            tag="Reta final"
                        />

                    </div>

                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-card/65 shadow-2xl backdrop-blur">
                            <div className="flex items-center justify-between gap-3 border-b border-border/60 px-5 py-8">
                                <div className="min-w-0">
                                    <div className="truncate text-sm font-medium">
                                        Assista um conteúdo agora
                                    </div>
                                    <div className="truncate text-xs text-muted-foreground">
                                        YouTube • Degustação do canal
                                    </div>
                                </div>

                                <Badge className="rounded-full bg-secondary text-secondary-foreground">
                                    Ao vivo
                                </Badge>
                            </div>

                            <div className="p-4">
                                <div className="relative aspect-video overflow-hidden rounded-2xl">
                                    <iframe
                                        className="absolute inset-0 h-full w-full"
                                        src={YT_EMBED_URL}
                                        title="Degustação - Foca no Quadro"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>

                                <div className="mt-4 rounded-2xl border border-border/60 bg-background/60 p-4">
                                    <div className="text-sm font-semibold">
                                        Dica rápida:
                                        <span className="text-muted-foreground font-normal">
                                            {" "}
                                            salve este conteúdo e continue de onde parou.
                                        </span>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <MiniChip>💜 Foco</MiniChip>
                                        <MiniChip>💚 Foco na Química</MiniChip>
                                        <MiniChip>⚡ Foco no Vestibular</MiniChip>
                                    </div>
                                </div>
                            </div>

                            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>
        </RevealSection>
    );
}

function FeatureCard({
    icon,
    title,
    desc,
    tag,
    wide,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    tag: string;
    wide?: boolean;
}) {
    return (
        <Card
            className={[
                "group relative overflow-hidden rounded-3xl border-border/60 bg-card/65 shadow-sm backdrop-blur transition",
                "hover:-translate-y-0.5 hover:shadow-xl",
                wide ? "p-0" : "",
            ].join(" ")}
        >
            <CardHeader className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        {icon}
                    </div>
                    <Badge variant="secondary" className="rounded-full">
                        {tag}
                    </Badge>
                </div>

                <CardTitle className="text-xl tracking-tight">{title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{desc}</p>

                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    Explorar <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </div>
            </CardContent>

            {/* subtle gradient overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />
            </div>
        </Card>
    );
}

function MiniChip({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-foreground/80">
            {children}
        </span>
    );
}