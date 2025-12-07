"use client"

import { useState, useRef } from "react"
import { QRCodeCanvas } from "qrcode.react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Download, QrCode } from "lucide-react"

export default function QRCodeGenerator() {
  const [text, setText] = useState("https://v0.dev")
  const [size, setSize] = useState([256])
  const qrRef = useRef<HTMLDivElement>(null)

  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector("canvas")
    if (canvas) {
      const url = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.download = "qr-code.png"
      link.href = url
      link.click()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <QrCode className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">QR Generator</h1>
              <p className="text-sm text-muted-foreground">Создайте свой QR-код</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Panel - Text Input */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Введите текст</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="text-input" className="text-foreground">
                  Контент для QR-кода
                </Label>
                <Textarea
                  id="text-input"
                  placeholder="Введите URL, текст или любую информацию..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-[400px] resize-none bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Совет:</strong> QR-коды могут содержать URL, текст, контактную
                  информацию, координаты WiFi и многое другое.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Right Panel - QR Code Preview */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Предварительный просмотр</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* QR Code Display */}
              <div className="flex items-center justify-center rounded-lg bg-white p-8">
                <div ref={qrRef} className="inline-block">
                  {text ? (
                    <QRCodeCanvas value={text} size={size[0]} level="H" includeMargin={true} />
                  ) : (
                    <div
                      className="flex items-center justify-center bg-muted"
                      style={{ width: size[0], height: size[0] }}
                    >
                      <p className="text-sm text-muted-foreground">Введите текст</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Size Control */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="size-slider" className="text-foreground">
                    Размер QR-кода
                  </Label>
                  <span className="text-sm text-muted-foreground">{size[0]}px</span>
                </div>
                <Slider
                  id="size-slider"
                  min={128}
                  max={512}
                  step={32}
                  value={size}
                  onValueChange={setSize}
                  className="w-full"
                />
              </div>

              {/* Download Button */}
              <Button onClick={handleDownload} disabled={!text} className="w-full" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Скачать PNG
              </Button>

              {/* Info */}
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h3 className="mb-2 text-sm font-semibold text-foreground">Характеристики</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Формат: PNG</li>
                  <li>
                    • Размер: {size[0]}x{size[0]}px
                  </li>
                  <li>• Коррекция ошибок: Высокая (30%)</li>
                  <li>• Прозрачный фон: Нет</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
