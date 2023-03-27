/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_MOCKING_ON: 'enable' | 'disable';
  readonly VITE_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
