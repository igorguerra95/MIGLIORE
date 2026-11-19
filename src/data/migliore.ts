import heroResidenciaImg from '@/src/assets/images/hero_residencia_migliore_1795100763535.jpg';
import cozinhaGourmetImg from '@/src/assets/images/projeto_cozinha_gourmet_1795100763423.jpg';
import suiteClosetImg from '@/src/assets/images/projeto_suite_closet_1795100762687.jpg';
import corporativoDiretoriaImg from '@/src/assets/images/projeto_corporativo_diretoria_1795100763028.jpg';
import estudioSobreImg from '@/src/assets/images/estudio_sobre_arquitetura_1795100763211.jpg';
import type { PortfolioProject, ProcessStage, StudioMetric } from '@/src/types';

export const STUDIO_INFO = {
  brandName: 'MIGLIORE',
  fullTitle: 'MIGLIORE - Ambientes Planejados',
  address: 'SEU ENDEREÇO AQUI',
  phoneDisplay: '(00) 00000-0000',
  phoneDigits: '5500000000000',
  hours: 'Não informado',
  whatsappUrl:
    'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20conversa%20sobre%20um%20projeto%20com%20a%20MIGLIORE%20-%20Ambientes%20Planejados.',
} as const;

export const HERO_MEDIA = {
  image: heroResidenciaImg,
  alt: 'Living residencial com pé-direito duplo, marcenaria em carvalho natural, sofá azul-marinho e piso em travertino romano projetado pela MIGLIORE',
  captionTitle: 'Residência Jardim Europa',
  captionMeta: 'Arquitetura de Interiores · Marcenaria Estrutural · 420 m²',
};

export const STUDIO_VISION_MEDIA = {
  image: estudioSobreImg,
  alt: 'Mesa de trabalho do estúdio MIGLIORE com amostras de travertino, tecidos em linho azul-marinho, ferragens em latão escovado e plantas arquitetônicas',
};

export const STUDIO_METRICS: StudioMetric[] = [
  {
    id: 'projetos',
    value: 148,
    suffix: '+',
    label: 'Projetos Executados',
    detail: 'Residências, suítes e sedes corporativas entregues com precisão técnica.',
  },
  {
    id: 'anos',
    value: 14,
    suffix: '',
    label: 'Anos de Atuação',
    detail: 'Prática contínua entre arquitetura espacial e marcenaria sob medida.',
  },
  {
    id: 'area',
    value: 42,
    suffix: ' mil m²',
    label: 'Área Planejada',
    detail: 'Metragem detalhada com compatibilização executiva integral.',
  },
  {
    id: 'sob-medida',
    value: 100,
    suffix: '%',
    label: 'Desenho Autoral',
    detail: 'Cada mobiliário e encontro construtivo concebido exclusivamente para o espaço.',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'residencia-jardim-europa',
    title: 'Residência Jardim Europa',
    category: 'Residencial',
    location: 'São Paulo, SP',
    areaSqm: 420,
    year: '2025',
    image: heroResidenciaImg,
    imageAlt:
      'Sala de estar contemporânea com pé-direito duplo, painéis de carvalho natural e estofado azul-marinho sob medida',
    summary:
      'Integração vertical de living e mezanino por meio de estante monolítica em carvalho americano e caixilharia esbelta.',
    architecturalConcept:
      'A volumetria de pé-direito duplo exigia um elemento ordenador contínuo. Projetamos uma parede-estante em carvalho natural do piso ao teto que ancora a circulação, oculta os sistemas de climatização e dialoga com o travertino bruto do piso e o veludo azul-marinho do estar.',
    materials: [
      'Carvalho Americano Natural',
      'Mármore Travertino Levigado',
      'Veludo Naval Estruturado',
      'Latão Escovado',
    ],
    featured: true,
  },
  {
    id: 'pavilhão-gourmet-vila-nova',
    title: 'Pavilhão Gourmet Vila Nova',
    category: 'Residencial',
    location: 'São Paulo, SP',
    areaSqm: 165,
    year: '2025',
    image: cozinhaGourmetImg,
    imageAlt:
      'Cozinha planejada com ilha central ripada em azul-marinho, tampos em quartzito branco e armários piso-teto branco gelo',
    summary:
      'Cozinha e sala de jantar integradas com ilha escultural em marcenaria ripada azul-marinho e painéis em laca fosca.',
    architecturalConcept:
      'Conceito orientado à convivência silenciosa: eletrodomésticos totalmente embutidos atrás de portas mimetizadas em branco gelo, permitindo que a ilha em freijó tingido de azul-marinho e os nichos em nogueira iluminados assumam o protagonismo visual.',
    materials: [
      'Laca Acetinada Branco Gelo',
      'Ripado Azul-Marinho Profundo',
      'Quartzito Mont Blanc',
      'Nogueira Natural',
    ],
  },
  {
    id: 'suite-master-atelier',
    title: 'Suíte Master & Closet Atelier',
    category: 'Residencial',
    location: 'Campinas, SP',
    areaSqm: 110,
    year: '2024',
    image: suiteClosetImg,
    imageAlt:
      'Closet planejado com portas em vidro bronze, iluminação linear embutida e recamier em linho azul-marinho integrado à suíte',
    summary:
      'Transição fluida entre repouso e vestiário com vitrines em vidro bronze temperado e iluminação linear de baixa temperatura.',
    architecturalConcept:
      'O closet deixa de ser um corredor fechado para tornar-se uma galeria arquitetônica. Perfis de alumínio anodizado bronze emolduram prateleiras com iluminação indireta de 2700K, equilibrando transparência, privacidade e ordem absoluta.',
    materials: [
      'Vidro Reflecta Bronze',
      'Linho Belga Azul-Marinho',
      'Lâmina de Carvalho Claro',
      'Pedra Calcária Escovada',
    ],
  },
  {
    id: 'sede-executiva-faria-lima',
    title: 'Diretoria Executiva Faria Lima',
    category: 'Comercial',
    location: 'São Paulo, SP',
    areaSqm: 290,
    year: '2025',
    image: corporativoDiretoriaImg,
    imageAlt:
      'Sala de conselho executivo com painéis acústicos verticais em madeira, mesa monolítica em pedra clara e poltronas em couro azul-marinho',
    summary:
      'Espaço de conselho e recepção corporativa desenhado com painéis acústicos ripados, iluminação em sanca contínua e pedra monolítica.',
    architecturalConcept:
      'Projetado para traduzir solidez institucional sem ostentação. O revestimento vertical em carvalho garante desempenho acústico superior durante reuniões estratégicas, enquanto a mesa em travertino estrutural e as poltronas em couro naval estabelecem autoridade visual.',
    materials: [
      'Painel Acústico em Carvalho',
      'Couro Natural Azul-Marinho',
      'Travertino Romano Bruto',
      'Concreto Aparente Tratado',
    ],
  },
];

