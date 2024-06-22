import type {MetaFunction} from "@remix-run/cloudflare";
import {Card} from "~/components/ui/card";

export const meta: MetaFunction = () => {
    return [
        {title: "TELESCOPE 🔭 - Dashboard"},
        {
            name: "description",
            content: "Welcome to my app!",
        },
    ];
};

export default function Index() {
    return (
        <>
            Dashboard
            <Card>
                hello
            </Card>
        </>
    );
}
