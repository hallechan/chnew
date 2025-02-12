function About() {
  return (
    <>
      <div className="m-4 md:m-16 flex flex-col md:flex-row items-start gap-8">
        <div className="relative half-col">
          <img className="absolute w-1/3 z-[-1]" src="/assets/graffitis/hi.png" />
          <h3 className="-my-8">i'm</h3>
          <h1>
            <span className="cursive-title">H</span>alle.<br />
          </h1>
          <img className="w-xl mt-20 -mx-20" src="/assets/photos/tvme.png" />
        </div>
        <div className="half-col">
          <div className="max-w-md text-just">
            <h4>
              i’m a student at the <span className="text-debauche">university of waterloo </span>
              pursuing <span className="text-debauche">computer science</span> [hci] + minor in
              digital arts communication.
            </h4>
            <br /><br />
            <h4>
              i adore creating products that boast our super nifty individuality + cause a good rift in the world.
            </h4>
            <br /><br />
            <h4>
              besides career stuff—i play Valerie in Cyberpunk 2077, listen to Suki Waterhouse, and barely get thru pilates.
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-coquette p-4 md:p-12 relative">
        <img className="absolute z-0 m-2 w-1/10" src="/assets/decor/skinnyplanet.png" />
        <h3><span className="cursive-h3">P</span>revs!</h3>
        <div className="flex flex-col md:flex-row items-start relative">
          <div className="my-24 w-full md:w-1/3">
            <h3 className="text-justify w-3/4">i've had some dazzling experiences.</h3>
          </div>
          <div className="relative w-full md:w-2/3">
            <img
              className="absolute -mt-32 left-1/2 -translate-x-1/3 z-0"
              src="/assets/decor/bigpaper.png"
            />
            <div className="w-3/4 relative left-1/4 z-10 p-4 -my-12 flex flex-col gap-16 text-just">
              <div className="flex-between">
                <div>
                  <h4>Shopify</h4>
                  <h4 className="italic">Software Engineer Intern</h4>
                </div>
                <div className="text-right">
                  <h4>May–Aug. 2025</h4>
                  <h4>Toronto, ON</h4>
                </div>
              </div>
              <div className="flex-between">
                <div>
                  <h4>Miovision</h4>
                  <h4 className="italic">Software Developer, Product Engineering</h4>
                </div>
                <div className="text-right">
                  <h4>Jan.–Apr. 2025</h4>
                  <h4>Kitchener, ON</h4>
                </div>
              </div>
              <div className="flex-between">
                <div>
                  <h4>CI Tech</h4>
                  <h4 className="italic">Full Stack Developer</h4>
                </div>
                <div className="text-right">
                  <h4>May–Aug. 2024</h4>
                  <h4>Vancouver, BC</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-12">
        <h3><span className="cursive-h3">F</span>ashion board.</h3>
        <div className="flex flex-col md:flex-row justify-between my-16 items-end">
          <img className="w-full md:w-xl" src="/assets/photos/fashion.png" />
          <div>
            <h4 className="pb-2">sharing some of my favourite fits. &lt;3</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
