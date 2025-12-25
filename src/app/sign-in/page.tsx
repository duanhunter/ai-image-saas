"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-2xl border bg-card p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Continue with GitHub to access your dashboard.
        </p>

        <Button
          className="mt-6 w-full"
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        >
          Continue with GitHub
        </Button>

        <p className="mt-4 text-xs text-muted-foreground">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
}
