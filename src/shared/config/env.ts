import {z} from 'zod'

const envSchema = z.object({
    VITE_TMDB_TOKEN: z.string().min(1, 'VITE_TMDB_TOKEN Not found'),
    VITE_TMDB_BASE_URL: z.string().min(1).default("https://api.themoviedb.org/3")
})

const parsed = envSchema.safeParse(import.meta.env)

if (!parsed.success) {
    throw new Error(`Invalid configuration:\n${parsed.error.message}`);
}

export const env = parsed.data;