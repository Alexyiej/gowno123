import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export default function Alerts() {
    return (
        <section>
            <h2 className="mb-4 text-2xl font-bold text-[oklch(0.985 0 0)]">Alerty</h2>
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
    )
}