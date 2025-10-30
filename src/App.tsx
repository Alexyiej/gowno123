import { ReportsSection } from "./components/ReportSection/reports-section"
import { UploadModal } from "./components/UploadModal/upload-modal"
import "./App.css"
import Alerts from "./components/Alerts/Alerts"
import Kpi from "./components/Kpi/Kpi"
import ActionCards from "./components/ActionCards/ActionCards"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-5">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <Alerts />
            <Kpi />
          </div>
          <div className="space-y-6">
            <ReportsSection />
            <div className="grid grid-cols-2 gap-4">
              <ActionCards />
              <UploadModal />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

