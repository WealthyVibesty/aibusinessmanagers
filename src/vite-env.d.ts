/// <reference types="vite/client" />

interface Window {
  Tawk_API?: {
    toggle: () => void;
    maximize: () => void;
    minimize: () => void;
  }
}