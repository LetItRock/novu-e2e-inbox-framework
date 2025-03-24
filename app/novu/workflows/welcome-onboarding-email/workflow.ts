import { workflow } from '@novu/framework';
import { renderEmail } from '../../emails/novu-onboarding-email';
import { emailControlSchema, payloadSchema } from './schemas';

export const welcomeOnboardingEmail = workflow(
  'welcome-onboarding-email',
  async ({ step, payload }) => { // <--- discover or executeworkflow call
    await step.email(
      'send-email',
      async (controls) => {
        return {
          subject: controls.subject,
          body: renderEmail(controls, payload),
        };
      },
      {
        controlSchema: emailControlSchema,
      }
    );
  },
  {
    payloadSchema,
  }
);

export const welcomeOnboardingEmail2 = workflow(
  'welcome-onboarding-email2',
  async ({ step, payload }) => {
    await step.inApp(
      'send-in-app',
      async (controls) => {
        return {
          subject: controls.subject,
          body: 'You have been invited to the Novu party on "commentSnippet" 333',
        };
      },
      {
        controlSchema: emailControlSchema,
        skip: () => {
          if (new Date().getSeconds() % 2 === 0) {
            return true;
          }

          return false;
        },
      }
    );

    await step.email(
      'send-email',
      async (controls) => {
        return {
          subject: controls.subject,
          body: renderEmail(controls, payload),
        };
      },
      {
        controlSchema: emailControlSchema,
      }
    );

    await step.chat(
      'send-chat',
      async () => {
        return {
          body: 'You have been invited to the Novu party on "commentSnippet"',
        };
      },
      {
        controlSchema: emailControlSchema,
      }
    );

    await step.push(
      'send-push',
      async (controls) => {
        return {
          subject: controls.subject,
          body: 'You have been invited to the Novu party on "commentSnippet"',
        };
      },
      {
        controlSchema: emailControlSchema,
      }
    );

    await step.sms(
      'send-sms',
      async () => {
        return {
          body: 'You have been invited to the Novu party on "commentSnippet"',
        };
      },
      {
        controlSchema: emailControlSchema,
      }
    );

    await step.digest(
      'send-digest',
      async () => {
        return {
          amount: 1,
          unit: 'days',
        };
      },
      {
        controlSchema: emailControlSchema,
      }
    );

    await step.delay(
      'send-delay',
      async () => {
        return {
          amount: 1000,
          unit: 'minutes',
        };
      },
      {
        controlSchema: emailControlSchema,
      }
    );

    await step.custom(
      'send-custom',
      async () => {
        return {
          body: 'You have been invited to the Novu party on "commentSnippet"',
        };
      },
      {
        controlSchema: emailControlSchema,
      }
    );
  },
  {
    payloadSchema,
  }
);
