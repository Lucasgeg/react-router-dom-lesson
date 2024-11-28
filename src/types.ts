// Interface pour un utilisateur
export interface User {
  id: number;
  gender: "female" | "male"; // On peut préciser les genres possibles ici si nécessaire
  date_of_birth: string; // Utilisation de string pour la date, ou mieux utiliser `Date` si manipulée comme un objet
  job: string;
  city: string;
  zipcode: string;
  latitude: number;
  profile_picture: string;
  email: string;
  last_name: string;
  first_name: string;
  phone: string;
  street: string;
  state: string;
  country: string;
  longitude: number;
}

// Interface pour la réponse de l'API
export interface ApiResponseAll {
  success: boolean;
  message: string;
  total_users: number;
  offset: number;
  limit: number;
  users: User[];
}

export interface ApiResponseSolo {
  success: boolean;
  message: string;
  total_users: number;
  offset: number;
  limit: number;
  user: User;
}
