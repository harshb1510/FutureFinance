import * as React from "react";

export default function About(props) {
  return (
    <div className="bg-black-50 flex flex-col pb-12">
      <div className="gradient2"></div>
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[530px] w-full items-end
       mt-11 px-20 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <img
          loading="lazy"
          srcSet="/photos/about-us.jpg"
          className="absolute h-full w-full object-cover object-center inset-0" alt=''
        />
        <div className="relative text-white text-8xl font-bold whitespace-nowrap mt-20 max-md:text-4xl max-md:mt-10">
          About Us
        </div>
        <div className="relative text-white  text-2xl font-semibold max-w-[663px] max-md:max-w-full">
          Transforming Banking for tommorow
        </div>
        
      </div>
      <div className="text-white text-5xl font-semibold self-center whitespace-nowrap mt-24 max-md:max-w-full max-md:text-4xl max-md:mt-10">
      "Banking with Trust, Growing with You."
      </div>
      
      <div className="self-center w-full max-w-[1141px]  max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-white text-4xl font-semibold max-w-[423px] self-start max-md:max-w-full">
              Building Financial Confidence
                <br />
                and Prosperity
              </div>
              <div className="text-zinc-500 text-xl mt-6 max-md:max-w-full">
              Providing secure and innovative financial solutions to empower
                your financial journey.
              </div>
              
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="photos/1.png"
              className="aspect-[1.02] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10" alt=''
            />
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1096px] mt-3.5 alt='' max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex min-h-[512px] grow items-stretch pl-5 pr-2 pt-12 pb-1.5 max-md:max-w-full">
              
              <img
                loading="lazy"
                srcSet="photos/2.jpg"
                className="aspect-[1.1] object-contain object-center w-full overflow-hidden mt-1.5 max-md:max-w-full" alt=''
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col mt-24 px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-white text-right text-4xl font-semibold max-md:max-w-full">
              Explore Services
              </div>
              <div className="text-zinc-500 text-right text-xl max-w-[528px] mt-6 self-end max-md:max-w-full">
              Dive into a world of convenience with our intuitive online and mobile banking services, designed to make your financial journey smooth and accessible 24/7.
              <br />
              Uncover cutting-edge banking solutions that go beyond traditional offerings, providing you with innovative tools and products to enhance your financial well-being.
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1123px] mt-7 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-white text-4xl font-semibold max-w-[411px] self-start">
                 Our Mission
              </div>
              <div className="text-zinc-500 text-xl mt-6 max-md:max-w-full">
              <div className="text-zinc-500 text-left text-xl max-w-[528px] mt-6 self-end max-md:max-w-full">
                To redefine banking by delivering personalized financial solutions
            with unwavering commitment to customer satisfaction.
                </div>
              </div>
              
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="photos/3.webp"
              className="aspect-[1.02] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10" alt=''
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-500 grid place-content-center">

      <div className="text-white text-5xl pb-20 font-semibold text-center whitespace-nowrap mt-20 max-md:text-4xl max-md:mt-10">
        Why it’s works
      </div>
   
      <div className="self-center w-full max-w-[1102px] mt-5 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20537768f4305cbdba25b3af627dedee25617c5b19f12f94706445bb34c77509?apiKey=4cbfc3249c654098bbbb51895409b5af&"
                className="aspect-[1.1] object-contain object-center w-[110px] overflow-hidden self-center max-w-full" alt=''
              />
              <div className="text-white text-2xl font-semibold self-center whitespace-nowrap mt-6">
              Innovation
              </div>
              <div className="text-white text-center text-lg mt-2.5">
              We embrace creativity and continuously seek new and better ways
                  to serve our customers.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0883fdc927b50e5071df219bc58e3cdf22597b6e8033839ea3e3ff9d797582f5?apiKey=4cbfc3249c654098bbbb51895409b5af&"
                className="aspect-[1.3] object-contain object-center w-[130px] overflow-hidden self-center max-w-full" alt=''
              />
              <div className="text-white text-2xl font-semibold self-center whitespace-nowrap mt-6">
              Community
              </div>
              <div className="text-white text-center text-lg mt-2.5">
              We actively contribute to the well-being of the communities we
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6c972ff876e05e51586a8266c0c1279b17d4f90aaa5f90deb335b8cf37a8212?apiKey=4cbfc3249c654098bbbb51895409b5af&"
                className="aspect-[1.32] object-contain object-center w-[132px] overflow-hidden self-center max-w-full" alt=''
              />
              <div className="text-white text-2xl font-semibold self-center whitespace-nowrap mt-6">
              Customer Focus
              </div>
              <div className="text-white text-center text-lg mt-2.5">
              Our customers are at the heart of everything we do.
              </div>
            </div>
          </div>
      <div className="gradient2"></div>
        </div>
        </div>
      </div>
    </div>
  );
}


