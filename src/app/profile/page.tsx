import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Page",
  description: "This is Profile description",
  openGraph:{
    title: "Profile Page",
    description: "This is Profile description",
    url: 'myweb@gmail.com',
    siteName:'ganja',
    images:{
        url:'/myweb.png',
        width:1260,
        height:800,
    },
    locale:'en-EN',
  }
};

export default function Profile() {
    return (
        <div>This Profile Page</div>
    );
}