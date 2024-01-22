function TourExperience() {
  return (
    <main className="my-16">
      <h1 className="text-3xl text-center text-green-500 font-bold">
        Services
      </h1>

      <div className="px-4 md:flex flex-wrap md:gap-[10%] lg:gap-[3%]">
        <div className="border my-6 p-4 md:w-[45%] lg:w-[30%] flex flex-col items-center bg-yellow-400">
          <div className="p-4 border rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-2">Pick Up</h2>
          <p className=" text-center px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsum molestias praesentium culpa voluptatibus voluptatem quas harum
            deserunt corporis dignissimos.
          </p>
          <button className="uppercase my-4 border border-black px-6 py-2">
            more
          </button>
        </div>

        <div className="border my-6 p-4 md:w-[45%] lg:w-[30%] flex flex-col items-center bg-yellow-400">
          <div className="p-4 border rounded-full bg-white">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 24h-2v-4.829c-.695-.173-1.413-.502-1.951-.895-.5.15-1.019.225-1.549.225-3.033 0-5.5-2.505-5.5-5.584 0-1.283.421-2.494 1.197-3.477-.195-.496-.297-1.025-.297-1.565 0-2.025 1.403-3.721 3.298-4.12 1.042-2.27 3.301-3.755 5.802-3.755 2.501 0 4.761 1.485 5.803 3.756 1.894.398 3.297 2.094 3.297 4.119 0 .54-.102 1.07-.296 1.565.776.983 1.196 2.193 1.196 3.477 0 3.079-2.468 5.584-5.5 5.584-.528 0-1.046-.075-1.545-.224-.518.387-1.224.734-1.955.908v4.815zm-3.45-8.081c.948 1.371 2.191 1.384 2.506 1.384.341 0 1.567-.075 2.395-1.384.701.416 2.891 1.161 4.494-.438 1.389-1.392 1.615-4.14-.617-5.726 1.118-1.212.803-2.311.567-2.824-.343-.748-1.085-1.334-2.524-1.293-.416-1.98-2.462-3.638-4.371-3.638-1.894 0-3.986 1.616-4.37 3.638-1.245-.028-2.052.523-2.368 1.007-.325.5-.667 1.812.41 3.11-2.188 1.862-1.99 4.352-.616 5.726 1.866 1.864 4.011.648 4.494.438z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-2">Tree Planting</h2>
          <p className=" text-center px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsum molestias praesentium culpa voluptatibus voluptatem quas harum
            deserunt corporis dignissimos.
          </p>
          <button className="uppercase my-4 border border-black px-6 py-2">
            more
          </button>
        </div>
        <div className="border my-6 p-4 md:w-[45%] lg:w-[30%] flex flex-col items-center bg-yellow-400">
          <div className="p-4 border rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 "
            >
              <path d="M6 3.447h-1v-1.447h19v16h-7.731l2.731 4h-1.311l-2.736-4h-1.953l-2.736 4h-1.264l2.732-4h-2.732v-1h8v-1h3v1h3v-14h-17v.447zm2.242 17.343c-.025.679-.576 1.21-1.256 1.21-.64 0-1.179-.497-1.254-1.156l-.406-4.034-.317 4.019c-.051.656-.604 1.171-1.257 1.171-.681 0-1.235-.531-1.262-1.21l-.262-6.456-.308.555c-.241.437-.8.638-1.265.459-.404-.156-.655-.538-.655-.951 0-.093.012-.188.039-.283l1.134-4.098c.17-.601.725-1.021 1.351-1.021h4.096c.511 0 1.012-.178 1.285-.33.723-.403 2.439-1.369 3.136-1.793.394-.243.949-.147 1.24.217.32.396.286.95-.074 1.297l-3.048 2.906c-.375.359-.595.849-.617 1.381-.061 1.397-.3 8.117-.3 8.117zm-5.718-10.795c-.18 0-.34.121-.389.294-.295 1.04-1.011 3.666-1.134 4.098l1.511-2.593c.172-.295.623-.18.636.158l.341 8.797c.01.278.5.287.523.002 0 0 .269-3.35.308-3.944.041-.599.449-1.017.992-1.017.547.002.968.415 1.029 1.004.036.349.327 3.419.385 3.938.043.378.505.326.517.022 0 0 .239-6.725.3-8.124.033-.791.362-1.523.925-2.061l3.045-2.904c-.661.492-2.393 1.468-3.121 1.873-.396.221-1.07.457-1.772.457h-4.096zm16.476 1.005h-5v-1h5v1zm2-2h-7v-1h7v1zm-15.727-4.994c-1.278 0-2.315 1.038-2.315 2.316 0 1.278 1.037 2.316 2.315 2.316s2.316-1.038 2.316-2.316c0-1.278-1.038-2.316-2.316-2.316zm0 1c.726 0 1.316.59 1.316 1.316 0 .726-.59 1.316-1.316 1.316-.725 0-1.315-.59-1.315-1.316 0-.726.59-1.316 1.315-1.316zm15.727 1.994h-7v-1h7v1z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Climate Change Lessons
          </h2>
          <p className=" text-center px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsum molestias praesentium culpa voluptatibus voluptatem quas harum
            deserunt corporis dignissimos.
          </p>
          <button className="uppercase my-4 border border-black px-6 py-2">
            more
          </button>
        </div>
        <div className="border my-6 p-4 md:w-[45%] lg:w-[30%] flex flex-col items-center bg-yellow-400">
          <div className="p-4 border rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 "
            >
              <path d="M6 3.447h-1v-1.447h19v16h-7.731l2.731 4h-1.311l-2.736-4h-1.953l-2.736 4h-1.264l2.732-4h-2.732v-1h8v-1h3v1h3v-14h-17v.447zm2.242 17.343c-.025.679-.576 1.21-1.256 1.21-.64 0-1.179-.497-1.254-1.156l-.406-4.034-.317 4.019c-.051.656-.604 1.171-1.257 1.171-.681 0-1.235-.531-1.262-1.21l-.262-6.456-.308.555c-.241.437-.8.638-1.265.459-.404-.156-.655-.538-.655-.951 0-.093.012-.188.039-.283l1.134-4.098c.17-.601.725-1.021 1.351-1.021h4.096c.511 0 1.012-.178 1.285-.33.723-.403 2.439-1.369 3.136-1.793.394-.243.949-.147 1.24.217.32.396.286.95-.074 1.297l-3.048 2.906c-.375.359-.595.849-.617 1.381-.061 1.397-.3 8.117-.3 8.117zm-5.718-10.795c-.18 0-.34.121-.389.294-.295 1.04-1.011 3.666-1.134 4.098l1.511-2.593c.172-.295.623-.18.636.158l.341 8.797c.01.278.5.287.523.002 0 0 .269-3.35.308-3.944.041-.599.449-1.017.992-1.017.547.002.968.415 1.029 1.004.036.349.327 3.419.385 3.938.043.378.505.326.517.022 0 0 .239-6.725.3-8.124.033-.791.362-1.523.925-2.061l3.045-2.904c-.661.492-2.393 1.468-3.121 1.873-.396.221-1.07.457-1.772.457h-4.096zm16.476 1.005h-5v-1h5v1zm2-2h-7v-1h7v1zm-15.727-4.994c-1.278 0-2.315 1.038-2.315 2.316 0 1.278 1.037 2.316 2.315 2.316s2.316-1.038 2.316-2.316c0-1.278-1.038-2.316-2.316-2.316zm0 1c.726 0 1.316.59 1.316 1.316 0 .726-.59 1.316-1.316 1.316-.725 0-1.315-.59-1.315-1.316 0-.726.59-1.316 1.315-1.316zm15.727 1.994h-7v-1h7v1z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Tree Planting Lessons
          </h2>
          <p className=" text-center px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsum molestias praesentium culpa voluptatibus voluptatem quas harum
            deserunt corporis dignissimos.
          </p>
          <button className="uppercase my-4 border border-black px-6 py-2">
            more
          </button>
        </div>
        <div className="border my-6 p-4 md:w-[45%] lg:w-[30%] flex flex-col items-center bg-yellow-400">
          <div className="p-4 border rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 "
            >
              <path d="M18 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.852-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm-12-3c-2.099 0-4 1.702-4 3.801 0 3.121 3.188 3.451 4 8.199.812-4.748 4-5.078 4-8.199 0-2.099-1.901-3.801-4-3.801zm0 5.333c-.737 0-1.333-.597-1.333-1.333s.596-1.333 1.333-1.333 1.333.596 1.333 1.333-.596 1.333-1.333 1.333zm6 5.775l-3.215-1.078c.365-.634.777-1.128 1.246-1.687l1.969.657 1.92-.64c.388.521.754 1.093 1.081 1.75l-3.001.998zm12 7.892l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 3.62-8.144c.299.76.554 1.776.596 3.583l-.443.996 2.699-1.021 4.809 2.091.751-3.725.718 3.675 4.454-2.042 3.099 1.121-.461-1.055c.026-.392.068-.78.131-1.144.144-.84.345-1.564.585-2.212l3.442 7.877z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            Site Visiting
          </h2>
          <p className=" text-center px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsum molestias praesentium culpa voluptatibus voluptatem quas harum
            deserunt corporis dignissimos.
          </p>
          <button className="uppercase my-4 border border-black px-6 py-2">
            more
          </button>
        </div>
      </div>
    </main>
  );
}

export default TourExperience;
