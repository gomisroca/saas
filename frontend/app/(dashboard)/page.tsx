"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/contexts/auth";
import { useOrg } from "@/contexts/org";

export default function DashboardPage() {
  const { user } = useAuth();
  const { activeOrg } = useOrg();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back{user?.full_name ? `, ${user.full_name}` : ""}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Organisation</CardTitle>
            <CardDescription>Your current workspace</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex gap-2">
              <span className="text-muted-foreground w-20">Name</span>
              <span>{activeOrg?.name}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground w-20">Slug</span>
              <span className="font-mono text-xs">{activeOrg?.slug}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground w-20">Plan</span>
              <span className="capitalize">{activeOrg?.plan}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground w-20">Your role</span>
              <span className="capitalize">{activeOrg?.role}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex gap-2">
              <span className="text-muted-foreground w-20">Name</span>
              <span>{user?.full_name ?? "—"}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground w-20">Email</span>
              <span>{user?.email}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground w-20">User ID</span>
              <span className="font-mono text-xs">{user?.id}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
