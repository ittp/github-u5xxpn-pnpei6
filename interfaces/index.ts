export type User = {
  id: number;
  name?: string;
};
export type Data = {
  id: number;
  key?: string;
  name?: string;
  ip?: string;
  port?: number;
  
};
export type Room = {
  id: unique;
  key: number;
  name?: string;
  users: User
};
