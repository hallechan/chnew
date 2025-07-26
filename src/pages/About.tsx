function About() {
  return (
    <>
      <div className="m-4 md:m-16 flex flex-col md:flex-row items-start gap-4 md:gap-8">
        <div className="relative half-col">
          <img className="absolute w-1/4 md:w-1/3 z-[-1]" src="/assets/graffitis/hi.png" />
          <h3 className="-my-4 md:-my-8 text-center md:text-left">i'm</h3>
          <h1 className="text-center md:text-left">
            <span className="cursive-title">H</span>alle.<br />
          </h1>
          <img className="w-full md:w-xl mt-10 md:mt-20 -mx-10 md:-mx-20" src="/assets/photos/tvme.png" />
        </div>
        <div className="half-col">
          <div className="max-w-md text-just mx-auto md:mx-0">
            <h4>
              i'm a student at the <span className="text-debauche">university of waterloo </span>
              pursuing <span className="text-debauche">computer science</span> [hci] + minor in
              digital arts communication.
            </h4>
            <br /><br />
            <h4>
              i adore creating products that boast our super nifty individuality + cause a good rift in the world.
            </h4>
            <br /><br />
            <h4>
              besides career stuff—i'm a Dress to Impress top model, listen to Suki Waterhouse, and barely get through my 5ks.
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-coquette p-4 md:p-12 relative">
        <h3 className="text-center md:text-left"><span className="cursive-h3">P</span><span className="relative inline-block">
          <img className="absolute z-[-1] w-[120%] h-[120%] -top-1 -left-1 md:-top-2 md:-left-2" src="/assets/decor/planet.png"/>
          <span className="relative z-10 text-blackish">rev</span>
        </span>s!</h3>
        <div className="flex flex-col md:flex-row items-start relative">
          <div className="my-12 md:my-24 w-full md:w-1/3">
            <h3 className="text-justify w-full md:w-3/4 text-center md:text-left">i've had some dazzling experiences.</h3>
          </div>
          <div className="relative w-full md:w-2/3">
            <img
              className="absolute -mt-16 md:-mt-32 left-1/2 -translate-x-1/2 md:-translate-x-1/3 z-0 w-3/4 md:w-auto"
              src="/assets/decor/bigpaper.png"
            />
            <div className="w-full md:w-3/4 relative left-0 md:left-1/4 z-10 p-4 -my-6 md:-my-12 flex flex-col gap-8 md:gap-16 text-just">
              <div className="flex-between flex-col md:flex-row gap-2 md:gap-0">
                <div className="text-center md:text-left">
                  <h4>Shopify</h4>
                  <h4 className="italic">Software Engineer Intern</h4>
                </div>
                <div className="text-center md:text-right">
                  <h4>May–Aug. 2025</h4>
                  <h4>Toronto, ON</h4>
                </div>
              </div>
              <div className="flex-between flex-col md:flex-row gap-2 md:gap-0">
                <div className="text-center md:text-left">
                  <h4>Miovision</h4>
                  <h4 className="italic">Software Developer, Product Engineering</h4>
                </div>
                <div className="text-center md:text-right">
                  <h4>Jan.–Apr. 2025</h4>
                  <h4>Kitchener, ON</h4>
                </div>
              </div>
              <div className="flex-between flex-col md:flex-row gap-2 md:gap-0">
                <div className="text-center md:text-left">
                  <h4>CI Tech</h4>
                  <h4 className="italic">Full Stack Developer</h4>
                </div>
                <div className="text-center md:text-right">
                  <h4>May–Aug. 2024</h4>
                  <h4>Vancouver, BC</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-12">
        <h3 className="text-center md:text-left"><span className="cursive-h3">F</span><span className="relative inline-block">
          <img className="absolute z-[-1] w-[120%] h-[120%] -top-1 -left-1 md:-top-2 md:-left-2" src="/assets/decor/planet.png"/>
          <span className="relative z-10 text-blackish">ashion</span>
        </span> board.</h3>
        <div className="flex flex-col md:flex-row justify-between my-8 md:my-16 items-center md:items-end gap-4 md:gap-0">
          <img className="w-full md:w-xl" src="/assets/photos/fashion.png" />
          <div className="text-center md:text-left">
            <h4 className="pb-2">sharing some of my favourite fits. &lt;3</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
