"use client"

import type React from "react"

import { useState } from "react"
import { Upload, FileUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function UploadModal() {
  const [open, setOpen] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      setSelectedFile(null)
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Upload danych</CardTitle>
            <CardDescription className="text-muted-foreground">Prześlij nowy plik z danymi</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Upload className="mr-2 h-4 w-4" />
              Prześlij plik
            </Button>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Prześlij plik z danymi</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Wybierz plik CSV, Excel lub JSON z danymi do zaimportowania
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div
            className={`relative rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
              dragActive ? "border-primary bg-primary/5" : "border-border bg-muted/30"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleChange}
              accept=".csv,.xlsx,.xls,.json"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <FileUp className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-2 text-sm font-medium text-foreground">Przeciągnij i upuść plik tutaj</p>
              <p className="mt-1 text-xs text-muted-foreground">lub kliknij, aby wybrać plik</p>
              <p className="mt-2 text-xs text-muted-foreground">CSV, Excel, JSON (max 10MB)</p>
            </label>
          </div>

          {selectedFile && (
            <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3">
              <div className="flex items-center gap-2">
                <FileUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{selectedFile.name}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedFile(null)} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1 border-border text-foreground hover:bg-muted"
            >
              Anuluj
            </Button>
            <Button
              onClick={handleUpload}
              disabled={!selectedFile}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Prześlij
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
