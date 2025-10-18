import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Классический Педикюр",
      price: "1 500 ₽",
      duration: "60 минут",
      description: "Полный уход за ногтями и стопами",
      features: [
        "Ванночка для ног с травами",
        "Обработка ногтей и кутикулы",
        "Удаление огрубевшей кожи",
        "Массаж стоп",
        "Покрытие лаком (по желанию)",
      ],
      image: "/classic-pedicure-for-elderly-woman.jpg",
    },
    {
      title: "Медицинский Педикюр",
      price: "2 000 ₽",
      duration: "90 минут",
      description: "Профессиональный уход при проблемах с ногтями",
      features: [
        "Обработка вросших ногтей",
        "Удаление мозолей и натоптышей",
        "Лечение грибка",
        "Коррекция формы ногтей",
        "Лечебные препараты",
      ],
      popular: true,
      image: "/medical-pedicure-treatment-for-seniors.jpg",
    },
    {
      title: "СПА-Педикюр",
      price: "2 500 ₽",
      duration: "120 минут",
      description: "Максимальное расслабление и уход",
      features: [
        "Ароматическая ванночка",
        "Пилинг и скраб",
        "Парафинотерапия",
        "Расслабляющий массаж 30 мин",
        "Питательная маска",
        "Покрытие гель-лаком",
      ],
      image: "/luxury-spa-pedicure-for-elderly.jpg",
    },
    {
      title: "Педикюр на Дому",
      price: "от 2 500 ₽",
      duration: "90 минут",
      description: "Выезд мастера к вам домой",
      features: [
        "Выезд в удобное время",
        "Все необходимое оборудование",
        "Стерильные инструменты",
        "Любой вид педикюра",
        "Комфорт родных стен",
      ],
      image: "/mobile-pedicure-service-at-home.jpg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
              Наши Услуги
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Выберите подходящую процедуру для ваших ножек. Все услуги выполняются опытными мастерами с медицинским
              образованием.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    service.popular ? "border-2 border-primary" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Популярно
                    </div>
                  )}

                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl sm:text-3xl">{service.title}</CardTitle>
                    <CardDescription className="text-lg">{service.description}</CardDescription>
                    <div className="flex items-baseline gap-4 pt-2">
                      <span className="text-3xl font-bold text-primary">{service.price}</span>
                      <span className="text-lg text-muted-foreground">{service.duration}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-lg leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full text-lg py-6 mt-6" size="lg">
                      <Link href="/contacts">Записаться</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Важная Информация</h2>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Что Входит в Каждую Процедуру</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg leading-relaxed">
                  <p>
                    🌸 <strong>Индивидуальный подход:</strong> Мы учитываем все особенности и пожелания каждого клиента
                  </p>
                  <p>
                    🌸 <strong>Стерильность:</strong> Все инструменты проходят обработку в сухожаровом шкафу
                  </p>
                  <p>
                    🌸 <strong>Качественные материалы:</strong> Используем только проверенные гипоаллергенные средства
                  </p>
                  <p>
                    🌸 <strong>Комфорт:</strong> Удобные кресла, приятная музыка и чай с печеньем
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Скидки и Акции</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg leading-relaxed">
                  <p>
                    💝 <strong>Пенсионерам:</strong> Скидка 10% на все услуги по будням до 14:00
                  </p>
                  <p>
                    💝 <strong>Постоянным клиентам:</strong> Каждая 5-я процедура со скидкой 20%
                  </p>
                  <p>
                    💝 <strong>Приведи подругу:</strong> Обе получают скидку 15% на первую процедуру
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
