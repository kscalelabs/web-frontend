import { DarkModeProvider } from "../providers/DarkModeProvider";
import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DarkModeProvider>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}
