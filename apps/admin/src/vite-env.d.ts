/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_MOCKING_ON: 'enable' | 'disable';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
