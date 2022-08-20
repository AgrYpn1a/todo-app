/** @type {import('next').NextConfig} */

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  emulatorsEnabled:
    process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_ENABLED === 'true',
};

const publicRuntimeConfig = {
  firebaseConfig,
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig,
};

module.exports = nextConfig;
