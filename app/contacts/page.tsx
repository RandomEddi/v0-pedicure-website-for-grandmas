"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.")
    setFormData({ name: "", phone: "", message: "" })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
              Свяжитесь с Нами
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Мы всегда рады ответить на ваши вопросы и записать на удобное время
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-8">Наши Контакты</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Позвоните нам или приходите в гости. Мы работаем для вас каждый день!
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                        <a
                          href="tel:+74951234567"
                          className="text-lg text-muted-foreground hover:text-primary transition-colors"
                        >
                          +7 (495) 123-45-67
                        </a>
                        <p className="text-base text-muted-foreground mt-1">Звоните с 9:00 до 21:00</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <a
                          href="mailto:info@pedicure-babushki.ru"
                          className="text-lg text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          info@pedicure-babushki.ru
                        </a>
                        <p className="text-base text-muted-foreground mt-1">Ответим в течение часа</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Telegram</h3>
                        <a
                          href="https://t.me/vrnvaaa"
                          target="_blank"
                          className="text-lg text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          @vrnvaaa
                        </a>
                        <p className="text-base text-muted-foreground mt-1">Главная по бабулькам</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                        <p className="text-lg text-muted-foreground">Москва, ул. Цветочная, д. 15</p>
                        <p className="text-base text-muted-foreground mt-1">5 минут от метро "Парк Культуры"</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                        <div className="space-y-1 text-lg text-muted-foreground">
                          <p>Понедельник - Пятница: 9:00 - 21:00</p>
                          <p>Суббота - Воскресенье: 10:00 - 20:00</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/20 border-2 border-primary/20">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Мессенджеры</h3>
                      <p className="text-lg text-muted-foreground">WhatsApp, Telegram, Viber</p>
                      <p className="text-base text-muted-foreground mt-1">Пишите в любое время!</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-2xl sm:text-3xl">Записаться на Процедуру</CardTitle>
                    <CardDescription className="text-lg">
                      Заполните форму, и мы перезвоним вам в течение 15 минут
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-lg font-medium">
                          Ваше имя
                        </label>
                        <Input
                          id="name"
                          placeholder="Как к вам обращаться?"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="text-lg py-6"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-lg font-medium">
                          Телефон
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="text-lg py-6"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-lg font-medium">
                          Сообщение (необязательно)
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Расскажите о ваших пожеланиях или задайте вопрос"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={5}
                          className="text-lg resize-none"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full text-lg py-6">
                        Отправить Заявку
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Как Нас Найти</h2>
            <div className="aspect-video rounded-3xl overflow-hidden bg-secondary/20 shadow-xl">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755800&z=12&l=map&pt=37.617700,55.755800,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ position: "relative" }}
                title="Карта Москвы"
              />
            </div>
            <div className="mt-8 text-center">
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Наш салон находится в тихом районе с удобной парковкой. Вход оборудован пандусом для людей с
                ограниченными возможностями.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
