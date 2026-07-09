import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#F5F7FA] to-[#E8F4F8] px-4">
      <Card className="w-full max-w-lg border border-[#d9e2ec] bg-white shadow-lg">
        <CardContent className="px-6 py-10 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F4F8]">
              <AlertCircle className="h-9 w-9 text-[#003366]" aria-hidden="true" />
            </div>
          </div>

          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#4CAF50]">Página não encontrada</p>
          <h1 className="mb-4 text-4xl font-bold text-[#003366]">404</h1>
          <p className="mb-8 leading-relaxed text-[#52606d]">
            O endereço acessado não existe ou foi movido. Volte para a página inicial para conhecer as soluções da Flavis.
          </p>

          <Button
            onClick={() => setLocation("/")}
            className="bg-[#003366] px-6 text-white hover:bg-[#002244]"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Ir para o início
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
