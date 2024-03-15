export default function GoogleMap() {
  return (
    <div className="w-full h-full min-h-[20rem] bg-slate-900/80 flex flex-col md:flex-row ">
      <div className="w-full h-full md:w-1/2 md:p-20 p-10">
        <h3 className="text-xl font-semibold">Our Address</h3>
        <p>Sacrosys Technologies</p>
        <p>
          PB No. 41755, Saleha Khalifa Bldg, Al Muteena, Diera, Dubai, United
          Arab
        </p>
        <p>Emirates Phone: +971 50 8493100, +971 52 99 77 626</p>
        <p> e-mail : info@sacrosys.com</p>
      </div>
      <div className="w-full h-full md:w-1/2 md:p-20 p-10">
        <div className="w-[96] h-56 rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11147.517757001067!2d55.326214349908945!3d25.274673238346605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d719cb7bf1f%3A0x87dea392c6aa3d28!2sSACROSYS%20TECHNOLOGIES!5e0!3m2!1sen!2sin!4v1710322012531!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-2xl focus:outline-none"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
