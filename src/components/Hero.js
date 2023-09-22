export default function Example() {
    return (
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                We're help build your dream professionally
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We always prioritize the maximum possible results with modern methods, and the latest technology that we use so far the client is very proud of the solid results.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="text-gray-200 bg-[#006D5B] font-medium text-sm px-4 py-3 text-center hover:bg-[#FFFF99] hover:text-[#006D5B]"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src="/images/image_1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
  