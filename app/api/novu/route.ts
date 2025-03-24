import { serve } from '@novu/framework/next';
import {
  welcomeOnboardingEmail,
  welcomeOnboardingEmail2,
  theNewInboxNotification,
} from '../../novu/workflows';

// the workflows collection can hold as many workflow definitions as you need
export const { GET, POST, OPTIONS } = serve({
  workflows: [
    welcomeOnboardingEmail,
    welcomeOnboardingEmail2,
    theNewInboxNotification,
  ],
});
