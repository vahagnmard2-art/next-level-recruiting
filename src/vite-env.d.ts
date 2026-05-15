/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ID: string
  readonly VITE_SAMPLE_TAPE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
