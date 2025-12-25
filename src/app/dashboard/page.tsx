import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Welcome back{session?.user?.name ? `, ${session.user.name}` : ""}!
      </p>

      <div className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
        <p className="font-semibold">✅ NextAuth is working</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Next: connect Prisma DB, store users, add Stripe billing, and usage limits.
        </p>
      </div>
    </div>
  );
}
