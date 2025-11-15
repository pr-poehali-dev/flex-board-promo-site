import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background z-0" />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8">
              Баланс<br />
              <span className="font-semibold">в движении</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
              Премиальная гибкая доска для тренировки координации и укрепления мышц
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg rounded-full transition-all hover:scale-105"
              onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Заказать сейчас
            </Button>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-light text-center mb-20">Преимущества</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: 'Activity',
                title: 'Эффективность',
                description: 'Комплексная тренировка всех групп мышц за 15 минут в день'
              },
              {
                icon: 'Zap',
                title: 'Универсальность',
                description: 'Подходит для реабилитации, фитнеса и профессионального спорта'
              },
              {
                icon: 'Shield',
                title: 'Качество',
                description: 'Натуральное дерево премиум-класса с гарантией 5 лет'
              }
            ].map((benefit, idx) => (
              <Card 
                key={idx} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="pt-12 pb-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={benefit.icon} className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light text-center mb-20">Характеристики</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { label: 'Материал', value: 'Натуральный бук' },
                { label: 'Размеры', value: '80 × 30 × 18 см' },
                { label: 'Нагрузка', value: 'До 150 кг' },
                { label: 'Вес', value: '3.2 кг' },
                { label: 'Покрытие', value: 'Экологичный лак' },
                { label: 'Гарантия', value: '5 лет' }
              ].map((spec, idx) => (
                <div 
                  key={idx} 
                  className="flex justify-between items-center py-6 border-b border-border animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <span className="text-lg text-muted-foreground">{spec.label}</span>
                  <span className="text-xl font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-light text-center mb-20">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'https://cdn.poehali.dev/projects/c823cddb-0787-4baa-9234-2cc752518ada/files/56057e8e-8ef5-4041-adcd-e98ac4d2616d.jpg',
              'https://cdn.poehali.dev/projects/c823cddb-0787-4baa-9234-2cc752518ada/files/2100d94d-25b2-4f8b-b628-85be72fa3780.jpg',
              'https://cdn.poehali.dev/projects/c823cddb-0787-4baa-9234-2cc752518ada/files/c7c49a64-51a3-48d5-91d2-806299a17b9f.jpg'
            ].map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img 
                  src={img} 
                  alt={`Гибкая доска ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-light text-center mb-8">Заказать</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Оставьте заявку и получите персональную консультацию
            </p>
            <Card className="border-none shadow-2xl">
              <CardContent className="pt-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 text-base"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 text-base"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base bg-primary hover:bg-primary/90 rounded-full transition-all hover:scale-105"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-light">© 2024 Гибкая доска. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
