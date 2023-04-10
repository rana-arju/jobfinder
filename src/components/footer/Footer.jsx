import React from "react";

const Footer = () => {
  return (
    <footer className="footer grid-cols-2 w-full md:grid-cols-4 gap-10 p-10 bg-black text-white">
      <div>
        <p className="text-2xl font-bold">GETWORK</p>

        <p>
          There are many variations of passages of Lorem Ipsum , but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Product</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Support</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>{" "}
      <div>
        <span className="footer-title">contact</span>
        <a className="link link-hover">524 Broadway , NYC</a>
        <a className="link link-hover">01881220413</a>
      </div>
    </footer>
  );
};

export default Footer;
