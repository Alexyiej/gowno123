import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const exceededKmData = [
  { month: "Sty", km: 1200 },
  { month: "Lut", km: 1800 },
  { month: "Mar", km: 1400 },
  { month: "Kwi", km: 2200 },
  { month: "Maj", km: 1900 },
]

const driverChangesData = [
  { month: "Sty", changes: 45 },
  { month: "Lut", changes: 52 },
  { month: "Mar", changes: 38 },
  { month: "Kwi", changes: 65 },
  { month: "Maj", changes: 58 },
]

export function ReportsSection() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-2">Raporty</h2>
      <div className="space-y-4">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Przekroczone kilometry</CardTitle>
            <CardDescription className="text-muted-foreground">
              Miesięczne przekroczenia planowanych kilometrów
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={exceededKmData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip />
                <Bar dataKey="km" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Liczba zmian kierowców</CardTitle>
            <CardDescription className="text-muted-foreground">
              Miesięczna liczba zmian przypisań kierowców
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={driverChangesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip />
                <Bar dataKey="changes" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
