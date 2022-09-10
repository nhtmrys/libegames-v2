import styles from './footer.module.scss'
import SocialMediaLinks from "../icons/social-media";
import Link from "next/link";

export default function Footer () {
 return (
     <div>
     <footer className="relative bg-midnight">
      <div className="py-6 px-4 md:flex md:items-center md:justify-center flex gap-5 flex-col items-center">
          <Link href="/">
          <img width="300px" src="/logo.png" alt=""/>
          </Link>

          <div className="flex gap-10">
              <div className="text-white text-xl">
                  <Link href="/#about">About Us</Link></div>
              <div className="text-white text-xl"><Link href="/#our-games">Our Games</Link></div>
              <div className="text-white text-xl"><Link href="/#contact">Contact Us</Link></div>
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
