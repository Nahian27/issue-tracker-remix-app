import type {MetaFunction} from "@remix-run/cloudflare";
import {Button} from "~/components/ui/button";
import {toast} from "sonner";

export const meta: MetaFunction = () => {
    return [
        {title: "TELESCOPE 🔭 - List"},
        {
            name: "description",
            content: "Welcome to my app!",
        },
    ];
};

export default function Index() {
    return (
        <>
            List
            <Button
                variant="outline"
                onClick={() =>
                    toast("Event has been created", {
                        description: "Sunday, December 03, 2023 at 9:00 AM",
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                    })
                }
            >
                Show Toast
            </Button>
        </>
    );
}