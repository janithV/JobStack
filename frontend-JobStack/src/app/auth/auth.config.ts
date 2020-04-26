import { ENV } from '../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'M7G48A638dNvQgEAbM2B7tSXmN07rpgz',
  CLIENT_DOMAIN: 'dev-ijbfdfba.auth0.com', // e.g., you.auth0.com
  AUDIENCE: 'http://localhost:4200/api/',
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile'
};