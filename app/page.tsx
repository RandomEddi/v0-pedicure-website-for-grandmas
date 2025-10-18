import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sparkles, Clock, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Забота о Ваших Ножках с Любовью
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed text-pretty">
                  Профессиональный педикюр для пожилых людей. Комфорт, внимание и забота в каждой процедуре.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <Link href="/services">Наши Услуги</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                    <Link href="/contacts">Записаться</Link>
                  </Button>
                </div>
              </div>

              <div className="relative animate-float">
                <div className="aspect-square rounded-3xl overflow-hidden bg-secondary/20 flex items-center justify-center">
                  <img
                    src="/elderly-woman-getting-professional-pedicure-in-coz.jpg"
                    alt="Педикюр для бабушек"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Почему Выбирают Нас</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Мы создали особенное место, где каждая бабушка чувствует себя как дома
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: "С Любовью",
                  description: "Относимся к каждому клиенту как к родному человеку",
                  color: "text-red-500",
                },
                {
                  icon: Sparkles,
                  title: "Профессионально",
                  description: "Опытные мастера с медицинским образованием",
                  color: "text-yellow-500",
                },
                {
                  icon: Clock,
                  title: "Удобно",
                  description: "Гибкий график и возможность выезда на дом",
                  color: "text-blue-500",
                },
                {
                  icon: Shield,
                  title: "Безопасно",
                  description: "Стерильные инструменты и гипоаллергенные средства",
                  color: "text-green-500",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center ${feature.color}`}
                    >
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/20 border-2 border-primary/20">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                  Запишитесь на Процедуру Сегодня
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Подарите своим ножкам заботу и внимание, которых они заслуживают
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <Link href="/contacts">Записаться Сейчас</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                    <Link href="/services">Узнать Цены</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
