import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "../ui/button"

export default function ActionCards() {
    return(
        <>
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
        </>
    )
}