import { useState, useEffect } from "react";

interface Design {
  title: string;
  src: string;
  transform: string;
  description: string;
}

interface Writing {
  title: string;
  href: string;
  date: string;
}

const writingsByYear: Record<string, Writing[]> = {
  "2026": [
    {
      title: "all the things i read & watched on the plane ride to tokyo",
      href: "https://docs.google.com/document/d/1gyOTL04pMy6q9sj-w_fa0gdZ22k-ZPGp7SzmOxfVpSA/edit?usp=sharing",
      date: "wed. apr 1 2026",
    },
    {
      title: "litters to self-flourish (a commentary on manifestation & law of attraction)",
      href: "https://docs.google.com/document/d/19CmHvDDp-MUbAFkczS3MYy7mK0baMngkeIeI_onK3fg/edit?usp=sharing",
      date: "tue. feb 17 2026",
    },
  ],
  "2025": [
    {
      title: "re:minecraft civilization (懐かしい)",
      href: "https://docs.google.com/document/d/1-3jC0WJGsHflKPQXWmvxS5BAX3GdpRm4Gvze-D-aC6Y/edit?usp=sharing",
      date: "thu. nov 27 2025",
    },
    {
      title: "ai & em dashes",
      href: "https://docs.google.com/document/d/1GTztFcsxlKc-leyMKroQtVSn_ZG8tt191T9LABkVo04/edit?usp=sharing",
      date: "tue. jul 8 2025",
    },
    {
      title: "shackling disobedience",
      href: "https://docs.google.com/document/d/172cgDFHzkp5Q1aId4EmgkDHHcTcYCHG1Lg7Mc6888yU/edit?usp=sharing",
      date: "sun. jun 8 2025",
    },
    {
      title: "audacious existentialism re:pantheon",
      href: "https://docs.google.com/document/d/1eN27j1VrArYUpIT7L5iibPQ3xWL_XjZVpvgZpYlUabU/edit?usp=sharing",
      date: "mon. feb 24 2025",
    },
  ],
};

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
    {
      title: "galentines :3",
      src: "/assets/design/galentines.png",
      transform: "-rotate-2",
      description: "a lil thing i threw in february"
    },
    {
      title: "calendar",
      src: "/assets/design/calendar.png",
      transform: "rotate-3",
      description: "for fall 2026"
    },
    {
      title: "halle's 21st bday",
      src: "/assets/design/21.png",
      transform: "-rotate-4",
      description: "my birthday party in japan!"
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
      <div className="m-4 mt-8 mb-16 md:m-16 md:mt-8 md:mb-24 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
        <div className="creatives-title relative w-full md:w-1/2">
          <img className="create-graffiti" src="/assets/graffitis/create.png" alt="" aria-hidden="true" />
          <h1>
            <span className="cursive-title">C</span>reate.<br/>
          </h1>
        </div>
        <div className="w-full md:w-1/2 justify-between">
          <h4 className="text-left md:text-justify max-w-lg">
            i &lt;3 making things—particularly in writing & design—i’m sharing some of my favourites here.
          </h4>
        </div>
      </div>

      <div className="bg-coquette p-6 md:p-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <h3><span className="cursive-h3">D</span><span className="relative inline-block">
            <img className="absolute z-[-1] w-[120%] h-[120%] -top-1 -left-1 md:-top-2 md:-left-2" src="/assets/decor/planet.png"/>
            <span className="relative z-10 text-blackish">esign</span>
          </span>!</h3>
          <h4 className="text-sm text-blackish italic">click each design! ♡(｡- ω -)</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8">
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

      <div className="p-6 md:p-12 relative">
        <div className="flex flex-col md:flex-row justify-between my-8 md:my-16 items-start md:items-end gap-4 md:gap-8">
          <h3><span className="cursive-h3">W</span>ritings.</h3>
          <div>
            <h4 className="pb-2 text-justify">
              i live to write about it. occasionally, i put them here for anyone to read and (hopefully) enjoy.
            </h4>
          </div>
        </div>
        <div className="writing-board">
          {Object.entries(writingsByYear).map(([year, writings]) => (
            <section className="writing-year" key={year} aria-labelledby={`writing-${year}`}>
              <h4 id={`writing-${year}`}>{year}</h4>
              <ul>
                {writings.map((writing) => (
                  <li key={writing.title}>
                    <a
                      href={writing.href}
                      className="text-debauche hover:text-blackish underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {writing.title}
                    </a>
                    <span>{writing.date}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      {selectedDesign && (
        <div
          className="fixed inset-0 backdrop-blur bg-blackish/25 z-50 flex items-start justify-center pt-10"
          onClick={() => setSelectedDesign(null)}
        >
          <div
            className="relative bg-white/10 bg-cover p-6 md:p-8 max-w-md w-[calc(100%-2rem)] md:w-full shadow-lg text-center max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 md:top-4 md:right-4 text-blackish cursor-pointer"
              aria-label="Close design preview"
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
