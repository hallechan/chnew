interface Quest {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  position: "image-left" | "image-right";
}

const quests: Quest[] = [
  {
    title: "tanabata festival decor!",
    description:
      "during my exchange term in Sendai, Japan, i made the winning design for our class of 70 to make by hand!\n\nshoutout anna & group 4 for ur leadership :3 grazie mille",
    image: "/assets/photos/tanabata.png",
    imageAlt: "Tanabata festival decorations and class photo",
    position: "image-left",
  },
  {
    title: "every us state license plate",
    description:
      "during my 4th internship at Essos in New York City, i’m on a mission to find as many states of license plates as i can.\n\nprogress: 35/50\nyes i know alaska and hawaii are impossible. don’t remind me",
    image: "/assets/photos/plates.png",
    imageAlt: "A collection of United States license plates",
    position: "image-left",
  },
  {
    title: "all wordles, ever",
    description:
      "i have completed every wordle puzzle since its inception in 2021 to today.\n\ni have lost wordle (>6 guesses) 10-20 times. i did not lose on the PSHAW day, but hairs were pulled out.",
    image: "/assets/photos/wordles.png",
    imageAlt: "Wordle statistics",
    position: "image-right",
  },
];

function QuestImage({ quest }: { quest: Quest }) {
  return (
    <div className="quest-photo">
      <img src={quest.image} alt={quest.imageAlt} />
    </div>
  );
}

function QuestNote({ quest }: { quest: Quest }) {
  return (
    <article className="quest-note">
      <h2>{quest.title}</h2>
      {quest.description.split("\n\n").map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </article>
  );
}

function Sidequests() {
  return (
    <main className="sidequests-page">
      <section className="sidequests-intro" aria-labelledby="sidequests-title">
        <div className="sidequests-heading">
          <img className="sidequests-graffiti" src="/assets/graffitis/quests.png" alt="" aria-hidden="true" />
          <h1 id="sidequests-title"><span className="cursive-title">S</span>idequests.</h1>
        </div>
        <p>i try to do things for<br />no actual reason.</p>
      </section>

      <section className="quest-list" aria-label="Side quests">
        {quests.map((quest) => (
          <div className={`quest-pair ${quest.position}`} key={quest.title}>
            <QuestImage quest={quest} />
            <QuestNote quest={quest} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Sidequests;
