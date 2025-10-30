import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, Users, TrendingUp } from "lucide-react"
export default function Kpi() {
    return(
        <section>
            <h2 className="mb-4 text-2xl font-bold text-[oklch(0.985 0 0)]">KPI</h2>
            <div className="grid grid-cols-2 gap-4">
            <Card className="bg-[oklch(1 0 0)] border-[oklch(0.92_0.01_240)]">
                <CardHeader className="pb-2">
                <CardTitle className="text-xl">Aktywne pojazdy</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-[#b21e35]" />
                    <span className="text-3xl font-bold text-foreground">127</span>
                </div>
                <p className="mt-2 text-xs">
                    <span className="text-[#b21e35]">+12%</span> vs poprzedni miesiąc
                </p>
                </CardContent>
            </Card>

            <Card className="bg-[oklch(1 0 0)] border-[oklch(0.92_0.01_240)]">
                <CardHeader className="pb-2">
                <CardTitle className="text-xl">Dostarczone przesyłki</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-[#b21e35]" />
                    <span className="text-3xl font-bold text-foreground">2,847</span>
                </div>
                <p className="mt-2 text-xs">
                    <span className="text-[#b21e35]">+8%</span> vs poprzedni miesiąc
                </p>
                </CardContent>
            </Card>

            <Card className="bg-[oklch(1 0 0)] border-[oklch(0.92_0.01_240)]">
                <CardHeader className="pb-2">
                <CardTitle className="text-xl">Kierowcy na trasie</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#b21e35]" />
                    <span className="text-3xl font-bold text-foreground">89</span>
                </div>
                <p className="mt-2 text-xs">
                    <span className="text-[#b21e35]">+5%</span> vs poprzedni miesiąc
                </p>
                </CardContent>
            </Card>

            <Card className="bg-[oklch(1 0 0)] border-[oklch(0.92_0.01_240)]">
                <CardHeader className="pb-2">
                <CardTitle className="text-xl">Efektywność</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-[#b21e35]" />
                    <span className="text-3xl font-bold text-foreground">94%</span>
                </div>
                <p className="mt-2 text-xs">
                    <span className="text-[#b21e35]">+3%</span> vs poprzedni miesiąc
                </p>
                </CardContent>
            </Card>
            </div>
        </section>
    )
}