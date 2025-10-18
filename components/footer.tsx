import Link from "next/link"
import { Phone, Mail, MapPin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">🌸</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Педикюр для Бабушек</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Профессиональный уход за ножками с заботой и вниманием
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-lg text-muted-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link
                href="/services"
                className="block text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                Услуги
              </Link>
              <Link
                href="/contacts"
                className="block text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                Контакты
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+74951234567" className="text-lg">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@pedicure-babushki.ru"  className="text-lg">info@pedicure-babushki.ru</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-lg">Москва, ул. Цветочная, д. 15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-lg flex items-center justify-center gap-2">
            Сделано с <Heart className="h-5 w-5 text-red-500 fill-red-500" /> для наших любимых бабушек
          </p>
          <p className="text-muted-foreground text-base mt-2">© 2025 Педикюр для Бабушек. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
