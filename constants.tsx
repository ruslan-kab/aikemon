
import React from 'react';
import { 
  MessageSquare, 
  Image as ImageIcon, 
  Code, 
  Music, 
  Video, 
  Cpu, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';
import { AIModel, ShowcaseExample, NavLink } from './types';

export const SERVICE_URL = "https://example-ai-service.com/start";

export const NAV_LINKS: NavLink[] = [
  { label: 'Возможности', href: '#features' },
  { label: 'Примеры', href: '#showcase' },
  { label: 'Модели', href: '#models' },
  { label: 'FAQ', href: '#faq' },
];

export const MODELS: AIModel[] = [
  { id: '1', name: 'GPT-4o', category: 'text', description: 'Самая мощная языковая модель для любых задач.', icon: 'MessageSquare' },
  { id: '2', name: 'Midjourney v6', category: 'image', description: 'Фотореалистичные изображения высокого качества.', icon: 'ImageIcon' },
  { id: '3', name: 'Claude 3.5 Sonnet', category: 'code', description: 'Эталон в написании кода и логических задачах.', icon: 'Code' },
  { id: '4', name: 'Suno AI', category: 'audio', description: 'Создание полноценных песен из текста.', icon: 'Music' },
  { id: '5', name: 'Luma Dream Machine', category: 'video', description: 'Генерация кинематографичных видео.', icon: 'Video' },
  { id: '6', name: 'Stable Diffusion XL', category: 'image', description: 'Полный контроль над генерацией изображений.', icon: 'ImageIcon' },
];

export const SHOWCASE: ShowcaseExample[] = [
  {
    id: 1,
    title: "Киберпанк Архитектура",
    type: "image",
    content: "Футуристический город в неоновых огнях под дождем, детализация 8k.",
    previewUrl: "https://picsum.photos/seed/cyber/800/600",
    model: "Midjourney v6"
  },
  {
    id: 2,
    title: "Маркетинговая стратегия",
    type: "text",
    content: "План продвижения нового SaaS продукта для рынка Европы на 2024 год с акцентом на контент-маркетинг.",
    model: "GPT-4o"
  },
  {
    id: 3,
    title: "React Хук для API",
    type: "code",
    content: "export const useFetch = <T,>(url: string) => {\n  const [data, setData] = useState<T | null>(null);\n  // ...",
    model: "Claude 3.5"
  },
  {
    id: 4,
    title: "Портрет в стиле Ренессанс",
    type: "image",
    content: "Цифровой портрет женщины в стиле классической масляной живописи 16 века.",
    previewUrl: "https://picsum.photos/seed/art/800/600",
    model: "DALL-E 3"
  }
];

export const FEATURES = [
  {
    title: "Единый интерфейс",
    desc: "Больше не нужно переключаться между 40 вкладками. Все нейросети доступны в одном окне.",
    icon: <Cpu className="w-6 h-6 text-indigo-500" />
  },
  {
    title: "Молниеносная скорость",
    desc: "Прямой доступ к API обеспечивает минимальную задержку при генерации.",
    icon: <Zap className="w-6 h-6 text-purple-500" />
  },
  {
    title: "Безопасность данных",
    desc: "Ваши промпты и результаты генерации зашифрованы и доступны только вам.",
    icon: <ShieldCheck className="w-6 h-6 text-pink-500" />
  }
];
