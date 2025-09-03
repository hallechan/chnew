import Projects from "./Projects.tsx";

function Home() {
    return (
      <>
        <div className="mx-4 md:mx-16 -my-6 md:-my-12">
          <img className="absolute w-96 z-[-1]" src="/assets/graffitis/hallechan.png"/>
          <div className="flex flex-col md:flex-row">
            <h1 className="py-8 md:py-16 text-center md:text-left">
              <span className="cursive-title">H</span>alle<br/>
              <span className="cursive-title">C</span>han
            </h1>
            <div className="self-end pb-8 md:pb-16 mx-0 md:mx-16 text-center md:text-justify max-w-sm relative">
              <h2 className="relative">
                is a <span className="relative inline-block">
                  <img className="absolute z-[-1] w-[120%] h-[120%] -top-1 -left-1 md:-top-2 md:-left-2" src="/assets/decor/planet.png"/>
                  <span className="relative z-10 text-blackish">front-end</span>
                </span> <span className="text-debauche">developer & designer</span>.
              </h2>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between my-8 md:my-16 mb-16 md:mb-28 gap-4 md:gap-0">
            <h4 className="border-b-2 text-center md:text-left">2b computer science @ uw</h4>
            <h4 className="border-b-2 text-center md:text-left">prev @ shopify</h4>
          </div>
        </div>
        <div className="flex justify-center relative">
          <img className="w-1/3 md:w-1/5 relative z-10" src="/assets/logos/heartofhearts.png"/>
        </div>
        <div className="relative -mt-6 md:-mt-12">
          <Projects/>
        </div>
      </>
    );
}
  
export default Home;
