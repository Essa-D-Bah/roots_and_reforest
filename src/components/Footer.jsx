export default function Footer() {
  return (
    <section>
      <svg viewBox="0 0 500 200" className="mt-[-50px] md:mt-[-150px] lg:mt-[-350px]">
        <g transform="scale(1, -1) translate(0, -200)">
          <path
            d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0"
            className="fill-current text-green-700"
          ></path>
        </g>
      </svg>
      <footer className="bg-gray-800 p-6 text-white bg-green-700 mt-[-2px]">
        <div className="md:flex justify-around">
          <div className="text-center md:text-end">
            <h2 className="text-2xl font-800 mb-8">Contact</h2>
            <p className="py-2">mbye@bakindincki.com</p>
            <p className="mb-8">+220 000 000</p>
            <p className="py-2">34, Kairaba Avenue, Fajara</p>
            <p className="">KMC, The Gambia</p>
          </div>

          <div className="flex justify-between md:w-3/5 md:justify-around">
            <div className="pt-4 md:pt-0">
              <h2 className="text-2xl font-800 mt-8 mb-8 md:mt-0">Navigation</h2>
              <p className="py-2 ">Home</p>
              <p className="py-2 ">About</p>
              <p className="py-2 ">Services</p>
              <p className="py-2 ">Team</p>
              <p className="py-2 ">Contact</p>
            </div>
            <div className="pt-4 md:pt-0">
              <h2 className="text-2xl font-800 mt-8 mb-8 md:mt-0">Socials</h2>
              <p className="py-2 ">Twitter</p>
              <p className="py-2 ">Facebook</p>
              <p className="py-2 ">Instagram</p>
              <p className="py-2 ">Snapchat</p>
            </div>
          </div>
        </div>
        <p className="text-center py-4">
          © {new Date().getFullYear()} | by {"Dmak"}
        </p>
      </footer>
    </section>
  );
}
