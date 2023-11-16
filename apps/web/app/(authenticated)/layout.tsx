import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ClerkProvider, auth } from "@clerk/nextjs";
import * as Sentry from "@sentry/nextjs";

export const dynamic = "force-dynamic";

import { ThemeProvider } from "./theme-provider";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider attribute="class">
        <TooltipProvider>
          <ClerkProvider
            afterSignInUrl="/app"
            afterSignUpUrl="/onboarding"
            appearance={{
              variables: {
                colorPrimary: "#5C36A3",
                colorText: "#5C36A3",
              },
            }}
          >
            <SetUserInSentry />
            {children}
          </ClerkProvider>
        </TooltipProvider>
        <Toaster />
      </ThemeProvider>
    </>
  );
}

const SetUserInSentry: React.FC = () => {
  const { userId } = auth();
  if (!userId) {
    Sentry.setUser(null);
  } else {
    Sentry.setUser({
      id: userId,
    });
  }
  return null;
};
