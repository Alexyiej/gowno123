import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, Users, TrendingUp } from "lucide-react"
export default function Kpi() {
    return(
        <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">Kluczowe wskaźniki</h2>
            <div className="grid grid-cols-2 gap-4">
            <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Aktywne pojazdy</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-primary" />
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
    )
}