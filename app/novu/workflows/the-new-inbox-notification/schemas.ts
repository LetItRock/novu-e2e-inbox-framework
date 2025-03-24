import { z } from 'zod';

// Learn more about zod at the official website: https://zod.dev/
export const payloadSchema = z.object({
  avatar: z
    .string()
    .url()
    .optional()
    .default(
      'https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-user.png'
    ),
  text: z
    .string()
    .default(
      'Hello there! You have a new notification. Click the button below to open it.'
    ),
});

export const emailControlSchema = z.object({
  subject: z
    .string()
    .default(
      'The quick brown fox jumps over the lazy dog. **With very long title.**'
    ),
  body: z
    .string()
    .default(
      'Notifications can ***include*** many other \\*features\\* like **sound, vibration, buttons, and more.**'
    ),
});
