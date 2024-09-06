
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton} from "@clerk/nextjs/dist/types/components.server";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PantryAi",
  description: "Track pantry item with ease",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
