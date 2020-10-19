import NextAuth from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';
import { SessionBase } from 'next-auth/_utils';

export const OW4_ADDRESS = process.env.OW4_ADDRESS || 'https://online.ntnu.no';

interface Token {
  name?: string;
  email?: string;
  picture?: string; // url to image
  accessToken?: string;
  iat: number;
  exp: number;
}

interface Account {
  provider: string | null;
  type: string | null;
  id: number | null;
  refreshToken: string | null;
  accessToken: string | null;
  accessTokenExpires: null;
}

const options = {
  callbacks: {
    session: async (session: SessionBase, token: Token) => {
      const { iat, exp, accessToken, ...rest } = token;
      if (token.accessToken) {
        session.accessToken = token.accessToken;
      } else {
        session.accessToken = undefined;
      }
      return Promise.resolve(session);
    },
    jwt: async (token: Token, _: Token, account: Account) => {
      if (account && account.accessToken) {
        token.accessToken = account.accessToken;
      }
      return Promise.resolve(token);
    },
  },
  providers: [
    {
      id: 'onlineweb4',
      name: 'Onlineweb4',
      type: 'oauth',
      version: '2.0',
      scope: 'openid profile email onlineweb4',
      params: {
        grant_type: 'authorization_code',
      },
      accessTokenUrl: `${OW4_ADDRESS}/openid/token`,
      requestTokenUrl: `${OW4_ADDRESS}/openid/authorize`,
      authorizationUrl: `${OW4_ADDRESS}/openid/authorize?response_type=code`,
      profileUrl: `${OW4_ADDRESS}/openid/userinfo`,
      profile: (profile) => {
        return {
          ...profile,
          id: profile.sub,
          image: profile.picture,
          email: profile.email,
        };
      },
      clientId: process.env.OW4_SSO_CLIENT_ID,
      clientSecret: process.env.OW4_SSO_CLIENT_SECRET,
      debug: true,
      idToken: false,
    },
  ],
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
