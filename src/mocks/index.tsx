import master from "@/assets/products/master.jpg";
import musica from "@/assets/products/musica.jpg";
import resumos from "@/assets/products/resumos.jpg";
import videos from "@/assets/products/videos.jpg";
import ligacoes from "@/assets/products/reportagens.jpg";
import simulado from "@/assets/products/sobre.jpg";
import type { Product } from "@/interfaces";

export const mockProducts: Product[] = [
    {
        id: 1,
        title: "Lista Premium — Estequiometria (com gabarito)",
        description:
            "Exercícios selecionados por dificuldade, com resolução e gabarito comentado.",
        price: 19.9,
        coverSrc: master,
        tag: "Mais vendido",
    },
    {
        id: 2,
        title: "E-book — Química Orgânica Essencial",
        description:
            "Funções orgânicas, nomenclatura e reações principais com exemplos e treino dirigido.",
        price: 29.9,
        coverSrc: musica,
        tag: "Top",
    },
    {
        id: 3,
        title: "Revisão ENEM — Química em 7 dias",
        description:
            "Cronograma enxuto e certeiro, com questões estilo ENEM e pontos mais cobrados.",
        price: 24.9,
        coverSrc: resumos,
        tag: "Reta final",
    },
    {
        id: 4,
        title: "Lista — Eletroquímica",
        description:
            "Pilhas, eletrólise e aplicações com exercícios progressivos e resolução completa.",

        price: 22.9,
        coverSrc: videos,
    },
    {
        id: 5,
        title: "Kit PDF — Ligações Químicas",
        description:
            "Teoria bem resumida + lista completa de exercícios com gabarito comentado.",
        price: 18.9,
        coverSrc: ligacoes,
        tag: "Base forte",
    },
    {
        id: 6,
        title: "Simulado PDF — Química Geral",
        description:
            "Simulado com questões selecionadas + correção guiada e checklist de revisão.",
        price: 16.9,
        coverSrc: simulado,
        tag: "Treino",
    },
];