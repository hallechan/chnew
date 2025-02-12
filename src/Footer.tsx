function Footer() {
    return (
      <div className="flex justify-between mx-12 my-4 items-center">
        <h3>
          keep in <span className="cursive-h3">C</span>ontact.
        </h3>
        <div className="w-1/2 flex justify-end gap-6">
          <a href="https://github.com/hallechan" target="_blank" rel="noopener noreferrer">
            <img className="w-6 sm:w-8" src="/assets/logos/github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/hallechan/" target="_blank" rel="noopener noreferrer">
            <img className="w-6 sm:w-8" src="/assets/logos/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="mailto:hallechanca@gmail.com">
            <img className="w-6 sm:w-8" src="/assets/logos/email.png" alt="Email" />
          </a>
        </div>
      </div>
    );
  }
  
  export default Footer;
  