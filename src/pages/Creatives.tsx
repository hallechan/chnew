function Creatives() {
  return (
    <>
      <div className="m-16 mt-8 mb-24 flex items-center gap-8">
        <div className="relative w-1/2">
          <img className="absolute z-[-1]" src="/assets/graffitis/create.png"/>
          <h1>
            <span className="cursive-title">C</span>reate.<br/>
          </h1>
        </div>
        <div className="w-1/2 justify-between">
          <h4 className="text-justify max-w-lg">
            i &lt;3 making things—particularly in writing & design—i’m sharing some of my favourites here.
          </h4>
        </div>
      </div>

      <div className="bg-coquette p-12 relative">
        <img className="absolute z-0 m-2 w-1/10" src="/assets/decor/planet.png"/>
        <h3><span className="cursive-h3">D</span>esign!</h3>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="transform rotate-6">
            <img src="/assets/design/moneybags.png"/>
          </div>
          <div className="transform -rotate-3">
            <img src="/assets/design/anora.png"/>
          </div>
          <div className="transform rotate-2">
            <img src="/assets/design/payme.png"/>
          </div>
          <div className="transform rotate-12">
            <img src="/assets/design/kurokuri.png"/>
          </div>
          <div className="transform -rotate-6">
            <img src="/assets/design/kitchen.png"/>
          </div>
          <div className="transform rotate-3">
            <img src="/assets/design/internals.png"/>
          </div>
        </div>
      </div>

      <div className="p-12 relative">
  <div className="flex justify-between my-16 items-end">
    <h3><span className="cursive-h3">W</span>ritings.</h3>
    <div>
      <h4 className="pb-2 text-justify">
        writing is my life’s love. occasionally, i put them here for anyone to read and (hopefully) enjoy.
      </h4>
    </div>
  </div>
  <div className="relative">
    <img className="w-full" src="/assets/decor/top.png" />
    <div className="absolute top-1/4 left-1/12 transform -translate-y-1/2 text-center opacity-20">
      <h4 className="text-lg">nothing yet...</h4>
    </div>
  </div>
</div>

    </>
  );
}

export default Creatives;
