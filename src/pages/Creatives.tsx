import { useState, useEffect } from "react";

interface Design {
  title: string;
  src: string;
  transform: string;
  description: string;
}

function Creatives() {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const designs: Design[] = [
    {
      title: "moneybags",
      src: "/assets/design/moneybags.png",
      transform: "rotate-6",
      description: "an ode to wealth, or perhaps a commentary?"
    },
    {
      title: "goodnails",
      src: "/assets/design/goodnails.png",
      transform: "-rotate-3",
      description: "i always feel better after acrylic nails :3"
    },
    {
      title: "payme",
      src: "/assets/design/payme.png",
      transform: "rotate-2",
      description: "after i received a 4-hour 'take-home' assignment for an unpaid internship application..."
    },
    {
      title: "kurokuri",
      src: "/assets/design/kurokuri.png",
      transform: "rotate-12",
      description: "two posters for summers, lucies & kaoris"
    },
    {
      title: "kitchen",
      src: "/assets/design/kitchen.png",
      transform: "-rotate-6",
      description: "one of 3 housework posters; chore dissociation"
    },
    {
      title: "internals",
      src: "/assets/design/internals.png",
      transform: "rotate-3",
      description: "for csa w25 :3"
    },
  ];

  useEffect(() => {
    if (selectedDesign) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedDesign]);

  return (
    <div className="relative z-0">
      <div className="m-16 mt-8 mb-24 flex items-center gap-8">
        <div className="relative w-1/2">
          <img className="absolute z-[-1]" src="/assets/graffitis/create.png" />
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
        <div className="flex justify-between items-center">
          <h3><span className="cursive-h3">D</span><span className="relative inline-block">
            <img className="absolute z-[-1] w-[120%] h-[120%] -top-1 -left-1 md:-top-2 md:-left-2" src="/assets/decor/planet.png"/>
            <span className="relative z-10 text-blackish">esign</span>
          </span>!</h3>
          <h4 className="text-sm text-blackish italic">click each design! ♡(｡- ω -)</h4>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8">
          {designs.map((item, index) => (
            <div
              key={index}
              className={`transform ${item.transform} cursor-pointer`}
              onClick={() => setSelectedDesign(item)}
            >
              <img src={item.src} alt={item.title}/>
            </div>
          ))}
        </div>
      </div>

      <div className="p-12 relative">
        <div className="flex justify-between my-16 items-end">
          <h3><span className="cursive-h3">W</span>ritings.</h3>
          <div>
            <h4 className="pb-2 text-justify">
              i live to write about it. occasionally, i put them here for anyone to read and (hopefully) enjoy.
            </h4>
          </div>
        </div>
        <div className="relative">
          <img className="w-full" src="/assets/decor/top.png" />
          <div className="absolute inset-0 flex flex-col justify-center p-8">
            <ul className="space-y-6 w-4/5 self-center">
            <li className="flex justify-between items-center">
                 <h4 className="text-lg">
                   <a
                     href="https://docs.google.com/document/d/1GTztFcsxlKc-leyMKroQtVSn_ZG8tt191T9LABkVo04/edit?usp=sharing"
                     className="text-debauche hover:text-blackish underline"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     ai & em dashes
                   </a>
                 </h4>
                 <h4 className="text-lg text-blackish">tue. jul 8</h4>
               </li>
               <li className="flex justify-between items-center">
                 <h4 className="text-lg">
                   <a
                     href="https://docs.google.com/document/d/172cgDFHzkp5Q1aId4EmgkDHHcTcYCHG1Lg7Mc6888yU/edit?usp=sharing"
                     className="text-debauche hover:text-blackish underline"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     shackling disobedience
                   </a>
                 </h4>
                 <h4 className="text-lg text-blackish">sun. jun 8</h4>
               </li>
               <li className="flex justify-between items-center">
                 <h4 className="text-lg">
                   <a
                     href="https://docs.google.com/document/d/1eN27j1VrArYUpIT7L5iibPQ3xWL_XjZVpvgZpYlUabU/edit?usp=sharing"
                     className="text-debauche hover:text-blackish underline"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     audacious existentialism re:pantheon
                   </a>
                 </h4>
                 <h4 className="text-lg text-blackish">mon. feb 24</h4>
               </li>
             </ul>
          </div>
        </div>
      </div>

      {selectedDesign && (
        <div
          className="fixed inset-0 backdrop-blur bg-blackish/25 z-50 flex items-start justify-center pt-10"
          onClick={() => setSelectedDesign(null)}
        >
          <div
            className="relative bg-white/10 bg-cover p-8 max-w-md w-full shadow-lg text-center max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-blackish cursor-pointer"
              onClick={() => setSelectedDesign(null)}
            >
              X
            </button>
            <img className="mx-auto w-4/5 mb-4" src={selectedDesign.src} alt={selectedDesign.title}/>
            <h2 className="text-2xl mb-2">{selectedDesign.title}</h2>
            <p>{selectedDesign.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Creatives;
