// Import dependencies
import { useRouter } from "next/router";

// Page function.
export default function Home() {
  // Router for page navigation
  const router = useRouter();
  // DOM return
  return (
    <>
      <div className={`flex flex-col bg-white w-1/2 h-1/2 my-12 items-center border-slate-600 border-4`}>
        <div className=" text-center mx-6">
          <h1 className="text-3xl mt-12">Welcome to kitchin</h1>
          <h2 className="text-xl mt-4">The helpful chef app</h2>
          <h3 className="mt-8">
            Click on "Begin Search" to start looking for recipes based on the ingredients you have in your kitchen.
          </h3>

          <div className="h-16" />
          <button className="btn btn-lg btn-green border-b-4 border-emerald-700" onClick={() => router.push("/fridge")}>
            Get Started
          </button>

          <div className="h-12" />
        </div>
      </div>
    </>
  );
}
