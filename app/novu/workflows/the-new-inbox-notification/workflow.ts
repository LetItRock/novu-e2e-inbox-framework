import { workflow } from '@novu/framework';
import { emailControlSchema, payloadSchema } from './schemas';

export const theNewInboxNotification = workflow(
  'the-new-inbox-notification',
  async ({ step, payload }) => {
    await step.inApp(
      'send-in-app',
      async (controls) => {
        return {
          subject: controls.subject,
          body: controls.body,
          avatar: payload.avatar,
          redirect: {
            url: 'https://docs.novu.co/getting-started/introduction',
            target: '_self',
          },
          primaryAction: {
            label: 'Open',
            redirect: {
              url: 'https://docs.novu.co/getting-started/introduction',
            },
          },
          secondaryAction: {
            label: 'Dismiss',
            redirect: {
              url: 'https://docs.novu.co/getting-started/introduction',
            },
          },
          data: {
            avatar: payload.avatar,
            text: payload.text,
            array: [1, 2, 3],
          },
        };
      },
      {
        controlSchema: emailControlSchema,
      }
    );
  },
  {
    payloadSchema,
    tags: ['newsletter'],
  }
);
