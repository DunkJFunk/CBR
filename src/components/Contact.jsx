import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const form = useRef();
    
    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_nj9z9ac', 'template_cy5hb3j', form.current, '5gjOiKz3jHRJBtZaN')
        .then((result) => {
            console.log(result.text);
            alert("Thank you! Your message has been sent.");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className=" py-20 lg:py-16 px-4 mx-auto max-w-screen-md scroll-m-24" id="contact">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white font-montserrat">Contact Us</h2>
            <div className="flex gap-10 justify-center align-middle my-4">
                <button type="button" onClick={() => {window.location.href = 'https://www.youtube.com/@classicwoodies'}}><FontAwesomeIcon icon={faYoutube} className="h-12 text-owhite"/></button>
                <button type="button" onClick={() => {window.location.href = 'https://www.instagram.com/Classicwoodies'}}><FontAwesomeIcon icon={faInstagram} className="h-12 text-owhite"/></button>
                <button type="button" onClick={() => {window.location.href = 'https://www.facebook.com/profile.php?id=61552267165458'}}><FontAwesomeIcon icon={faFacebook} className="h-12 text-owhite"/></button>
            </div>
            <div className="grid grid-cols-2 justify-center align-middle gap-12">
                <div className="font-light text-right">
                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400 sm:text-xl">Jim Horne : (260) 450-2037</p>
                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400 sm:text-xl">Jeff Funk : (260) 414-0016</p>
                    <p className="mb-8 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-xl">thecbrshop@gmail.com</p>
                </div>
                <div className="font-light text-left">
                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400 sm:text-xl">16356 N. Lima Rd</p>
                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400 sm:text-xl">Building #5</p>
                    <p className="mb-2 font-light text-gray-500 dark:text-gray-400 sm:text-xl">Huntertown, IN</p>
                </div>
            </div>
            <p className="mb-2 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">OR email us directly down below!</p>
            <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input type="text" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea type="text" rows="6" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Send a message..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-owhite sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>
        </div>
    )
};

export default Contact;