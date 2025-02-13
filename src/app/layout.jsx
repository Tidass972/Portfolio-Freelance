import { Inter, Fira_Code } from "next/font/google";
import { texturina } from "@/lib/fonts";
import "./globals.css";
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});
const firaCode = Fira_Code({
    variable: "--font-fira-code",
    subsets: ["latin"],
});
export const metadata = {
    title: "Portfolio Développeur Web",
    description: "Portfolio professionnel d'un développeur web front-end spécialisé en création de sites modernes et performants",
};
export default function RootLayout({ children, }) {
    return (<html lang="fr">
      <body className={`${inter.variable} ${firaCode.variable} ${texturina.variable} antialiased`}>
        {children}
      </body>
    </html>);
}
