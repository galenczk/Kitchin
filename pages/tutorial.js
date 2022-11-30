// Import dependencies
import { useRouter } from "next/router";
import Image from "next/image";

// Import images
import splashPage from "../public/tut-images/splashPage.png";
import fridgePage from "../public/tut-images/fridgePage.png";
import resultsPage from "../public/tut-images/resultsPage.png";
import recipePage from "../public/tut-images/recipePage.png";

export default function Tutorial() {
  const router = useRouter();
  // DOM return
  return (
    <>
      <div className="items-center">
        <div className="p-4 bg-white text-center text-2xl">
          <p>Please scroll through the following images to learn about Kitchin.</p>
          <p>Whenever you&apos;re ready, click &quot;Get Started&quot; to begin!</p>
          <button
            className="btn btn-small btn-green border-b-4 border-emerald-600  m-6"
            onClick={() => {
              router.push("/fridge");
            }}
          >
            Get Started
          </button>
        </div>
        <div className="min-w-full bg-white ">
          <Image src={splashPage} className="mx-auto" />
        </div>
        <div className="h-16 bg-white" />
        <div className="min-w-full bg-white">
          <Image src={fridgePage} className="mx-auto" id="fridgeTut" />
        </div>
        <div className="h-16 bg-white" />
        <div className="min-w-full bg-white">
          <Image src={resultsPage} className="mx-auto" id="resultsTut" />
        </div>
        <div className="h-16 bg-white" />
        <div className="min-w-full bg-white">
          <Image src={recipePage} className="mx-auto" id="recipeTut" />
        </div>
        <div className="h-16 bg-white" />
      </div>
    </>
  );
}
