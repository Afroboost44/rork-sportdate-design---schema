import { User } from '@/types/database';

export const mockCurrentUser: User = {
  id: 'u1',
  email: 'alex@spordate.app',
  name: 'Alex',
  role: 'USER',
  status: 'ACTIVE',
  image_urls: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'],
  bio: 'Fitness enthusiast | Love beach volleyball and yoga | Always up for new adventures 🏐',
  sports: ['Volleyball', 'Yoga', 'Running'],
  location: 'Los Angeles, CA',
  created_at: new Date('2025-11-01'),
};
