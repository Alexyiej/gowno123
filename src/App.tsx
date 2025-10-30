import { AlertTriangle, TrendingUp, Users, Package, Truck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ReportsSection } from "./components/ReportSection/reports-section"
import { UploadModal } from "./components/UploadModal/upload-modal"
import "./App.css"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-5">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column - Alerts and KPIs */}
          <div className="space-y-6">
            {/* Alerts Section */}
            <section>
              <h2 className="text-4xl font-bold mb-2">Alerty</h2>
              <div className="space-y-3">
                <Alert variant="destructive" className="border-[#b21e35] h-20">
                  <AlertTriangle className="size-[20px]" stroke="#b21e35" />
                  <AlertTitle className="text-[#b21e35] text-xl font-bold">Serwis - Wymagana konserwacja</AlertTitle>
                  <AlertDescription className="text-base mt-2 text-[#b21e35]/80">
                    Pojazd FL-2847 wymaga przeglądu technicznego w ciągu 3 dni
                  </AlertDescription>
                </Alert>
                <Alert variant="default" className="bg-accent/10 border-accent/30">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  <AlertTitle className="text-accent-foreground">Limit - Przekroczenie czasu pracy</AlertTitle>
                  <AlertDescription className="text-accent-foreground/90">
                    Kierowca Jan Kowalski przekroczył dzienny limit czasu pracy o 45 minut
                  </AlertDescription>
                </Alert>
              </div>
            </section>

            {/* KPI Section */}
            <section>
              <h2 className="text-4xl font-bold mb-2">Kluczowe wskaźniki</h2>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-2xl">Aktywne pojazdy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-primary" stroke="#b21e35" />
                      <span className="text-3xl font-bold text-foreground">127</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      <span className="text-primary">+12%</span> vs poprzedni miesiąc
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Dostarczone przesyłki</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-primary" />
                      <span className="text-3xl font-bold text-foreground">2,847</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      <span className="text-primary">+8%</span> vs poprzedni miesiąc
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Kierowcy na trasie</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-3xl font-bold text-foreground">89</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      <span className="text-primary">+5%</span> vs poprzedni miesiąc
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Efektywność</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span className="text-3xl font-bold text-foreground">94%</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      <span className="text-primary">+3%</span> vs poprzedni miesiąc
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Right Column - Reports and Actions */}
          <div className="space-y-6">
            <ReportsSection />

            {/* Action Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Link to="/map" className="block">
                <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Mapa tras</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Zobacz aktywne trasy i lokalizacje pojazdów
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Otwórz mapę
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <UploadModal />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

