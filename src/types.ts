export type TabType = 'inspection' | 'for_me' | 'farm' | 'shop' | 'qr';

export interface UserProfile {
  name: string;
  gender: 'female' | 'male';
  age: number;
  status: 'pregnant' | 'none' | 'cancer' | 'infant';
  months?: number; // for pregnant
  allergies?: string[];
}
