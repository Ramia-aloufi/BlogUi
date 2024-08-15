export interface DecodedToken {
  role: string;
  unique_name: string;
  nameid: string;
  iat: number;
  exp: number;
  nbf: number;
}
