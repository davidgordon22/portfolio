import { IBM_Plex_Mono, Inter, Newsreader } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});
