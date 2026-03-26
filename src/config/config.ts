// Use a dynamic import for dotenv to ensure it's only loaded in a Node.js environment
if (typeof process !== 'undefined' && process.release && process.release.name === 'node') {
  import('dotenv').then((dotenv) => {
    dotenv.config({ path: '.env' });
  });
}

export const USER_SUPPORT_ENABLED = process.env.NEXT_PUBLIC_USER_SUPPORT === 'true';
export const IMAGE_LOCATION = (process.env.IMG_STORAGE_LOCATION ?? '/') + (process.env.IMG_STORAGE_PATH ?? '');
