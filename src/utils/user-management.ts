import { cookies } from 'next/headers'

const getUserLoginStatus = async () => {
  const sessionToken = (await cookies()).get('session_token');
  if (!sessionToken) {
    return false;
  }
  return true;
};

export { getUserLoginStatus };