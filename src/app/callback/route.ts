import { NextRequest } from 'next/server';

const { NEXT_PUBLIC_GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

const getAccessToken = async (request: NextRequest) => {
  const code = request.nextUrl.searchParams.get('code');

  const url = `https://github.com/login/oauth/access_token`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: NEXT_PUBLIC_GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code: code
    })
  });
  const data = await res.json();
  const { access_token } = data;

  return access_token;
};

const getUserData = async (token: string) => {
  const url = 'https://api.github.com/user';
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();
  console.log(data);
};

export async function GET(request: NextRequest) {
  const token = await getAccessToken(request);
  const userData = await getUserData(token);

  return Response.json({ message: 'Hello World!' });

}