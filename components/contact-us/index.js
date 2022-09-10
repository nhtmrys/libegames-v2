import styles from './contactus.module.scss'
import {useState} from "react";
import SocialMediaLinks from "../icons/social-media";

export default function ContactUs () {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const title = "";
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,

            email,

            message,
        };
        fetch("/api/sendmail", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        alert("Your information has been sent!");
        router.push("/");
    };
 return (
     <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">

         <div className="max-w-2xl mx-auto sm:py-16 lg:max-w-none ">
             <div id={"contact"} className=" text-center text-4xl font-black mb-6">CONTACT US</div>
      <div

          className=" flex flex-row flex-wrap justify-around rounded-3xl shadow-lg bg-purple max-w-7xl p-20"
      >

          <div className=" ">


                      <form
                          onSubmit={(e) => {
                              handleSubmit(e);
                          }}
                          className="flex flex-col align-items-center w-72 sm:w-96  gap-4 "
                      >
                      <h4 className="text-xl text-white hidden md:block sm:block">Leave us a message</h4>
                      <input
                          className="bg-input rounded-3xl p-2 w-full"
                          name="name"
                          type="text"
                          placeholder="Name"
                          required={true}
                          onChange={(e) => {
                              setName(e.target.value);
                          }}
                      />
                      <input
                          className="bg-input rounded-3xl p-2 "
                          name="email"
                          type="email"
                          placeholder="Email"
                          required={true}
                          onChange={(e) => {
                              setEmail(e.target.value);
                          }}
                      />
                      <textarea
                          className="bg-input rounded-3xl p-2 "
                          name="message"
                          rows={3}
                          placeholder="Message"
                          required={true}
                          onChange={(e) => {
                              setMessage(e.target.value);
                          }}
                      />
                      <button className="bg-button rounded-3xl text-white p-2" type="submit">
                          Send
                      </button>
                      </form>

          </div>
          <img  className="self-end hidden lg:block" width="20%" src="/phone-call.png" alt=""/>
          <div className="flex flex-col justify-center items-center gap-4 max-w-sm sm:mt-4">
              <div className="w-56">
              <img width="20px" src="/icon-location.png" alt=""/>
              <span className="text-white "> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
              </div>
              <div className="w-56">
              <img width="20px" src="/icon-phone.png" alt=""/>
              <span className="text-white "> +90 555 444 33 22</span>
              </div>
              <div className="w-56">
                  <img width="20px" src="/icon-mail.png" alt=""/>
              <p className="text-white "> bilgi@libegames.com</p>
              </div>
                  <SocialMediaLinks />
              <img width="300px" src="/google-maps.png" alt=""/>
          </div>
      </div>
         </div>
  </div>
 );
}
