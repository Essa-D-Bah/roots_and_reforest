export default function Contact() {
  return (
    <div className="pt-16">
      <h2 className="text-green-500 text-center text-3xl font-bold">
        Contact us
      </h2>
      <div className="md:flex justify-between">
      <div className="mt-8 md:w-[46%]">
        <div className="flex gap-2 px-2 py-8 border rounded shadow mb-8 ">
          <p className="text-xl font-semibold ">Email:</p>
          <p className="text-xl ">test@dmak.com</p>
        </div> 
        <div className="flex gap-2 px-2 py-8 rounded border shadow my-8 ">
          <p className="text-xl font-semibold ">Phone:</p>
          <p className="text-xl ">000000000</p>
        </div> 
        <div className="flex gap-2 px-2 py-8 border rounded shadow my-8">
          <p className="text-xl font-semibold ">Address</p>
          <p className="text-xl ">Essau, NBR, The Gambia</p>
        </div>  
      </div>
      <div className=" mt-6 px-2 md:w-[48%]">
        <h2 className="text-2xl text-center font-semibold">Send us a message</h2>
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
