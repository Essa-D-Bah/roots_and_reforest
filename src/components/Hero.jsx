function Hero() {
  return (
    <div className="bg-[url('/bg2.jpeg')] h-60 bg-no-repeat bg-cover md:h-[calc(100vh-200px)] bg-blend-multiply">
      <div className=" w-full h-full">
      <h2 className="text-white text-center pt-16 text-3xl font-bold md:pt-48 md:text-[70px]">Roots & Reforest</h2>
         {/* <h3 className="text-white text-xl font-semibold text-center pt-2">Travel meets Climate </h3> */}
         <p className="text-white text-center pt-2 text-lg md:text-[28px] md:pt-8">Explore The Gambia while contribute to the fight against Climate Change </p>

      </div>
         
    </div>
  );
}

export default Hero;
