import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Clock,
  Gauge,
  Mail,
  MessageCircle,
  Shield,
  Smartphone,
  Thermometer,
  TrendingUp,
  Zap,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/5562982428568?text=Ola%2C%20quero%20conhecer%20as%20solucoes%20da%20Flavis%20para%20resfriamento%20medico.";
const auditUrl =
  "https://wa.me/5562982428568?text=Ola%2C%20gostaria%20de%20agendar%20uma%20auditoria%20de%20confiabilidade%20com%20a%20Flavis.";
const emailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=comercial@flavis.com.br&su=Contato%20pelo%20site%20Flavis&body=Ola%2C%20quero%20saber%20mais%20sobre%20as%20solucoes%20da%20Flavis.";
const specsComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=comercial@flavis.com.br&su=Especificacoes%20tecnicas%20Flavis%20IoT&body=Ola%2C%20quero%20receber%20as%20especificacoes%20tecnicas%20do%20Transmissor%20Flavis%20IoT.";

const images = {
  logo: "https://flavismed-5iuhpp6j.manus.space/manus-storage/flavis_logo_f575c896.png",
  hero: "https://flavismed-5iuhpp6j.manus.space/manus-storage/flavis_hero_bg_81db3e38.png",
  technology: "https://flavismed-5iuhpp6j.manus.space/manus-storage/flavis_technology_bg_ba46e6d1.png",
};

const pillars = [
  {
    icon: Shield,
    title: "Manutencao estruturada",
    desc: "Rotinas tecnicas padronizadas para reduzir risco operacional e aumentar a disponibilidade dos equipamentos.",
  },
  {
    icon: Smartphone,
    title: "Monitoramento IoT 24/7",
    desc: "Sensores acompanham temperatura, umidade e pontos criticos em tempo real, com alarmes e historico rastreavel.",
  },
  {
    icon: TrendingUp,
    title: "Inteligencia preditiva",
    desc: "Dados de campo viram indicadores acionaveis para antecipar falhas e orientar a manutencao.",
  },
];

const plans = [
  {
    id: "start",
    name: "START",
    subtitle: "Protecao preventiva",
    price: "Sob consulta",
    ideal: "Clinicas e operacoes de pequeno porte",
    features: [
      "Inspecao preventiva mensal",
      "Checklist tecnico padronizado",
      "Relatorio tecnico mensal",
      "Atendimento em horario comercial",
    ],
  },
  {
    id: "smart",
    name: "SMART",
    subtitle: "Engenharia de confiabilidade",
    price: "Sob consulta",
    ideal: "Hospitais e centros de diagnostico",
    highlighted: true,
    features: [
      "Monitoramento online 24h",
      "Dashboard em tempo real",
      "Sistema de alarmes",
      "Visitas quinzenais",
      "SLA de atendimento",
      "Relatorios inteligentes",
    ],
  },
  {
    id: "monitor",
    name: "MONITOR",
    subtitle: "Plataforma de dados",
    price: "Sob consulta",
    ideal: "Empresas com equipe tecnica propria",
    features: [
      "Monitoramento multiparametrico",
      "Dashboard profissional",
      "Engenharia de regras Flavis",
      "Base para manutencao preditiva",
      "Historico para auditoria tecnica",
    ],
  },
];

