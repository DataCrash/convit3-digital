import { Evento } from "../evento";

const eventos: Evento[] = [
  {
    id: "953fc6d6-5fbd-4afb-a84b-24735a13bc1d",
    alias: "evento-fullstack",
    senha: "senha123",
    nome: "Evento de Desenvolvimento Fullstack",
    data: new Date("2024-12-01T10:00:00Z"),
    local: "São Paulo, SP",
    descricao:
      "Um evento completo para aprender desenvolvimento fullstack do zero.",
    imagem:
      "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
    imagemBackground:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: "9b29f4ee-6a70-4600-be9e-9e650066f842",
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: "fa1e3ec5-51cd-47c1-a491-c5ff46d8212c",
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: "e976922f-57a4-47d5-a360-51d8324a9826",
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
    ],
  },
  {
    id: "3dea5ae9-fd21-47a4-a1e3-76b462ec7ba3",
    alias: "evento-js-avancado",
    senha: "js2024",
    nome: "Workshop Avançado de JavaScript",
    data: new Date("2024-11-20T15:00:00Z"),
    local: "Rio de Janeiro, RJ",
    descricao: "Um workshop avançado para programadores JavaScript.",
    imagem:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imagemBackground:
      "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    publicoEsperado: 100,
    convidados: [
      {
        id: "0ffbe095-1c89-4e5e-b56b-ce1aef24fe52",
        nome: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: "77288026-6d3d-40d2-9d7c-5a32281af7d5",
        nome: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
    ],
  },
  {
    id: "cea688bd-e48d-4fa5-86d1-f148b9defbd1",
    alias: "evento-dev-frontend",
    senha: "front123",
    nome: "Bootcamp de Desenvolvimento Frontend",
    data: new Date("2024-11-15T09:00:00Z"),
    local: "Belo Horizonte, MG",
    descricao: "Aprenda a criar interfaces incríveis e responsivas.",
    imagem:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imagemBackground:
      "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "6cb40cdd-df4c-40d1-89fb-f5b64859ae9d",
        nome: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: "cfb86f6a-1645-44b7-bf41-3404f2a68ce4",
        nome: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: "94a24db9-89d7-453b-a6eb-fe45c4c038f5",
        nome: "Isabela Martins",
        email: "isabela@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: "88627cf8-efeb-4adf-aa27-2e75e3304e9e",
    alias: "casamento-alberto-marina",
    senha: "casamento2024",
    nome: "Casamento do Alberto e Marina",
    data: new Date("2024-11-25T16:00:00Z"),
    local: "Florianópolis, SC",
    descricao:
      "Celebração do casamento de Alberto e Marina com amigos e familiares.",
    imagem:
      "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imagemBackground:
      "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "0fe78f63-bd1c-4f02-8a4c-063d1fea679d",
        nome: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: "3b53f1b9-194e-4af8-8aba-4deee74d7d40",
        nome: "Carla Mendes",
        email: "carla@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: "bc84b96b-b003-4552-8a98-6db99a1438e0",
    alias: "aniversario-joao",
    senha: "joao2024",
    nome: "Aniversário do João - 30 Anos",
    data: new Date("2024-12-05T18:00:00Z"),
    local: "Curitiba, PR",
    descricao:
      "Comemoração dos 30 anos de João com amigos próximos e familiares.",
    imagem:
      "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imagemBackground:
      "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    publicoEsperado: 80,
    convidados: [
      {
        id: "526e7b8b-f934-47ec-a11d-c37d90dc8354",
        nome: "Maria Souza",
        email: "maria@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
      {
        id: "6f40a663-daa3-483a-b46b-979b893d3259",
        nome: "José Almeida",
        email: "jose@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: "e62f1321-28f8-46ac-a6d8-98003f4ab3e1",
    alias: "inauguracao-loja-estrela",
    senha: "estrela2024",
    nome: "Inauguração da Loja Estrela",
    data: new Date("2024-12-10T09:00:00Z"),
    local: "Porto Alegre, RS",
    descricao:
      "Evento de inauguração da nova loja Estrela com brindes e promoções.",
    imagem:
      "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imagemBackground:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    publicoEsperado: 300,
    convidados: [
      {
        id: "f6909ae9-2cb5-4701-bcb6-d01a4c366f2d",
        nome: "Cláudia Lima",
        email: "claudia@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 3,
      },
      {
        id: "52311a03-34e0-4eff-a17e-a085727d2e37",
        nome: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
  {
    id: "c399622d-ee0c-4566-b3ad-957b602dc3e9",
    alias: "reuniao-familia-oliveira",
    senha: "familia2024",
    nome: "Reunião da Família Oliveira",
    data: new Date("2024-12-15T12:00:00Z"),
    local: "Salvador, BA",
    descricao: "Reunião de fim de ano da família Oliveira.",
    imagem:
      "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imagemBackground:
      "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    publicoEsperado: 50,
    convidados: [
      {
        id: "16350e0c-c57d-4c64-8b0d-b134a4267908",
        nome: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 4,
      },
      {
        id: "8a12d241-3a39-432c-ac0c-77adf516d530",
        nome: "Letícia Oliveira",
        email: "leticia@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
    ],
  },
];

export default eventos;
