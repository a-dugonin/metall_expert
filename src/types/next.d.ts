// Предотвращение конфликтов типов
import 'next'

declare module 'next' {
  export interface NextConfig {
    env?: Record<string, string>
  }
}