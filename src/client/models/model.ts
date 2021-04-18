export interface OidcClientOwner {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
}

export interface OidcClient {
  id: number;
  client_id: string;
  client_type: 'public' | 'confidential';
  name: string;
  owner?: OidcClientOwner;
  created: string;
  website_url: string;
  terms_url: string;
  contact_email: string;
  logo: string;
  require_consent: boolean;
  reuse_consent: boolean;
  scope: string[];
  authorization_grant_type: string;
  redirect_uris: string[];
  client_secret?: string;
}
