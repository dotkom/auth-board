export interface OidcClientOwner {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
  }
  
export interface OidcClient {
    id: number;
    client_id: string;
    client_type: string;
    name: string;
    owner?: OidcClientOwner;
    data_created: string;
    website_url: string;
    terms_url: string;
    contact_email: string;
    logo: string;
    require_consent: boolean;
    reuse_consent: boolean;
    scope: string[];
    response_types: ResponseType[];
}

export interface ResponseType {
  id: number;
  value: string;
  description: string;
}