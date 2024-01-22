export default function Contact() {
  return (
    <div className="pt-16">
      <h2 className="text-green-500 text-center text-3xl font-bold">
        Contact us
      </h2>
      <div className="md:flex justify-between">
      <div className="mt-6 md:w-[46%]">
      <h2 className="text-2xl text-center font-semibold text-slate-800">Call, Vist or Email us</h2>
        <div className="pt-4">
        <div className="flex gap-2 px-2 p-4 border rounded mb-8 ">
          <p className="text-xl font-semibold text-slate-700">Email:</p>
          <p className="text-xl text-slate-500">mmbye1156@gmail.com</p>
        </div> 
        <div className="flex gap-2 px-2 p-4 rounded border my-8 ">
          <p className="text-xl font-semibold text-slate-700">Phone:</p>
          <p className="text-xl text-slate-500 ">3945207</p>
        </div> 
        <div className="flex gap-2 px-2 py-4 border md:h-48 rounded my-8">
          <p className="text-xl font-semibold text-slate-700">Address:</p>
          <div>
          <p className="text-xl text-slate-500">Salagi Estate</p>
          <p className="text-xl text-slate-500">Kombo North</p>
          <p className="text-xl text-slate-500">The Gambia</p>
          </div>
        </div>  
        </div>

      </div>
      <div className=" mt-6 px-2 md:w-[48%]">
        <h2 className="text-2xl text-center font-semibold text-slate-800">Send us a message</h2>
        <form className="pt-4">
           <div className="my-b">
            <input type="text" id="email" placeholder="Email" className="border-2 outline-none text-xl p-2 md:p-4 rounded w-full"/>
           </div>
           <div className="my-8">
            <input type="text" id="subject" placeholder="Subject" className="border-2 outline-none text-xl rounded p-2 md:p-4 w-full"/>
           </div>
           <div className="">
            <textarea  id="message" placeholder="Message" className="border-2 p-2 outline-none text-xl w-full h-28 md:h-48 rounded"/>
           </div>
        </form>
      </div>
      </div>
    </div>
  );
}
