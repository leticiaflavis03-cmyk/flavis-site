import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Gauge,
  Mail,
  MessageCircle,
  ServerCog,
  Shield,
  Smartphone,
  Thermometer,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";

const phoneNumber = "5562982428568";

const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const buildEmailUrl = (subject: string, body: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=comercial@flavis.com.br&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const whatsappUrl = buildWhatsAppUrl(
  "Olá, quero conhecer as soluções da Flavis para resfriamento médico."
);
const auditUrl = buildWhatsAppUrl(
  "Olá, gostaria de agendar uma auditoria de confiabilidade com a Flavis."
);
const emailComposeUrl = buildEmailUrl(
  "Contato pelo site Flavis",
  "Olá, quero saber mais sobre as soluções da Flavis."
);
const specsComposeUrl = buildEmailUrl(
  "Especificações técnicas Flavis IoT",
  "Olá, quero receber as especificações técnicas do Transmissor Flavis IoT."
);

const images = {
  logo: "https://flavismed-5iuhpp6j.manus.space/manus-storage/flavis_logo_f575c896.png",
  hero: "https://flavismed-5iuhpp6j.manus.space/manus-storage/flavis_hero_bg_81db3e38.png",
  technology: "https://flavismed-5iuhpp6j.manus.space/manus-storage/flavis_technology_bg_ba46e6d1.png",
};

const navItems = [
  { label: "Soluções", href: "#solutions" },
  { label: "Planos", href: "#plans" },
  { label: "Tecnologia", href: "#technology" },
  { label: "Contato", href: "#contact" },
];

const indicators = [
  { value: "24/7", label: "monitoramento contínuo" },
  { value: "IoT", label: "dados técnicos em tempo real" },
  { value: "SLA", label: "rotina clara de atendimento" },
];

const solutions = [
  {
    icon: Shield,
    title: "Manutenção com método",
    desc: "Rotinas preventivas, checklists e relatórios técnicos para reduzir improvisos e proteger equipamentos críticos.",
  },
  {
    icon: Smartphone,
    title: "Monitoramento remoto",
    desc: "Sensores acompanham temperatura, umidade e eventos relevantes com histórico rastreável para auditoria.",
  },
  {
    icon: TrendingUp,
    title: "Decisão baseada em dados",
    desc: "Indicadores objetivos ajudam a priorizar chamados, antecipar falhas e justificar investimentos em confiabilidade.",
  },
];

const plans = [
  {
    id: "start",
    name: "START",
    subtitle: "Prevenção essencial",
    ideal: "Clínicas e operações menores",
    features: [
      "Inspeção preventiva mensal",
      "Checklist técnico padronizado",
      "Relatório de condição dos ativos",
      "Suporte em horário comercial",
    ],
  },
  {
    id: "smart",
    name: "SMART",
    subtitle: "Confiabilidade assistida",
    ideal: "Hospitais e centros de diagnóstico",
    highlighted: true,
    features: [
      "Monitoramento online 24h",
      "Dashboard de temperatura e alarmes",
      "Visitas técnicas quinzenais",
      "SLA de atendimento",
      "Relatórios executivos e técnicos",
    ],
  },
  {
    id: "monitor",
    name: "MONITOR",
    subtitle: "Dados para equipe própria",
    ideal: "Empresas com manutenção interna",
    features: [
      "Sensores e transmissão multiparâmetro",
      "Painel de acompanhamento em tempo real",
      "Regras de alerta configuráveis",
      "Histórico para auditoria e análise",
      "Base para manutenção preditiva",
    ],
  },
];

const processSteps = [
  { icon: ClipboardCheck, title: "Diagnóstico", desc: "Mapeamos os ativos, riscos e pontos de medição mais importantes." },
  { icon: ServerCog, title: "Instrumentação", desc: "Instalamos sensores e configuramos alertas conforme a criticidade da operação." },
  { icon: Wrench, title: "Acompanhamento", desc: "A equipe recebe dados, relatórios e ações de manutenção com prioridade clara." },
];

const dashboardMetrics = [
  { label: "Disponibilidade", value: "99,2%", icon: Activity },
  { label: "Ativos online", value: "42", icon: Gauge },
  { label: "Alertas críticos", value: "03", icon: AlertTriangle },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1f2933]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#20BA5A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35"
        aria-label="Falar com a Flavis pelo WhatsApp"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>

      <header className="fixed top-0 z-50 w-full border-b border-[#d9e2ec] bg-white/95 backdrop-blur-md">
        <nav className="container flex h-16 items-center justify-between" aria-label="Navegação principal">
          <a href="#home" className="flex items-center gap-3" aria-label="Ir para o início">
            <img src={images.logo} alt="Flavis" className="h-9 w-auto md:h-10" />
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-[#243b53] transition hover:text-[#003366]">
                {item.label}
              </a>
            ))}
          </div>
          <Button asChild className="bg-[#003366] text-white hover:bg-[#002244]">
            <a href={auditUrl} target="_blank" rel="noopener noreferrer">
              Agendar conversa
            </a>
          </Button>
        </nav>
        <div className="border-t border-[#eef3f7] bg-white md:hidden">
          <div className="container flex gap-5 overflow-x-auto py-3 text-sm font-medium text-[#243b53]">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="shrink-0 transition hover:text-[#003366]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main id="home">
        <section className="bg-gradient-to-br from-white via-[#F5F7FA] to-[#E8F4F8] px-4 pb-16 pt-36 md:px-0 md:pb-20 md:pt-32">
          <div className="container mx-auto max-w-6xl">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_0.92fr] md:gap-12">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#003366] shadow-sm ring-1 ring-[#d9e2ec]">
                  <CheckCircle2 className="h-4 w-4 text-[#4CAF50]" aria-hidden="true" />
                  Engenharia de confiabilidade para resfriamento médico
                </div>
                <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight text-[#003366] md:text-6xl">
                  Menos falhas, mais controle e decisões técnicas com dados reais
                </h1>
                <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#52606d] md:text-xl">
                  A Flavis integra manutenção especializada, sensores IoT e monitoramento contínuo para proteger sistemas de resfriamento em ambientes médicos críticos.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="h-12 bg-[#4CAF50] px-7 text-white hover:bg-[#3d8b40]">
                    <a href={auditUrl} target="_blank" rel="noopener noreferrer">
                      Agendar auditoria <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-12 border-[#003366] px-7 text-[#003366] hover:bg-[#E8F4F8]">
                    <a href="#plans">Comparar planos</a>
                  </Button>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {indicators.map((item) => (
                    <div key={item.value} className="rounded-lg border border-[#d9e2ec] bg-white/80 p-4">
                      <p className="text-2xl font-bold text-[#003366]">{item.value}</p>
                      <p className="text-sm text-[#627d98]">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-2xl ring-1 ring-[#d9e2ec]">
                <img
                  src={images.hero}
                  alt="Ambiente médico com equipamentos monitorados por solução de resfriamento"
                  className="h-[300px] w-full object-cover sm:h-[380px] md:h-[460px]"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="bg-white px-4 py-16 md:px-0 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#4CAF50]">Solução integrada</p>
              <h2 className="mb-4 text-3xl font-bold text-[#003366] md:text-4xl">Confiabilidade não pode depender de reação tardia</h2>
              <p className="text-lg leading-relaxed text-[#52606d]">
                Equipamentos médicos e ambientes refrigerados exigem previsibilidade. A Flavis organiza a rotina técnica, monitora variáveis críticas e transforma ocorrências em ações claras para manutenção e gestão.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {solutions.map((item) => (
                <Card key={item.title} className="border border-[#d9e2ec] bg-[#F8FAFC] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <item.icon className="mb-4 h-11 w-11 text-[#4CAF50]" aria-hidden="true" />
                  <h3 className="mb-3 text-xl font-bold text-[#003366]">{item.title}</h3>
                  <p className="leading-relaxed text-[#52606d]">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="bg-gradient-to-br from-[#F5F7FA] to-white px-4 py-16 md:px-0 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#4CAF50]">Planos de serviço</p>
              <h2 className="mb-4 text-3xl font-bold text-[#003366] md:text-4xl">Escolha o nível certo de acompanhamento</h2>
              <p className="text-[#52606d]">
                Todos os planos são orientados por rotina técnica, relatório claro e canal direto com a equipe Flavis. A diferença está no nível de monitoramento e acompanhamento operacional.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  id={plan.id}
                  className={`relative flex h-full flex-col border-2 p-7 transition ${
                    plan.highlighted
                      ? "border-[#4CAF50] bg-white shadow-xl"
                      : "border-[#d9e2ec] bg-white hover:border-[#4CAF50] hover:shadow-lg"
                  }`}
                >
                  <h3 className={`${plan.highlighted ? "mb-1" : "mb-0.5"} text-2xl font-bold text-[#003366]`}>{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="mb-1 inline-flex w-fit rounded-full bg-[#4CAF50] px-2 py-0.5 text-[10px] font-bold uppercase leading-none tracking-wide text-white">
                      Mais indicado
                    </span>
                  )}
                  <p className="mb-3 text-sm font-medium text-[#52606d]">{plan.subtitle}</p>
                  <p className="mb-6 rounded-lg bg-[#E8F4F8] p-3 text-sm text-[#003366]">Ideal para: {plan.ideal}</p>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-[#334e68]">
                        <Check className="h-5 w-5 flex-shrink-0 text-[#4CAF50]" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`mt-auto w-full ${plan.highlighted ? "bg-[#4CAF50] hover:bg-[#3d8b40]" : "bg-[#003366] hover:bg-[#002244]"} text-white`}>
                    <a href={buildWhatsAppUrl(`Olá, tenho interesse no plano ${plan.name} da Flavis.`)} target="_blank" rel="noopener noreferrer">
                      Solicitar proposta
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 md:px-0 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#4CAF50]">Como funciona</p>
                <h2 className="mb-4 text-3xl font-bold text-[#003366] md:text-4xl">Da avaliação inicial ao acompanhamento contínuo</h2>
                <p className="text-lg leading-relaxed text-[#52606d]">
                  O processo foi pensado para ser simples para a operação e útil para quem decide: medir bem, agir cedo e documentar o que foi feito.
                </p>
              </div>
              <div className="grid gap-4">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4 rounded-lg border border-[#d9e2ec] bg-[#F8FAFC] p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#003366] text-white">
                      <step.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#4CAF50]">Etapa {index + 1}</p>
                      <h3 className="text-lg font-bold text-[#003366]">{step.title}</h3>
                      <p className="mt-1 text-[#52606d]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="bg-gradient-to-br from-[#F5F7FA] to-white px-4 py-16 md:px-0 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#4CAF50]">Tecnologia Flavis</p>
                <h2 className="mb-5 text-3xl font-bold text-[#003366] md:text-4xl">Transmissor IoT para variáveis críticas</h2>
                <p className="mb-7 text-lg leading-relaxed text-[#52606d]">
                  Sensores conectados acompanham temperatura, umidade e eventos relevantes para que a equipe técnica não dependa apenas de inspeções manuais ou alertas tardios.
                </p>
                <ul className="mb-8 grid gap-3 text-[#334e68] sm:grid-cols-2">
                  {[
                    "Sensor SHT31 calibrado",
                    "Conectividade LoRaWAN, NB-IoT ou Wi-Fi",
                    "Case IP65 para ambiente técnico",
                    "Bateria de longa duração",
                    "Configuração via BLE",
                    "Atualização OTA",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Zap className="h-5 w-5 flex-shrink-0 text-[#4CAF50]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-[#003366] px-8 text-white hover:bg-[#002244]">
                  <a href={specsComposeUrl} target="_blank" rel="noopener noreferrer">
                    Receber especificações
                  </a>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg shadow-2xl ring-1 ring-[#d9e2ec]">
                <img
                  src={images.technology}
                  alt="Transmissor IoT Flavis para monitoramento de temperatura e umidade"
                  className="h-[320px] w-full object-cover md:h-[440px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 md:px-0 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#4CAF50]">Painel de controle</p>
              <h2 className="mb-4 text-3xl font-bold text-[#003366] md:text-4xl">Informação pronta para agir</h2>
              <p className="text-[#52606d]">
                O dashboard centraliza indicadores de disponibilidade, alarmes e histórico técnico para apoiar manutenção, engenharia clínica e gestão.
              </p>
            </div>
            <Card className="overflow-hidden border border-[#d9e2ec] bg-[#0f2742] p-4 shadow-2xl md:p-6">
              <div className="rounded-lg bg-white p-4 md:p-6">
                <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[#d9e2ec] pb-5 md:flex-row md:items-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#4CAF50]">Centro de monitoramento</p>
                    <h3 className="text-2xl font-bold text-[#003366]">Ativos críticos online</h3>
                  </div>
                  <div className="flex w-fit items-center gap-2 rounded-full bg-[#E8F4F8] px-4 py-2 text-sm font-semibold text-[#003366]">
                    <Clock className="h-4 w-4" aria-hidden="true" /> Atualizado agora
                  </div>
                </div>
                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  {dashboardMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-[#d9e2ec] bg-[#F8FAFC] p-4">
                      <metric.icon className="mb-3 h-6 w-6 text-[#4CAF50]" aria-hidden="true" />
                      <p className="text-sm text-[#627d98]">{metric.label}</p>
                      <p className="text-3xl font-bold text-[#003366]">{metric.value}</p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
                  <div className="rounded-lg border border-[#d9e2ec] p-4">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#003366]">
                      <BarChart3 className="h-4 w-4" aria-hidden="true" /> Tendência de temperatura
                    </div>
                    <div className="flex h-40 items-end gap-2 sm:gap-3" aria-label="Gráfico ilustrativo de tendência de temperatura">
                      {[45, 52, 48, 61, 57, 64, 58, 54, 50, 47].map((height, index) => (
                        <div key={index} className="flex-1 rounded-t bg-[#4CAF50]" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-[#d9e2ec] p-4">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#003366]">
                      <Thermometer className="h-4 w-4" aria-hidden="true" /> Alertas recentes
                    </div>
                    <div className="space-y-3 text-sm">
                      <p className="rounded bg-[#E8F4F8] p-3 text-[#003366]">Câmara fria 02 estabilizada em 3,8 C.</p>
                      <p className="rounded bg-[#fff7e6] p-3 text-[#8a5a00]">Umidade acima do limite em sala técnica.</p>
                      <p className="rounded bg-[#eefbea] p-3 text-[#2f6b2f]">SLA preventivo cumprido no ativo MRI-01.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-r from-[#003366] to-[#002244] px-4 py-16 md:px-0 md:py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">Quer reduzir riscos nos seus sistemas de resfriamento?</h2>
            <p className="mb-8 text-lg leading-relaxed text-blue-100 md:text-xl">
              Agende uma conversa com a Flavis. Vamos entender sua operação e indicar o melhor caminho entre manutenção, monitoramento e engenharia de confiabilidade.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 bg-[#4CAF50] px-8 text-white hover:bg-[#3d8b40]">
                <a href={auditUrl} target="_blank" rel="noopener noreferrer">
                  Solicitar auditoria
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-white px-8 text-white hover:bg-white/10">
                <a href={emailComposeUrl} target="_blank" rel="noopener noreferrer">
                  <Mail className="h-4 w-4" aria-hidden="true" /> Falar por e-mail
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#003366] px-4 py-12 text-white md:px-0">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 inline-flex rounded-md bg-white p-2">
                <img src={images.logo} alt="Flavis" className="h-8 w-auto" loading="lazy" decoding="async" />
              </div>
              <p className="text-sm leading-relaxed text-blue-200">Engenharia de confiabilidade para sistemas de resfriamento médico.</p>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Planos</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#start" className="transition hover:text-white">START</a></li>
                <li><a href="#smart" className="transition hover:text-white">SMART</a></li>
                <li><a href="#monitor" className="transition hover:text-white">MONITOR</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Empresa</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#solutions" className="transition hover:text-white">Soluções</a></li>
                <li><a href="#technology" className="transition hover:text-white">Tecnologia</a></li>
                <li><a href={emailComposeUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Proposta comercial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Contato</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href={emailComposeUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">comercial@flavis.com.br</a></li>
                <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">WhatsApp: (62) 98242-8568</a></li>
                <li><a href="https://www.flavis.com.br" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">www.flavis.com.br</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-400 pt-8 text-center text-sm text-blue-200">
            <p>&copy; 2026 Flavis Medical Cooling Intelligence. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
