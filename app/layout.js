
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider,
  SignInButton,
  SignedIn,SignIn,
  SignedOut,
  UserButton} from "@clerk/nextjs";


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
      <SignedIn>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: 5,backgroundColor: '#FFE2C9'}}>
      <h2>PantryAi</h2>
              <div style={{ marginLeft: 'auto'}}>
                <UserButton showName />
              </div>
      </header>
      </SignedIn>
      
        <main>
          <SignedOut>
            <SignIn/>
          </SignedOut>
          <SignedIn>
          {children}
          </SignedIn>
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
