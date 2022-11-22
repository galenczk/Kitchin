// Import dependencies

import axios from "axios";

// Import components.
import Button from "./components/Button";

// Page function.
export default function Home({ number }) {

  // DOM return
  return (
    <>
      <div className={`flex flex-col bg-white w-3/4 mt-24 items-center min-h-[400px] h-1/2 `}>
        <div className=" text-center">
          <h1 className="text-3xl mt-12">Welcome to kitchin</h1>
          <h2 className="text-xl mt-4">The helpful chef app</h2>
          <h3 className="mt-8">
            Click on "Begin Search" to start looking for recipes based on the ingredients you have in your kitchen.
          </h3>
          <h3 className="mt-2">or</h3>
          <h3 className="mt-2">Click on "My Preferences" to start adding ingredients that you want to avoid.</h3>
          <h3>Recipes including these ingredients will not be included in your results.</h3>
        </div>

        <div className="flex justify-between w-full items-center place-self-start p-4 mt-auto">
          <Button className="btn btn-blue" label="My Preferences" onClick={() => navigate("/preferences")} />

          <Button className="btn btn-lg btn-green" label="Begin Search" onClick={() => navigate("/search")} />

          <Button
            label="API call"
            onClick={() => {
              axios.request(options).then(function (response) {
                console.log(response.data);
              });
            }}
          />
        </div>
      </div>
    </>
  );
}


//export async function getServerSideProps(){
//  const response = await axios.get("https://testmicro.vercel.app/");
//  let number = (await response).data;
//  number = (await number) % 10;
//  console.log(number);
//  return { props: {number: number}}
//};