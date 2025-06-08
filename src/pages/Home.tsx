import Projects from "./Projects.tsx";

function Home() {
    return (
      <>
        <div className="mx-16 -my-12">
          <img className="absolute w-2/5 z-[-1]" src="/assets/graffitis/hallechan.png"/>
          <div className="flex">
            <h1 className="py-16">
              <span className="cursive-title">H</span>alle<br/>
              <span className="cursive-title">C</span>han
            </h1>
            <div className="self-end pb-16 mx-16 text-justify max-w-sm">
              <img className="absolute z-[-1] w-1/6 mx-52 -my-2" src="/assets/decor/planet.png"/>
              <h2>is a front-end <span className="text-debauche">developer & designer</span>.</h2>
            </div>
          </div>
          <div className="flex justify-between my-16 mb-28">
            <h4 className="border-b-2">2a computer science @ uw</h4>
            <h4 className="border-b-2">swe @ shopify</h4>
          </div>
        </div>
        <div className="flex justify-center relative">
          <img className="w-1/5 relative z-10" src="/assets/logos/heartofhearts.png"/>
        </div>
        <div className="relative -mt-12">
          <Projects/>
        </div>
      </>
    );
}
  
export default Home;
