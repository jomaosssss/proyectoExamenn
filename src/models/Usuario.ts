export interface Usuario {
  name?: {
    first?: string;
    last?: string;
  };
  email?: string | null;
  picture?: string;
  phone?: string;
}
