import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto text-center">
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Contact Me
        </h1>
        {/* centered paragraph */}
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          If you have any questions, comments or just wanna chat, please feel free to
          contact me. <br/>
          I would love to have a contact form, but as I don't love to get a bunch of emails, <br/>
          I will be happy for you to contact me through my LinkedIn! 
        </p>
        {/* centered yellow button */}
        <a className="mt-6 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" href="https://www.linkedin.com/in/sindrefurulund/">
          Reach out!
        </a>
      </div>
    </section>
  );
}