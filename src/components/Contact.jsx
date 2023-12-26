export default function Contact() {
  return (
    <div className="pt-16">
      <h2 className="text-white text-center text-3xl font-bold">
        Contact Us
      </h2>
      <div className="md:flex justify-between">
      <div className="mt-8 md:w-[46%]">
        <div className="flex gap-2 px-2 py-8 rounded shadow mb-8 bg-green-600">
          <p className="text-xl font-semibold text-white">Email:</p>
          <p className="text-xl text-white">test@dmak.com</p>
        </div> 
        <div className="flex gap-2 px-2 py-8 rounded shadow my-8 bg-green-600">
          <p className="text-xl font-semibold text-white">Phone:</p>
          <p className="text-xl text-white">000000000</p>
        </div> 
        <div className="flex gap-2 px-2 py-8 rounded shadow my-8 bg-green-600">
          <p className="text-xl font-semibold text-white">Address</p>
          <p className="text-xl text-white">Essau, NBR, The Gambia</p>
        </div>  
      </div>
      <div className=" mt-6 px-2 md:w-[48%]">
        <h2 className="text-2xl text-center font-semibold text-green-600">Send us a message</h2>
        <form className="pt-4">
           <div className="my-b">
            <input type="text" id="email" placeholder="Email" className="border-2 outline-none text-xl p-2 md:p-4 rounded w-full"/>
           </div>
           <div className="my-8">
            <input type="text" id="subject" placeholder="Subject" className="border-2 outline-none text-xl rounded p-2 md:p-4 w-full"/>
           </div>
           <div>
            <textarea  id="message" placeholder="Message" className="border-2 p-2 outline-none text-xl w-full h-28 rounded"/>
           </div>
        </form>
      </div>
      </div>
    </div>
  );
}
