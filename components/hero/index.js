
import styles from "./hero.module.scss";


export default function Hero() {
    return (
        <div className="overflow-hidden">
            <div className={styles.heroContainer}>
                <div className="pt-16 sm:pt-24 sm:pb-0 lg:pt-40 lg:pb-48">
                    <div className={styles.titleContainer + " flex flex-wrap  mx-auto px-4 sm:px-6 lg:px-8 sm:static"}>
                        <div className="max-w-7xl">

                            <h1 className="text-7xl font-bold tracking-tight text-white sm:text-7xl md:text-7xl ">
                                LOREM IPSUM <br />
                                <span className="text-7xl">DOLOR SIT AMET</span>
                            </h1>
                            <div className="sm:max-w-xl">
                                <p className="mt-4 text-xl text-white">
                                    Mauris convallis, magna quis viverra consectetur, ante erat
                                    consequat elit. Un feugiat mi massa feugiat dolor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-96">
                    <img
                        className="h-64 w-full object-cover lg: md:h-full lg:h-full lg:w-full"
                        src="/3d-game-cup-prizes.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
