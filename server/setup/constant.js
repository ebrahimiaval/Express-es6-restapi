import path from "path";

export const PUBLIC_PATH = path.join(__dirname, '../public');
export const SITE_ADDRESS = 'https://avalamoozesh.com';
export const IS_DEVELOPMENT =  process.env.NODE_ENV === 'development';
export const IS_PRODUCTION =  process.env.NODE_ENV === 'production';


