import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, BarChart3, Shield, Smartphone, TrendingUp, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5562982428568"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-border z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/manus-storage/flavis_logo_f575c896.png" alt="Flavis Logo" className="h-10" />
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#plans" className="text-sm font-medium text-foreground hover:text-[#003366] transition">Planos</a>
            <a href="#technology" className="text-sm font-medium text-foreground hover:text-[#003366] transition">Tecnologia</a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-[#003366] transition">Contato</a>
          </div>
          <Button className="bg-[#003366] hover:bg-[#002244] text-white">Solicitar Demo</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0 bg-gradient-to-br from-white via-[#F5F5F5] to-[#E8F4F8]">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-[#E8F4F8] rounded-full">
                <span className="text-sm font-semibold text-[#003366]">Engenharia de Confiabilidade</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#003366] mb-6 leading-tight">
                Sistemas de Resfriamento Médico Inteligentes
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transforme dados em decisões. Monitore seus equipamentos críticos 24/7 com inteligência preditiva e reduza custos operacionais em até 30%.
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src="/manus-storage/flavis_hero_bg_81db3e38.png" 
                alt="Sala de Imagem Médica" 
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 px-4 md:px-0 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#003366] mb-16 text-center">Nossos Pilares</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Manutenção Estruturada",
                desc: "Procedimentos técnicos padronizados pela Flavis para máxima confiabilidade."
              },
              {
                icon: Smartphone,
                title: "Monitoramento IoT 24/7",
                desc: "Sensores de alta precisão coletando dados em tempo real de todos os pontos críticos."
              },
              {
                icon: TrendingUp,
                title: "Inteligência Preditiva",
                desc: "Algoritmos exclusivos que identificam falhas antes que elas aconteçam."
              }
            ].map((item, i) => (
              <Card key={i} className="p-8 border-0 bg-[#F5F5F5] hover:shadow-lg transition">
                <item.icon className="w-12 h-12 text-[#4CAF50] mb-4" />
                <h3 className="text-xl font-bold text-[#003366] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 px-4 md:px-0 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#003366] mb-4 text-center">Planos de Serviço</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Escolha o plano ideal para sua operação. Todos incluem suporte técnico especializado e relatórios detalhados.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "START",
                subtitle: "Proteção Preventiva",
                price: "Sob Consulta",
                features: [
                  "Inspeção Preventiva Mensal",
                  "Checklist Técnico Padronizado",
                  "Relatório Técnico Mensal",
                  "Atendimento em Horário Comercial"
                ],
                ideal: "Clínicas de pequeno porte"
              },
              {
                name: "SMART",
                subtitle: "Engenharia de Confiabilidade",
                price: "Sob Consulta",
                features: [
                  "Monitoramento Online 24h",
                  "Inteligência de Dados",
                  "Dashboard em Tempo Real",
                  "Sistema de Alarmes",
                  "Visitas Quinzenais",
                  "SLA de Atendimento"
                ],
                ideal: "Hospitais e centros de diagnóstico",
                highlighted: true
              },
              {
                name: "MONITOR",
                subtitle: "Plataforma de Dados",
                price: "Sob Consulta",
                features: [
                  "Monitoramento Multiparamétrico",
                  "Dashboard Profissional",
                  "Engenharia de Regras Flavis",
                  "Relatórios Inteligentes",
                  "Base para Manutenção Preditiva"
                ],
                ideal: "Empresas com equipe própria"
              }
            ].map((plan, i) => (
              <Card 
                key={i} 
                className={`p-8 border-2 transition ${
                  plan.highlighted 
                    ? "border-[#4CAF50] bg-gradient-to-br from-[#E8F4F8] to-white shadow-xl scale-105" 
                    : "border-[#E0E0E0] bg-white hover:border-[#4CAF50]"
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block mb-4 px-3 py-1 bg-[#4CAF50] text-white rounded-full text-xs font-bold">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#003366] mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>
                <p className="text-3xl font-bold text-[#4CAF50] mb-6">{plan.price}</p>
                <p className="text-xs text-gray-500 mb-6 pb-6 border-b border-[#E0E0E0]">Ideal para: {plan.ideal}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex gap-3">
                      <Check className="w-5 h-5 text-[#4CAF50] flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? "bg-[#4CAF50] hover:bg-[#3d8b40] text-white" 
                      : "bg-[#003366] hover:bg-[#002244] text-white"
                  }`}
                >
                  Solicitar Informações
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-4 md:px-0 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#003366] mb-6">Transmissor Flavis IoT</h2>
              <p className="text-lg text-gray-600 mb-8">
                A base da nossa inteligência. Sensores de alta precisão que coletam dados críticos de temperatura e umidade em tempo real.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Sensor SHT31 calibrado e linearizado",
                  "Conectividade LoRaWAN, NB-IoT ou Wi-Fi",
                  "Case IP65 à prova d'água",
                  "Bateria com até 10 anos de duração",
                  "Configuração via BLE e atualização OTA"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Zap className="w-5 h-5 text-[#4CAF50] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-[#003366] hover:bg-[#002244] text-white px-8">
                Especificações Técnicas
              </Button>
            </div>
            <div>
              <img 
                src="/manus-storage/flavis_technology_bg_ba46e6d1.png" 
                alt="Transmissor IoT Flavis" 
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#003366] mb-6 text-center">Dashboard Flavis em Tempo Real</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Visualize todos os seus ativos críticos em um único painel. Inteligência preditiva que transforma dados em decisões.
          </p>
          <Card className="border-0 overflow-hidden shadow-2xl">
            <img 
              src="/manus-storage/dashboard_mockup.png" 
              alt="Dashboard Flavis" 
              className="w-full h-auto"
            />
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 md:px-0 bg-gradient-to-r from-[#003366] to-[#002244]">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para Transformar Sua Operação?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Agende uma auditoria de confiabilidade gratuita e descubra como a Flavis pode aumentar a disponibilidade dos seus equipamentos.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-8">
              Solicitar Auditoria
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-12 px-4 md:px-0">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/manus-storage/flavis_logo_f575c896.png" alt="Flavis Logo" className="h-8" />
              </div>
              <p className="text-blue-200 text-sm">Engenharia de Confiabilidade para Sistemas de Resfriamento Médico</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Planos</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><a href="#" className="hover:text-white transition">START</a></li>
                <li><a href="#" className="hover:text-white transition">SMART</a></li>
                <li><a href="#" className="hover:text-white transition">MONITOR</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Tecnologia</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>            <a href="mailto:comercial@flavis.com.br" className="hover:text-white transition">comercial@flavis.com.br</a></li>
                <li><a href="https://wa.me/5562982428568" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp: (62) 98242-8568</a></li>
                <li><a href="https://www.flavis.com.br" className="hover:text-white transition">www.flavis.com.br</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-400 pt-8 text-center text-blue-200 text-sm">
            <p>&copy; 2026 Flavis Medical Cooling Intelligence. Todos os direitos reservados. | comercial@flavis.com.br</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
