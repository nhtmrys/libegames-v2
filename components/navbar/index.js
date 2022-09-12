import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import styles from "./navbar.module.scss";
import { MenuIcon, XIcon } from "@heroicons/react/outline";


import Link from "next/link";
import SocialMediaLinks from "../icons/social-media";

const navigation = {
 pages: [
  { name: "About", href: "/#about" },
  { name: "Games", href: "/#our-games" },
  { name: "Contact", href: "/#contact" },
 ],
};

function classNames(...classes) {
 return classes.filter(Boolean).join(" ");
}

export default function Navbar({ router }) {
 const { locale } = router;
 const [open, setOpen] = useState(false);

 return (
     <div className="bg-white ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
       <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
        <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
         <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 flex z-40">
         <Transition.Child
             as={Fragment}
             enter="transition ease-in-out duration-300 transform"
             enterFrom="-translate-x-full"
             enterTo="translate-x-0"
             leave="transition ease-in-out duration-300 transform"
             leaveFrom="translate-x-0"
             leaveTo="-translate-x-full"
         >
          <Dialog.Panel className="relative max-w-xs w-full bg-black opacity-80 shadow-xl pb-12 flex flex-col overflow-y-auto justify-evenly">
           <div className="px-4 pt-5 pb-2 flex ">
            <button
                type="button"
                className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                onClick={() => setOpen(false)}
            >
             <span className="sr-only">Close menu</span>
             <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
           </div>
           <div>
            <div className="border-gray-200 py-6 px-4 space-y-6">
             {navigation.pages.map((page) => (
                 <div key={page.name} className="flow-root">
                  <a
                      onClick={() => setOpen(false)}
                      href={page.href}
                      className="-m-2 p-2 block font-medium text-white border-b"
                  >
                   {page.name}
                  </a>
                 </div>
             ))}
             {locale == "tr" ? "ENG" : "TR"}
            </div>
           </div>
           <div className="flex items-center border-b py-5 mx-5">
            <SocialMediaLinks />
           </div>
          </Dialog.Panel>
         </Transition.Child>
        </div>
       </Dialog>
      </Transition.Root>

      <div className=" z-10 bg-gray-900 ">
       <div
           className={
               styles.mobile +
               " h-10 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden"
           }
       >
        <SocialMediaLinks />
        <div className="flex flex-row gap-5">
         <div className="text-white">
          <a href="/sitemap">Sitemap</a>
         </div>

         <span className="text-white">|</span>
         <div className="text-white">
          <Link href="/contact">
           <a>Contact</a>
          </Link>
         </div>
         <span className="text-white">|</span>

        </div>
       </div>
       <header className={styles.navHeader + " z-10 "}>
        <nav
            aria-label="Top"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 "
        >
         <div className=" border-gray-200">
          <div className="h-16  flex items-center justify-center ">
           <button
               type="button"
               className="bg-midnight p-2 rounded-md text-gray-400 lg:hidden float-right"
               onClick={() => setOpen(true)}
           >
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
           </button>

           {/* Logo */}
           <div className="ml-4 flex lg:ml-0">
            <Link href="/">
             <a>
              <span className="sr-only">Liberyus</span>
              <img
                  className="h-8 w-auto "
                  src="/logo.png"
                  alt=""
              />
             </a>
            </Link>
           </div>

           {/* Flyout menus */}

           <div className="ml-auto flex items-center">
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
             <div className="h-full flex space-x-8">
              {navigation.pages.map((page) => (
                  <a
                      key={page.name}
                      href={page.href}
                      className={
                       router.pathname === `/${page.href.split("/")[1]}`
                           ? styles.activeItem
                           : styles.notActiveItem
                      }
                  >
                   {page.name}
                  </a>
              ))}
             </div>
            </Popover.Group>
           </div>
          </div>
         </div>
        </nav>
       </header>
      </div>
     </div>
 );
}
