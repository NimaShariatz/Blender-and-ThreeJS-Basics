// src/custom.d.ts
/// <reference types="vite/client" />

declare module '*.blend' {
  const src: string;
  export default src;
}

declare module '*.mkv' {
  const src: string;
  export default src;
}