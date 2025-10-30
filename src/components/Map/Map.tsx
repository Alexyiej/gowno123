import { ArrowLeft, MapPin, Navigation } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MapPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-foreground hover:bg-muted">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Powrót
              </Button>
            </Link>
            <h1 className="text-2xl font-semibold text-foreground">Mapa tras</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Sidebar with active routes */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Aktywne trasy</CardTitle>
                <CardDescription className="text-muted-foreground">Pojazdy w ruchu: 89</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { id: "FL-2847", driver: "Jan Kowalski", destination: "Warszawa" },
                  { id: "FL-3921", driver: "Anna Nowak", destination: "Kraków" },
                  { id: "FL-1456", driver: "Piotr Wiśniewski", destination: "Gdańsk" },
                  { id: "FL-7823", driver: "Maria Lewandowska", destination: "Wrocław" },
                ].map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="rounded-lg border border-border bg-muted/30 p-3 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-foreground">{vehicle.id}</p>
                        <p className="text-sm text-muted-foreground">{vehicle.driver}</p>
                      </div>
                      <Navigation className="h-4 w-4 text-primary" />
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {vehicle.destination}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Map placeholder */}
          <div className="lg:col-span-3">
            <Card className="h-[calc(100vh-12rem)] bg-card border-border">
              <CardContent className="flex h-full items-center justify-center p-0">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="rounded-full bg-primary/10 p-6">
                    <MapPin className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Mapa interaktywna</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Tutaj będzie wyświetlana mapa z aktywnymi trasami i lokalizacjami pojazdów
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">Integracja z Google Maps / Mapbox</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
