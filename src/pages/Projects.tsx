function Projects() {
    return (
      <>
        <div className="bg-coquette p-12 relative">
          <img className="absolute z-0 m-2 w-1/8" src="src/assets/decor/planet.png" />
          <h3>
            <span className="cursive-h3">P</span>rojects!
          </h3>
          <a href="https://devpost.com/software/pitta-patta" target="_blank" rel="noreferrer">
            <div className="flex flex-col md:flex-row relative mt-10">
              <div
                className="p-6 w-2/3 z-10 bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url("src/assets/decor/smallpaper.png")' }}
              >
                <div className="flex-col justify-between p-6">
                  <h4>playing with natural language processing to produce real-time translations for English-based dialects.</h4>
                  <div><br/>
                    <img className="w-1/2" src="src/assets/logos/pittapattatext.png" />
                    <h4>htv9 best diversity hack + best streamlit</h4>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-end -mt-10 md:-mt-0 md:-ml-20 z-20">
                <img src="src/assets/photos/pittapatta.png" />
              </div>
            </div>
          </a>
          <a href="https://devpost.com/software/maeve-a-digital-closet" target="_blank" rel="noreferrer">
            <div className="flex flex-col md:flex-row relative mt-10">
              <div
                className="p-6 w-2/3 z-10 bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url("src/assets/decor/smallpaper.png")' }}
              >
                <div className="flex-col justify-between p-6">
                  <h4>realizing a computer vision-based virtual closet for a more sustainable future.</h4>
                  <div><br/>
                    <img className="w-1/2" src="src/assets/logos/maevetext.png" />
                    <h4>technova ‘24 2nd place overall + best streamlit</h4>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-end -mt-10 md:-mt-0 md:-ml-20 z-20">
                <img src="src/assets/photos/maeve.png" />
              </div>
            </div>
          </a>
        </div>
      </>
    )
  }
  
  export default Projects
  