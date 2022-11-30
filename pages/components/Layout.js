import { useRouter } from "next/router"

export default function Layout(props) {
  const router = useRouter();
  // DOM return
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-800 text-white text-3xl p-2">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          Kitchin
        </button>
      </header>
      <main className={`bg-${props.number} flex flex-col items-center mb-auto flex-grow`}>{props.children}</main>
      <footer className="text-center bg-slate-800 p-0.5 text-white">
        <p>Galen Ciszek &copy; 2022</p>
      </footer>
    </div>
  );
}
