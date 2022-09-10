import styles from './footer.module.scss'
import SocialMediaLinks from "../icons/social-media";

export default function Footer () {
 return (
     <div>
     <footer className="relative bg-midnight">
      <div className="py-6 px-4 md:flex md:items-center md:justify-center flex gap-5 flex-col items-center">
          <a href="/">
          <img width="300px" src="/logo.png" alt=""/>
          </a>

          <div className="flex gap-10">
              <div className="text-white text-xl">
                  <a href="/#about">About Us</a></div>
              <div className="text-white text-xl"><a href="/#our-games">Our Games</a></div>
              <div className="text-white text-xl"><a href="/#contact">Contact Us</a></div>
          </div>
          <div className="max-w-sm text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend a neque quis pulvinar. Donec ac enim semper, tempus felis lobortis, pretium ligula. Maecenas at hendrerit nulla.
          </div>
      </div>
         <div className="flex justify-between ">
             <div className={styles.shape1}></div>
             <SocialMediaLinks/>
             <div className={styles.shape2}></div>
         </div>
     </footer>

    </div>
 );
}