const metrics = [
  { label: "Disponibilidade", value: "99,2%", icon: Activity },
  { label: "Alertas criticos", value: "03", icon: Zap },
  { label: "Ativos online", value: "42", icon: Gauge },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1f2933]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#20BA5A]"
        aria-label="Fale com a Flavis pelo WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <nav className="fixed top-0 z-50 w-full border-b border-[#d9e2ec] bg-white/95 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label="Ir para o inicio">
            <img src={images.logo} alt="Flavis Logo" className="h-10 w-auto" />
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#about" className="text-sm font-medium text-[#243b53] transition hover:text-[#003366]">Sobre</a>
            <a href="#plans" className="text-sm font-medium text-[#243b53] transition hover:text-[#003366]">Planos</a>
            <a href="#technology" className="text-sm font-medium text-[#243b53] transition hover:text-[#003366]">Tecnologia</a>
            <a href="#contact" className="text-sm font-medium text-[#243b53] transition hover:text-[#003366]">Contato</a>
          </div>
          <Button asChild className="bg-[#003366] text-white hover:bg-[#002244]">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Solicitar demo
            </a>
          </Button>
        </div>
      </nav>

      <main id="home">
        <section className="bg-gradient-to-br from-white via-[#F5F7FA] to-[#E8F4F8] px-4 pb-20 pt-32 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="grid items-center gap-12 md:grid-cols-[1fr_0.95fr]">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E8F4F8] px-4 py-2 text-sm font-semibold text-[#003366]">
                  <CheckCircle2 className="h-4 w-4 text-[#4CAF50]" />
                  Engenharia de confiabilidade
                </div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-[#003366] md:text-6xl">
                  Sistemas de resfriamento medico inteligentes
                </h1>
                <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#52606d] md:text-xl">
                  Monitore equipamentos criticos 24/7, antecipe falhas e transforme dados tecnicos em decisoes de manutencao mais seguras.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="bg-[#4CAF50] px-7 text-white hover:bg-[#3d8b40]">
                    <a href={auditUrl} target="_blank" rel="noopener noreferrer">
                      Agendar auditoria <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-[#003366] px-7 text-[#003366] hover:bg-[#E8F4F8]">
                    <a href="#plans">Ver planos</a>
                  </Button>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={images.hero}
                  alt="Sala de imagem medica com equipamentos de resfriamento monitorados"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-4 py-20 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-[#003366] md:text-4xl">Operacao critica precisa de previsibilidade</h2>
              <p className="text-lg leading-relaxed text-[#52606d]">
                A Flavis combina manutencao estruturada, instrumentacao IoT e analise de dados para proteger ambientes medicos que dependem de temperatura estavel e resposta tecnica rapida.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((item) => (
                <Card key={item.title} className="border border-[#d9e2ec] bg-[#F8FAFC] p-7 shadow-sm transition hover:shadow-md">
                  <item.icon className="mb-4 h-11 w-11 text-[#4CAF50]" />
                  <h3 className="mb-3 text-xl font-bold text-[#003366]">{item.title}</h3>
                  <p className="text-[#52606d]">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="bg-gradient-to-br from-[#F5F7FA] to-white px-4 py-20 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-[#003366] md:text-4xl">Planos de servico</h2>
            <p className="mx-auto mb-14 max-w-2xl text-center text-[#52606d]">
              Escolha o nivel de acompanhamento ideal para sua operacao. Todos os planos incluem suporte tecnico e relatorios claros para tomada de decisao.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  id={plan.id}
                  className={`relative border-2 p-7 transition ${
                    plan.highlighted
                      ? "border-[#4CAF50] bg-white shadow-xl"
                      : "border-[#d9e2ec] bg-white hover:border-[#4CAF50] hover:shadow-lg"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="mb-4 inline-flex rounded-full bg-[#4CAF50] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      Mais completo
                    </div>
                  )}
                  <h3 className="mb-1 text-2xl font-bold text-[#003366]">{plan.name}</h3>
                  <p className="mb-4 text-sm text-[#52606d]">{plan.subtitle}</p>
                  <p className="mb-5 text-3xl font-bold text-[#4CAF50]">{plan.price}</p>
                  <p className="mb-6 border-b border-[#d9e2ec] pb-5 text-sm text-[#627d98]">Ideal para: {plan.ideal}</p>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-[#334e68]">
                        <Check className="h-5 w-5 flex-shrink-0 text-[#4CAF50]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${plan.highlighted ? "bg-[#4CAF50] hover:bg-[#3d8b40]" : "bg-[#003366] hover:bg-[#002244]"} text-white`}>
                    <a href={`${whatsappUrl}%20Tenho%20interesse%20no%20plano%20${plan.name}.`} target="_blank" rel="noopener noreferrer">
                      Solicitar informacoes
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="technology" className="bg-white px-4 py-20 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-[#003366] md:text-4xl">Transmissor Flavis IoT</h2>
                <p className="mb-8 text-lg leading-relaxed text-[#52606d]">
                  A base da nossa inteligencia operacional: sensores conectados para acompanhar temperatura, umidade e eventos que impactam a confiabilidade dos sistemas de resfriamento.
                </p>
                <ul className="mb-8 space-y-4">
                  {[
                    "Sensor SHT31 calibrado e linearizado",
                    "Conectividade LoRaWAN, NB-IoT ou Wi-Fi",
                    "Case IP65 para ambientes tecnicos",
                    "Bateria de longa duracao",
                    "Configuracao via BLE e atualizacao OTA",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[#334e68]">
                      <Zap className="h-5 w-5 flex-shrink-0 text-[#4CAF50]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-[#003366] px-8 text-white hover:bg-[#002244]">
                  <a href={specsComposeUrl} target="_blank" rel="noopener noreferrer">Receber especificacoes</a>
                </Button>
              </div>
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={images.technology}
                  alt="Transmissor IoT Flavis para monitoramento de temperatura e umidade"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#F5F7FA] to-white px-4 py-20 md:px-0">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-5 text-center text-3xl font-bold text-[#003366] md:text-4xl">Dashboard Flavis em tempo real</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-[#52606d]">
              Indicadores de disponibilidade, alarmes e historico tecnico em um painel unico para equipe de manutencao, engenharia e gestao.
            </p>
            <Card className="overflow-hidden border border-[#d9e2ec] bg-[#0f2742] p-4 shadow-2xl md:p-6">
              <div className="rounded-lg bg-white p-5">
                <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[#d9e2ec] pb-5 md:flex-row md:items-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#4CAF50]">Centro de monitoramento</p>
                    <h3 className="text-2xl font-bold text-[#003366]">Ativos criticos online</h3>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-[#E8F4F8] px-4 py-2 text-sm font-semibold text-[#003366]">
                    <Clock className="h-4 w-4" /> Atualizado agora
                  </div>
                </div>
                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-[#d9e2ec] bg-[#F8FAFC] p-4">
                      <metric.icon className="mb-3 h-6 w-6 text-[#4CAF50]" />
                      <p className="text-sm text-[#627d98]">{metric.label}</p>
                      <p className="text-3xl font-bold text-[#003366]">{metric.value}</p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
                  <div className="rounded-lg border border-[#d9e2ec] p-4">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#003366]">
                      <BarChart3 className="h-4 w-4" /> Tendencia de temperatura
                    </div>
                    <div className="flex h-40 items-end gap-3">
                      {[45, 52, 48, 61, 57, 64, 58, 54, 50, 47].map((height, index) => (
                        <div key={index} className="flex-1 rounded-t bg-[#4CAF50]" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-[#d9e2ec] p-4">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#003366]">
                      <Thermometer className="h-4 w-4" /> Alertas recentes
                    </div>
                    <div className="space-y-3 text-sm">
                      <p className="rounded bg-[#E8F4F8] p-3 text-[#003366]">Camara fria 02 estabilizada em 3,8 C.</p>
                      <p className="rounded bg-[#fff7e6] p-3 text-[#8a5a00]">Umidade acima do limite em sala tecnica.</p>
                      <p className="rounded bg-[#eefbea] p-3 text-[#2f6b2f]">SLA preventivo cumprido no ativo MRI-01.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-r from-[#003366] to-[#002244] px-4 py-20 md:px-0">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Pronto para transformar sua operacao?</h2>
            <p className="mb-8 text-lg leading-relaxed text-blue-100 md:text-xl">
              Agende uma auditoria de confiabilidade e descubra onde sua infraestrutura pode ganhar disponibilidade, controle e previsibilidade.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#4CAF50] px-8 text-white hover:bg-[#3d8b40]">
                <a href={auditUrl} target="_blank" rel="noopener noreferrer">
                  Solicitar auditoria
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white px-8 text-white hover:bg-white/10">
                <a href={emailComposeUrl} target="_blank" rel="noopener noreferrer">
                  <Mail className="h-4 w-4" /> Falar por e-mail
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
                <img src={images.logo} alt="Flavis Logo" className="h-8 w-auto" />
              </div>
              <p className="text-sm text-blue-200">Engenharia de confiabilidade para sistemas de resfriamento medico.</p>
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
                <li><a href="#about" className="transition hover:text-white">Sobre</a></li>
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
