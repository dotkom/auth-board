import { getSession, Session } from 'next-auth/client';
import { getServerSideProps } from 'pages/clients';

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
  session?: Session;
}

const performRequest = async (query: string, options: RequestOptions = {}) => {
  const { headers, session, ...restOptions } = options;
  const url = `${process.env.OW4_ADDRESS}/api/v1${query}`;
  if (session) {
    headers['Authorization'] = `Bearer ${session.accessToken}`;
  }

  const requestOptions = { ...restOptions, headers };
  const response = await fetch(url, requestOptions);
  if (response.status === 204) {
    return null;
  }

  // 403 - Forbidden does not return any meaningful api data (oidc consent api requires that an error is thrown to show error message)
  // 5xx - Gateway/Internal errors do not return any meaningful api data
  if (response.status === 403 || response.status === 404 || response.status > 499) {
    throw new Error(`FetchError: ${response.status} for ${url}`);
  }

  try {
    const data = await response.json();
    // Return results if paginated
    if (data.hasOwnProperty('results')) {
      return data.results;
    }
    // Else, return JSON-data
    return data;
  } catch {
    throw new Error(
      `Expected data from ${url} to be JSON. Attempt to turn the body into JSON resulted in ${JSON.stringify(
        response.body
      )}`
    );
  }
};

export const get = async <T>(query: string, options: RequestOptions = {}): Promise<T> => {
  const session = await getSession();
  return performRequest(query, { ...options, headers: {}, session });
};

export const post = async <T>(
  query: string,
  data: T | Record<string, unknown>,
  options: RequestOptions = {}
): Promise<T> => {
  const session = await getSession();
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify(data);
  const opts = { ...options, method: 'POST', body, headers };
  const requestResult = performRequest(query, { ...opts, session });
  console.log('Post request result!', requestResult);
  return requestResult;
};

export const put = async <T, K = Partial<T>>(query: string, data: K, options: RequestOptions = {}): Promise<T> => {
  const session = await getSession();
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify(data);
  const opts = { ...options, method: 'PUT', body, headers };
  return performRequest(query, { ...opts, session });
};

export const patch = async <T, K = Partial<T>>(query: string, data: K, options: RequestOptions = {}): Promise<T> => {
  const session = await getSession();
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify(data);
  const opts = { ...options, method: 'PATCH', body, headers };
  return performRequest(query, { ...opts, session });
};

export const deleteR = async <T>(query: string, options: RequestOptions = {}): Promise<T> => {
  const session = await getSession();
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const opts = { ...options, method: 'DELETE', headers };
  return performRequest(query, { ...opts, session });
};
