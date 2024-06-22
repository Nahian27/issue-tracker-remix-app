import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import React from "react";
import { Toaster } from "~/components/ui/sonner";

const tabs = [
  { route: "/", label: "Dashboard" },
  { route: "/list", label: "List" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-neutral-950 dark:text-neutral-300 p-4 md:px-20 lg:px-48 subpixel-antialiased">
        <p className="text-3xl font-bold">TELESCOPE 🔭</p>
        <p className="opacity-65">Here is a list of tasks for you!</p>
        <div className=" flex items-center justify-end gap-4 my-2">
          {tabs.map((tab, i) => (
            <NavLink
              to={tab.route}
              className={({ isActive, isPending }) =>
                isPending
                  ? "animate-pulse"
                  : isActive
                  ? "bg-neutral-700 px-2 py-1 rounded"
                  : "hover:opacity-50"
              }
              key={i}
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Toaster />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
