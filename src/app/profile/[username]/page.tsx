"use client"
import { capitalize } from "@/lib/capitalize";
import { useParams } from "next/navigation";

export default function ProfileID() {
    const params = useParams()
    return (
        <div>This is {capitalize(params.username)} Profile Page</div>
    );
}