import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import axios from "axios";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};

export async function loader({ context }: LoaderFunctionArgs) {
  const Axios = axios.create({ baseURL: context.cloudflare.env.API_URL });

  const res = await Axios.get("/issue");
  return res.data;
}

export default function Index() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix on Cloudflare</h1>
      {data.map(
        (
          item: {
            title: string;
          },
          i: number
        ) => (
          <p key={i}>{item.title}</p>
        )
      )}
    </div>
  );
}
