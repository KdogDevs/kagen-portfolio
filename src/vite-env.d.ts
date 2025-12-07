/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DASHBOARD_PASSWORD?: string;
  // Add more env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
