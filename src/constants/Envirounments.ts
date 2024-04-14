export const Environment = {
  ENVIRONMENT: import.meta.env.VITE_ENVIRONMENT,
  API_URL: import.meta.env.VITE_API_URL,
} as const;

export type EnvironmentType = keyof typeof Environment;
