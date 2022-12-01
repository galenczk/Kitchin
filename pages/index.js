// Import dependencies
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


// Page function.
export default function Home() {
  // Router for page navigation
  const router = useRouter();

  // loading is a state that toggles loading indicator
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(false);
    }, []);

  return (
    <>
      <div className={`flex flex-col bg-white w-1/2 h-1/2 my-12 items-center border-slate-600 border-4`}>
        <div className=" text-center mx-6">
          <h1 className="text-3xl mt-12">Welcome to kitchin</h1>
          <h2 className="text-xl mt-4">The helpful chef app</h2>
          <h3 className="mt-8">
            Click <b className="text-emerald-700">&quot;Get Started&quot;</b> to start looking for recipes based on the
            ingredients you have in your kitchen.
          </h3>
          <h3 className="">
            If you get stuck at any point, click <b className="text-fuchsia-600">&quot;Help&quot;</b> in the top right!{" "}
          </h3>
          <h3 className="mt-6">
            Now you can search recipes by <b>diet</b>. <br />
            It's optional and leaving the diet field blank will result in the same search results as before.
            <br />
            Give it a try!
          </h3>

          <div className="h-8 mt-8" />
          {loading === true ? (
            <div>
              <p className="btn text-white bg-emerald-900 font-bold w-36 mx-auto">Loading...</p>
            </div>
            
          ) : (
            <button
              className="btn btn-lg btn-green border-4 border-t-0 border-emerald-700"
              onClick={() => {
                setLoading(true)
                router.push("/fridge")
              }}
            >
              Get Started
            </button>
          )}

          <h3 className="mt-8">- or -</h3>
          <h3 className="mt-6">
            If you are new to Kitchin, read the{" "}
            <button
              className="btn-small btn-blue border-b-2 border-sky-700"
              onClick={() => {
                router.push("/tutorial");
              }}
            >
              Tutorial Page
            </button>{" "}
          </h3>

          <div className="h-12" />
        </div>
      </div>
    </>
  );
}
