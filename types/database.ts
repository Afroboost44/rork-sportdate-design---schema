export type UserRole = 'USER' | 'PARTNER' | 'ADMIN';
export type UserStatus = 'ACTIVE' | 'BLOCKED' | 'INVISIBLE';
export type PartnerStatus = 'PENDING' | 'APPROVED' | 'SUSPENDED';
export type ReservationStatus = 'PENDING' | 'PAID' | 'CANCELLED';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  status: UserStatus;
  image_urls: string[];
  bio: string;
  sports: string[];
  location: string;
  created_at: Date;
}

export interface Partner {
  id: string;
  user_id: string;
  status: PartnerStatus;
  club_info: {
    name: string;
    description: string;
    address: string;
  };
  commission_rate: number;
  subscription_active: boolean;
  created_at: Date;
}

export interface Offer {
  id: string;
  partner_id: string;
  title: string;
  description: string;
  price: number;
  datetime: Date;
  location: string;
  image_url: string;
  is_active: boolean;
  is_boosted: boolean;
  sport: string;
  max_participants: number;
  current_participants: number;
  created_at: Date;
}

export interface Reservation {
  id: string;
  user_id: string;
  offer_id: string;
  status: ReservationStatus;
  payment_token: string;
  created_at: Date;
}

export interface Chat {
  id: string;
  participant_ids: string[];
  is_internal: boolean;
  external_token?: string;
  last_message?: string;
  last_message_at?: Date;
  created_at: Date;
}

export interface Message {
  id: string;
  chat_id: string;
  sender_id: string;
  content: string;
  created_at: Date;
}
