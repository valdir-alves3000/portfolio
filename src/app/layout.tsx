import "aos/dist/aos.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const PORTFOLIO = {
  title: "Valdir Alves | Desenvolvedor Full-Stack",
  site: "https://portfolio-valdir-alves3000.vercel.app/",
  description:
    "Minha experiência abrange desde o desenvolvimento de backends utilizando NestJS e Express até a criação de interfaces de usuário no frontend com ReactTS e NextJs. Tenho paixão por explorar novas tecnologias e aplicá-las na criação de soluções de alta qualidade. Atualmente, estou focado no desenvolvimento web como um desenvolvedor full stack, pronto para contribuir e aprender cada vez mais neste emocionante campo da tecnologia.",
  image: "/assets/img/negative-profile.png",
};

export const metadata: Metadata = {
  title: PORTFOLIO.title,
  description: PORTFOLIO.description,
  icons: {
    icon: ["/assets/icons/logo.svg"],
  },
  applicationName: PORTFOLIO.title,
  appleWebApp: {
    statusBarStyle: "black",
  },
  keywords:
    "Valdir Alves, Frontend Engineer, Code, Web Development, User Experience, Portfolio, Front-End Developer, Developer",
  openGraph: {
    type: "website",
    url: PORTFOLIO.site,
    title: PORTFOLIO.title,
    description: PORTFOLIO.description,
    images: PORTFOLIO.image,
  },
  twitter: {
    card: "summary_large_image",
    site: PORTFOLIO.site,
    creator: "@",
    title: PORTFOLIO.title,
    images: PORTFOLIO.image,
    description: PORTFOLIO.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`bg-gray-800  text-blue-200 ${inter.className} `}>
        <Navbar />
        <div className="max-w-[1400px] m-auto">{children}</div>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