export const CREATIVE_PROCESS: ProcessStage[] = [
  {
    number: '01',
    title: 'Leitura Espacial & Briefing',
    subtitle: 'Imersão na rotina e nas condicionantes construtivas',
    description:
      'Mapeamento minucioso da incidência solar, fluxos de circulação, infraestrutura existente e exigências funcionais de cada morador ou equipe.',
    deliverable: 'Programa de Necessidades & Levantamento Métrico',
  },
  {
    number: '02',
    title: 'Partido Arquitetônico & Volumetria',
    subtitle: 'Proporção, luz e definição da paleta matérica',
    description:
      'Estudo de implantação mobiliária e maquetes eletrônicas com simulação real de texturas, luminotécnica e contraste entre cheios e vazios.',
    deliverable: 'Estudo Preliminar & Caderno de Materiais',
  },
  {
    number: '03',
    title: 'Detalhamento de Marcenaria & Obra',
    subtitle: 'Precisão milimétrica para execução sem improvisos',
    description:
      'Desenvolvimento de plantas técnicas executivas, paginações de pedra, pontos elétricos, forros e desenhos construtivos peça a peça.',
    deliverable: 'Projeto Executivo Completo & Caderno de Marcenaria',
  },
  {
    number: '04',
    title: 'Compatibilização & Entrega',
    subtitle: 'Acompanhamento de montagem e curadoria final',
    description:
      'Alinhamento técnico junto aos fornecedores e marceneiros, conferência de acabamentos em obra e ambientação final dos espaços.',
    deliverable: 'Vistoria Técnica & Manual do Ambiente Planejado',
  },
];

export const CLIENT_ENDORSEMENT = {
  quote:
    'A precisão do desenho executivo e o domínio sobre a marcenaria transformaram nossa residência em um espaço silencioso, funcional e atemporal. Cada encontro entre madeira, pedra e luz foi resolvido antes mesmo da obra começar.',
  author: 'Henrique & Carolina Albuquerque',
  context: 'Residência Jardim Europa · Projeto Residencial Completo (420 m²)',
};
