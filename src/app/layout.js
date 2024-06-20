import "@/app/globals.css";
import Header from "@/components/Header";

export const metadata = {
    title: "My Test in Next.js",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="fr">
        <body className="bg-gray-900 text-white">
        <Header/>
        {children}
        </body>
        </html>
    );
}
