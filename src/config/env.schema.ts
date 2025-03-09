import {z} from 'zod';

export const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production']).default('development'),
    DATABASE_HOST: z.string().default('localhost'),
    DATABASE_NAME: z.string().default('tapuznet-db'),
    DATABASE_PASSWORD: z.string().default('tapuznet'),
    DATABASE_PORT: z.coerce.number().default(5432),
    PORT: z.coerce.number().min(3000).max(9000).default(3000),

    AWS_REGION: z.string(),
    AWS_ACCESS_KEY_ID: z.string(),
    AWS_SECRET_ACCESS_KEY: z.string(),
    AWS_BUCKET_NAME: z.string(),
});
