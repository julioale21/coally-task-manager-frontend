import { DefaultSession, DefaultUser } from "next-auth";

interface IUser extends DefaultUser {
  id: string;
  email: string;
  name?: string;
  token: string;
  roles: string[];
}

declare module "next-auth" {
  interface Session {
    user: IUser & DefaultSession["user"];
  }

  interface User {
    id: string;
    email: string;
    name?: string;
    token: string;
    roles: string[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: IUser;
  }
}
