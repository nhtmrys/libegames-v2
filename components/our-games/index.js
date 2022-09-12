import styles from './our-games.module.scss'
import Carousel from "../carousel";
export default function OurGames () {
    const games = [
        {
            title: "Bubble Me",
            category: "BUBBLE-SHOOTER",
            description:
                "Mauris convallis, magna quis viverra consectetur, ante erat consequat elit. Un feugiat mi massa feugiat dolor.",
            imageUrl: [{url:"/skull-gaming-with-joy-stick.png"},{url:"/bubble-me-2.png"},{url:"/skull-gaming-with-joy-stick.png"}],
            link: "https://liberyus.com",
            googlePlayLink: "https://google.com",
            appleStoreLink: "https://apple.com",
        },
        {
            title: "William Wheel",
            category: "LOREM IPSUM",
            description:
                "Mauris convallis, magna quis viverra consectetur, ante erat consequat elit. Un feugiat mi massa feugiat dolor. ",
            imageUrl: [{url:"/william-wheel-1.png"},{url:"/william-wheel-2.png"},{url:"/william-wheel-3.png"}],
            link: "https://liberyus.com",
            googlePlayLink: "https://google.com",
            appleStoreLink: "https://apple.com",
        },
        {
            title: "Liberyus",
            category: "LOREM IPSUM",
            description:
                "Mauris convallis, magna quis viverra consectetur, ante erat consequat elit. Un feugiat mi massa feugiat dolor. ",
            imageUrl: [{url:"/third-game.png"},{url:"/skull-gaming-with-joy-stick.png"},{url:"/skull-gaming-with-joy-stick.png"}],
            link: "https://liberyus.com",
            googlePlayLink: "https://google.com",
            appleStoreLink: "https://apple.com",
        },
    ];

    return (
        <div className="overflow-hidden">
        <div className={styles.gameContainer}  >

            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 rounded-3xl ">
            <div className="max-w-2xl mx-auto  lg:max-w-none  ">
                <div id={"our-games"} className=" text-center text-4xl font-black mb-6">OUR GAMES</div>

                <div

                    className=" flex flex-row flex-wrap justify-around rounded-3xl  "
                >
      {games.slice(0,1).map((game, index) => (
          <div key={index}>
          <div className={styles.mobileBanner}>
              <Carousel game={game}/>
          </div>
          <div className="flex gap-5" key={index}>

              <div className="flex flex-col justify-center items-center ">

                  <div className="flex flex-col justify-center gap-2 p-10">

                      <p>{game.category}</p>
                      <h1 className="font-black text-xl">{game.title}</h1>
                      <p className={styles.gameTitle}>{game.description}</p>
                      <div className="flex">
                          <a target="_blank"  rel="noreferrer" href={game.googlePlayLink}>
                          <img src="/app-store.png" width="137px" alt="" />
                          </a>
                          <a target="_blank" rel="noreferrer" href={game.appleStoreLink}>
                          <img src="/google-play.png" width="150px" alt="" />
                          </a>
                      </div>
                  </div>

              </div>
              <div className={styles.desktopBanner}>
                  <Carousel game={game}/>
              </div>


          </div>
          </div>
      ))}
                    {games.slice(1,2).map((game, index) => (
                        <div key={index}>
                            <div className={styles.mobileBanner}>
                                <Carousel game={game}/>
                            </div>
                        <div className="flex justify-center" key={index}>
                            <div className="flex flex-col justify-center items-center ">
                                <div className={styles.desktopBanner}>
                                    <Carousel game={game}/>
                                </div>
                            </div>

                                <div className="flex flex-col justify-center gap-2 p-10">
                                    <p>{game.category}</p>
                                    <h1 className="font-black text-xl">{game.title}</h1>
                                    <p className={styles.gameTitle}>{game.description}</p>
                                    <div className="flex">
                                        <a target="_blank" rel="noreferrer" href={game.googlePlayLink}>
                                            <img src="/app-store.png" width="137px" alt="" />
                                        </a>
                                        <a target="_blank" rel="noreferrer" href={game.appleStoreLink}>
                                            <img src="/google-play.png" width="150px" alt="" />
                                        </a>
                                    </div>
                                </div>



                        </div>
                        </div>
                    ))}
                    {games.slice(2,3).map((game, index) => (
                        <div key={index}>
                            <div className={styles.mobileBanner}>
                                <Carousel game={game}/>
                            </div>
                        <div className="flex gap-5" key={index}>

                            <div className="flex flex-col justify-center items-center ">
                                <div className="flex flex-col justify-center gap-2 p-10">
                                    <p>{game.category}</p>
                                    <h1 className="font-black text-xl">{game.title}</h1>
                                    <p className={styles.gameTitle}>{game.description}</p>
                                    <div className="flex">
                                        <a target="_blank" rel="noreferrer" href={game.googlePlayLink}>
                                            <img src="/app-store.png" width="137px" alt="" />
                                        </a>
                                        <a target="_blank" rel="noreferrer" href={game.appleStoreLink}>
                                            <img src="/google-play.png" width="150px" alt="" />
                                        </a>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.desktopBanner}>
                                <Carousel game={game}/>
                            </div>


                        </div>
                        </div>
                    ))}

                </div>
  </div>
            </div>
        </div>
        </div>
 );
}
