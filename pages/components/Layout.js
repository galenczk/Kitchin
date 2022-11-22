import axios from "axios";

export default function Layout({ children, number }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-800 text-white text-3xl p-2">
        <h1>Kitchin</h1>
      </header>
      <main className={`bg-${number} flex flex-col items-center mb-auto flex-grow`}>{children}</main>
      <footer className="text-center bg-slate-800 p-0.5 text-white">
        <p>Galen Ciszek &copy; 2022</p>
      </footer>
    </div>
  );
}
