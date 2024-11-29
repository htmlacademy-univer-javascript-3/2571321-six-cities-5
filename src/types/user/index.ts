export type UserShort = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type UserLong = UserShort & {
  email: string;
  token: string;
};
