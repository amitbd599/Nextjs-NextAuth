import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { FaCheck, FaPlay, IconName } from "react-icons/fa";
export default function Home() {
  return (
    <main>
      <Header />
      <section className="pt-[100px] pb-[100px] bg-[#F4F7FE]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12  justify-between items-center gap-[30px]">
            <div className="col-span-6">
              <h2 className="text-5xl font-semibold mb-7">
                The best way to
                <span className="relative after:bg-amber-400/60 after:h-6 after:w-full after:inset-x-0 after:bottom-0 after:absolute after:-z-10">
                  Showcase
                </span>
                your Mobile App
              </h2>
              <p className="text-gray-600 leading-7">
                To increase sales by skyrocketing communication with All
                messages in one simple dashboard it now takes seconds.
              </p>
              <div className="flex flex-wrap items-center mt-16 gap-6">
                <a href="#" className="myBtn">
                  Download
                </a>
                <Link href="/" className="flex items-center gap-2">
                  <span className="flex items-center justify-center rounded-full w-10 h-10 bg-theme/10 text-theme hover:border hover:border-theme/20 hover:bg-theme/20">
                    <FaPlay />
                  </span>
                  <p className="font-medium text-theme hover:text-theme/90">
                    Watch Video
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-span-6">
              <div className="img w-full h-auto ml-auto">
                <img src="/assets/app1.png" alt="" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-theme bg-theme/10">
              Features
            </span>
            <h2 className="md:text-3xl text-xl font-semibold my-5">
              App works best with Prompt
            </h2>
            <p className="text-slate-500">
              Start working with <span className="text-theme">Prompt</span> to
              showcase your app to thousands of people.
            </p>
          </div>
          <div className="grid grid-cols-12 items-center gap-6 mt-[100px]">
            <div className="col-span-5">
              <img
                src="/assets/app2.png"
                className="  mx-auto"
                data-aos="zoom-in-right"
              />
            </div>
            <div className="col-span-7">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-7 lg:ps-32">
                <div>
                  <span className="flex items-center justify-center rounded-md w-12 h-12 bg-blue-100">
                    <svg
                      className="w-6 h-6 text-theme"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect id="bound" x={0} y={0} width={24} height={24} />
                        <path
                          d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z"
                          id="Combined-Shape"
                          fill="currentcolor"
                          opacity="0.3"
                        />
                        <path
                          d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z"
                          id="Combined-Shape"
                          fill="currentcolor "
                        />
                      </g>
                    </svg>
                  </span>
                  <h4 className="text-base mt-6 mb-3">First feature</h4>
                  <p className="text-slate-500">
                    We use a customized application tobe specifically designed a
                    testing gnose to keep away for people.
                  </p>
                </div>
                <div>
                  <span className="flex items-center justify-center rounded-md w-12 h-12 bg-green-100">
                    <svg
                      className="w-6 h-6 text-green-500"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect id="bound" x={0} y={0} width={24} height={24} />
                        <path
                          d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                          id="Path-50"
                          fill="currentcolor "
                          opacity="0.3"
                        />
                        <path
                          d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z"
                          fill="currentcolor "
                          id="check-path"
                        />
                      </g>
                    </svg>
                  </span>
                  <h4 className="text-base mt-6 mb-3">Second feature</h4>
                  <p className="text-slate-500">
                    In order to design a mobile app that is going to be module
                    downloaded and accessed frequently by users.
                  </p>
                </div>
                <div>
                  <span className="flex items-center justify-center rounded-md w-12 h-12 bg-orange-50">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect
                          id="Rectangle-10"
                          x={0}
                          y={0}
                          width={24}
                          height={24}
                        />
                        <path
                          d="M16.3740377,19.9389434 L22.2226499,11.1660251 C22.4524142,10.8213786 22.3592838,10.3557266 22.0146373,10.1259623 C21.8914367,10.0438285 21.7466809,10 21.5986122,10 L17,10 L17,4.47708173 C17,4.06286817 16.6642136,3.72708173 16.25,3.72708173 C15.9992351,3.72708173 15.7650616,3.85240758 15.6259623,4.06105658 L9.7773501,12.8339749 C9.54758575,13.1786214 9.64071616,13.6442734 9.98536267,13.8740377 C10.1085633,13.9561715 10.2533191,14 10.4013878,14 L15,14 L15,19.5229183 C15,19.9371318 15.3357864,20.2729183 15.75,20.2729183 C16.0007649,20.2729183 16.2349384,20.1475924 16.3740377,19.9389434 Z"
                          id="Path-3"
                          fill="currentcolor"
                        />
                        <path
                          d="M4.5,5 L9.5,5 C10.3284271,5 11,5.67157288 11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L4.5,8 C3.67157288,8 3,7.32842712 3,6.5 C3,5.67157288 3.67157288,5 4.5,5 Z M4.5,17 L9.5,17 C10.3284271,17 11,17.6715729 11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L4.5,20 C3.67157288,20 3,19.3284271 3,18.5 C3,17.6715729 3.67157288,17 4.5,17 Z M2.5,11 L6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 L2.5,14 C1.67157288,14 1,13.3284271 1,12.5 C1,11.6715729 1.67157288,11 2.5,11 Z"
                          id="Combined-Shape"
                          fill="currentcolor"
                          opacity="0.3"
                        />
                      </g>
                    </svg>
                  </span>
                  <h4 className="text-base mt-6 mb-3">Third feature</h4>
                  <p className="text-slate-500">
                    A Private Limited is the most popular type of partnership
                    Malta. The limited liabilityis
                  </p>
                </div>
                <div>
                  <span className="flex items-center justify-center rounded-md w-12 h-12 bg-teal-100">
                    <svg
                      className="w-6 h-6 text-teal-500"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect id="bound" x={0} y={0} width={24} height={24} />
                        <path
                          d="M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z"
                          id="Combined-Shape"
                          fill="currentcolor "
                        />
                        <circle
                          id="Oval"
                          opacity="0.3"
                          cx="18.5"
                          cy="5.5"
                          r="2.5"
                          fill="currentcolor "
                        />
                      </g>
                    </svg>
                  </span>
                  <h4 className="text-base mt-6 mb-3">Fourth feature</h4>
                  <p className="text-slate-500">
                    Few derived into talking being in merit long you'd his the
                    of to had the to duties, it them one...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-24">
          <div className="container ">
            <div className="text-center">
              <h1 className="text-3xl font-bold">
                Any many more powerful features
              </h1>
            </div>
            <div className="py-16">
              <div className="grid grid-cols-4  gap-5">
                <div className="order-1">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Hire and Retain Top Talent
                    </p>
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Team Management
                    </p>
                  </div>
                </div>
                <div className="order-2">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Stay Compliant
                    </p>
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Improve Productivity
                    </p>
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Improve Experience
                    </p>
                  </div>
                </div>
                <div className="order-3">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Self-service Time Tracking
                    </p>
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Performance Management
                    </p>
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Expert HR
                    </p>
                  </div>
                </div>
                <div className="order-4">
                  <div className="flex flex-col gap-5">
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      New Hire Checklist
                    </p>
                    <p className="flex items-center gap-3">
                      <FaCheck className="text-theme" />
                      Tax Calculator
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex items-center justify-center mx-auto">
              <a href="#" className="myBtn">
                Sign Up Now <i className="fa-solid fa-arrow-right ms-2" />
              </a>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#F4F7FE] relative py-24">
        <div className="py-5">
          <div className="container relative">
            <div className="text-center">
              <h1 className="text-3xl/tight font-medium mb-4">Pricing</h1>
              <p className="text-gray-500">
                Pricing that <span className="text-theme">works </span> for
                everyone
              </p>
            </div>
            <div className="grid grid-cols-3  gap-7 mt-14">
              {/* 1 */}

              <div className="">
                <div className=" rounded-xl bg-white  w-full h-full text-center px-[40px] py-[60px]">
                  <span className="text-lg text-theme">Starter</span>
                  <h1 className="text-3xl/tight font-semibold mt-3">
                    <sup className="text-gray-500 text-sm font-normal">$</sup>
                    49
                    <sub className="text-gray-500 text-sm font-normal">
                      /month
                    </sub>
                  </h1>
                  <div className="border-b border-gray-200 w-full my-7" />
                  <div>
                    <div className="grid gap-6">
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Up to 600 minutes usage time
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Use for personal only
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Add up to 10 attendees
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Technical support via email
                      </p>
                    </div>
                    <div className="flex mt-[120px]">
                      <a
                        href="#"
                        className="bg-theme/10 text-theme/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-theme/20 transition-all duration-300"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div>
                <div className="rounded-xl bg-white  w-full h-full text-center px-[40px] py-[60px]">
                  <span className="text-lg text-theme">Professional</span>
                  <h1 className="text-3xl/tight font-semibold mt-3">
                    <sup className="text-gray-500 text-sm font-normal">$</sup>
                    99
                    <sub className="text-gray-500 text-sm font-normal">
                      /month
                    </sub>
                  </h1>
                  <div className="border-b border-gray-200 w-full my-7" />
                  <div>
                    <div className="grid gap-6">
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Up to 6000 minutes usage time
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Use for personal or a commercial
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Add up to 100 attendees
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Up to 5 teams
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Technical support via email
                      </p>
                    </div>
                    <div className="flex mt-20">
                      <a
                        href="#"
                        className="bg-theme text-white w-full py-3 rounded-lg border border-transparent hover:shadow-lg hover:shadow-theme/30 focus:shadow-none focus:outline focus:outline-theme/40 hover:border hover:border-theme transition-all duration-300"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div>
                <div className="rounded-xl bg-white  w-full h-full text-center px-[40px] py-[60px]">
                  <span className="text-lg text-theme">Enterprise</span>
                  <h1 className="text-3xl/tight font-semibold mt-3">
                    <sup className="text-gray-500 text-sm font-normal">$</sup>
                    599
                    <sub className="text-gray-500 text-sm font-normal">
                      /month
                    </sub>
                  </h1>
                  <div className="border-b border-gray-200 w-full my-7" />
                  <div>
                    <div className="flex flex-col gap-4">
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Unlimited usage time
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Use for personal or a commercial
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Add Unlimited attendees
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        24x7 Technical support via phone
                      </p>
                      <p className="flex items-center text-gray-600 gap-4">
                        <FaCheck />
                        Technical support via email
                      </p>
                    </div>
                    <div className="flex mt-20">
                      <a
                        href="#"
                        className="bg-theme/10 text-theme/90 w-full py-3 rounded-lg border border-transparent hover:border hover:border-theme/20 transition-all duration-300"
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
