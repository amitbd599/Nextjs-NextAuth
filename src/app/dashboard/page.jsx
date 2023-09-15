"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getCookies, setCookie, deleteCookie, getCookie } from "cookies-next";
const page = () => {
  let cookie = getCookie("token");
  console.log(!!cookie);
  return (
    <>
      {/* Header */}
      <Header />

      <div className="bg-[#F4F7FE] py-[100px]">
        <section className="relative overflow-hidden ">
          <div className="container">
            <div className="flex">
              <div className="w-full">
                <h3 className="text-xl text-gray-800 mt-2">Hi Greeva</h3>
                <p className="mt-1 font-medium mb-4">Welcome to Prompt!</p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-2">
              <div className="lg:col-span-5 col-span-12">
                <div className="bg-white rounded">
                  <div className="p-6">
                    <div className="flex">
                      <div className="grow">
                        <div className="flex">
                          <img
                            src="/assets/img-8.jpg"
                            className="img-fluid w-12 h-12 rounded me-3"
                            alt="..."
                          />
                          <div className="grow">
                            <h4 className="tetx-lg text-gray-800 mb-1 mt-0 font-semibold">
                              Ms. Greeva Navadiya
                            </h4>
                            <p className="text-gray-400 pb-0 text-sm mb-4 font-medium">
                              Web &amp; Graphic Designer
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="shrink text-end">
                        <button
                          className="text-gray-800 fc-dropdown"
                          data-fc-target="dropdown-target"
                          data-fc-type="dropdown"
                          data-fc-placement="bottom-end"
                          type="button"
                        >
                          <svg
                            className="h-6 w-6 text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={19} cy={12} r={1} />
                            <circle cx={5} cy={12} r={1} />
                          </svg>
                        </button>
                        <div
                          id="dropdown-target"
                          className="hidden bg-white shadow rounded py-2 px-1.5 min-w-[10rem] fc-dropdown"
                        >
                          <a
                            className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
                            href="javascript:void(0)"
                          >
                            <svg
                              className="h-4 w-4 me-2.5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                            <span className="">Share</span>
                          </a>
                          <a
                            className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
                            href="javascript:void(0)"
                          >
                            <svg
                              className="h-4 w-4 me-2.5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="23 4 23 10 17 10" />
                              <polyline points="1 20 1 14 7 14" />
                              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                            </svg>
                            <span className="">Refresh</span>
                          </a>
                          <hr className="my-2" />
                          <a
                            className="flex items-center py-1.5 px-5 text-base text-red-500 hover:bg-slate-100 rounded"
                            href="javascript:void(0)"
                          >
                            <svg
                              className="h-4 w-4 me-2.5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1={10} y1={11} x2={10} y2={17} />
                              <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                            <span className="">Deactivate</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 flex-wrap py-4 border-b">
                      <div className="mb-2">
                        <a
                          href="#"
                          className="flex gap-0.5 text-gray-400 text-sm"
                        >
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                          greeva@coderthemes.com
                        </a>
                      </div>
                      <div className="mb-2">
                        <a
                          href="#"
                          className="flex gap-0.5 text-gray-400 text-sm"
                        >
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                          +00 123-456-789
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 mt-4">
                      <div className="md:w-1/2 w-full">
                        <div className="flex justify-between mb-3">
                          <h6 className="fw-medium my-0">Project Completion</h6>
                          <p className="float-end mb-0">85%</p>
                        </div>
                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden  ">
                          <div
                            className="flex flex-col justify-center overflow-hidden bg-primary"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="md:w-1/2 w-full">
                        <div className="flex justify-between mb-3">
                          <h6 className="fw-medium my-0">Overall Rating</h6>
                          <p className="float-end mb-0">7.5</p>
                        </div>
                        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden  ">
                          <div
                            className="flex flex-col justify-center overflow-hidden bg-orange-500"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* profile widget end */}
              <div className="lg:col-span-3 col-span-12 space-y-6">
                <div className="bg-white">
                  <div className="flex items-center p-6">
                    <div className="">
                      <div className="inline-flex items-center justify-center h-12 w-12 bg-green-500/10 rounded me-3">
                        <svg
                          className="text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="text-xl text-gray-800">21</h3>
                      <p className="text-muted mb-0">Tasks Completed</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white">
                  <div className="flex items-center p-6">
                    <div className="">
                      <div className="inline-flex items-center justify-center h-12 w-12 bg-sky-500/10 rounded me-3">
                        <svg
                          className="text-sky-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grow">
                      <h3 className="text-xl text-gray-800">21</h3>
                      <p className="text-muted mb-0">Tasks Completed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12">
                <div className="bg-white">
                  <div className="p-6">
                    <div className="flex justify-between">
                      <div className="grow">
                        <h4 className="text-base font-semibold text-gray-800">
                          Revenue
                        </h4>
                      </div>
                      <div className="shrink text-end">
                        <button
                          className="text-gray-800 fc-dropdown"
                          data-fc-target="dropdown-target"
                          data-fc-type="dropdown"
                          data-fc-placement="bottom-end"
                          type="button"
                        >
                          <svg
                            className="h-6 w-6 text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={19} cy={12} r={1} />
                            <circle cx={5} cy={12} r={1} />
                          </svg>
                        </button>
                        <div
                          id="dropdown-target"
                          className="hidden bg-white  shadow rounded py-2 px-1.5 min-w-[10rem]"
                        >
                          <a
                            className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
                            href="javascript:void(0)"
                          >
                            <svg
                              className="h-4 w-4 me-2.5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                            <span className="">Share</span>
                          </a>
                          <a
                            className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
                            href="javascript:void(0)"
                          >
                            <svg
                              className="h-4 w-4 me-2.5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="23 4 23 10 17 10" />
                              <polyline points="1 20 1 14 7 14" />
                              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                            </svg>
                            <span className="">Refresh</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <h1 className="text-3xl text-gray-800 my-2.5">$2,100.00</h1>
                    <p className="text-gray-400 text-sm">Last Week</p>
                    <hr className="my-3.5" />
                    <div className="flex items-center">
                      <div className="lg:w-1/2">
                        <div className="flex items-center">
                          <div className="me-4 shrink">
                            <svg
                              className="h-6 w-6 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                              <polyline points="17 6 23 6 23 12" />
                            </svg>
                          </div>
                          <div className="grow">
                            <h5 className="mt-0 mb-0">15%</h5>
                            <p className="text-muted mb-0 fs-13">Prev Week</p>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="flex items-center">
                          <div className="me-3 flex-shrink-0">
                            <svg
                              className="h-6 w-6 text-red-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                              <polyline points="17 18 23 18 23 12" />
                            </svg>
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="mt-0 mb-0">10%</h5>
                            <p className="text-muted mb-0 fs-13">Prev Month</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br />
        <section className="relative overflow-hidden">
          <div className="container">
            <div className="flex items-center justify-between my-6">
              <div className="">
                <h4 className="text-base text-gray-800">Recent Projects</h4>
              </div>
              <div className="text-end">
                <a href="#" className="font-semibold text-primary text-sm">
                  View All{" "}
                  <svg
                    className="h-5 w   5 inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={5} y1={12} x2={19} y2={12} />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
            {/* end title */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-3">
              {/* project start */}
              <div className="bg-white rounded">
                <div className="p-6">
                  {/* action start */}
                  <div className="flex items-center">
                    <div className="grow">
                      <p className="text-gray-400 text-sm font-medium">
                        Aug 09, 2020
                      </p>
                    </div>
                    <div className="shrink text-end">
                      <button
                        className="text-gray-800 fc-dropdown"
                        data-fc-target="recent-drop-1"
                        data-fc-type="dropdown"
                        data-fc-placement="bottom-end"
                        type="button"
                      >
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </button>
                      <div
                        id="recent-drop-1"
                        className="hidden bg-white shadow rounded py-2 px-1.5 min-w-[10rem] fc-dropdown"
                      >
                        <a
                          className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
                          href="javascript:void(0)"
                        >
                          <svg
                            className="h-4 w-4 me-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx={12} cy={12} r={3} />
                          </svg>
                          <span className="">View</span>
                        </a>
                        <a
                          className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
                          href="javascript:void(0)"
                        >
                          <svg
                            className="h-4 w-4 me-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                          </svg>
                          <span className="">Edit</span>
                        </a>
                        <hr className="my-2" />
                        <a
                          className="flex items-center py-1.5 px-5 text-base text-red-500 hover:bg-slate-100 rounded"
                          href="javascript:void(0)"
                        >
                          <svg
                            className="h-4 w-4 me-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                          <span className="">Delete</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* action end */}
                  <div className="mt-3">
                    <h4 className="mt-0 mb-1">
                      <a
                        className="text-lg text-gray-600 hover:text-primary"
                        href="#"
                      >
                        Shreyu - Design Updates
                      </a>
                    </h4>
                    <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-semibold bg-primary/10 text-primary">
                      Designing
                    </span>
                    <p className="text-gray-400 text-sm my-4">
                      Update shreyu with modern and latest trends...
                    </p>
                  </div>
                  {/* progress */}
                  <div className="mt-4">
                    <div className="flex mb-3">
                      <div className="grow">
                        <h6 className="mt-0">Progress</h6>
                      </div>
                      <div className="shrink text-end">
                        <small className="fw-semibold">75%</small>
                      </div>
                    </div>
                    <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden  ">
                      <div
                        className="flex flex-col justify-center overflow-hidden bg-green-500"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  {/* progress end */}
                  {/* assignment start */}
                  <div className="flex -space-x-2 mt-3">
                    <img
                      className="inline-block h-8 w-8 rounded-full border-2 border-white "
                      src="/assets/img-8.jpg"
                      alt="Image Description"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full border-2 border-white "
                      src="/assets/img-8.jpg"
                      alt="Image Description"
                    />
                  </div>
                  {/* assignment end */}
                </div>
              </div>
              {/* project end */}
              {/* project start */}
              <div className="bg-white rounded">
                <div className="p-6">
                  {/* action start */}
                  <div className="flex items-center">
                    <div className="grow">
                      <p className="text-gray-400 text-sm font-medium">
                        Aug 10, 2020
                      </p>
                    </div>
                    <div className="shrink text-end">
                      <button
                        className="text-gray-800 fc-dropdown"
                        data-fc-target="recent-drop-1"
                        data-fc-type="dropdown"
                        data-fc-placement="bottom-end"
                        type="button"
                      >
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </button>
                      <div
                        id="recent-drop-1"
                        className="hidden bg-white  shadow rounded py-2 px-1.5 min-w-[10rem]"
                      >
                        <a
                          className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
                          href="javascript:void(0)"
                        >
                          <svg
                            className="h-4 w-4 me-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx={12} cy={12} r={3} />
                          </svg>
                          <span className="">View</span>
                        </a>
                        <a
                          className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
                          href="javascript:void(0)"
                        >
                          <svg
                            className="h-4 w-4 me-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                          </svg>
                          <span className="">Edit</span>
                        </a>
                        <hr className="my-2" />
                        <a
                          className="flex items-center py-1.5 px-5 text-base text-red-500 hover:bg-slate-100 rounded"
                          href="javascript:void(0)"
                        >
                          <svg
                            className="h-4 w-4 me-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                          <span className="">Delete</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* action end */}
                  <div className="mt-3">
                    <h4 className="mt-0 mb-1">
                      <a
                        className="text-lg text-gray-600 hover:text-primary"
                        href="#"
                      >
                        Prompt v2.0
                      </a>
                    </h4>
                    <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-semibold bg-orange-500/10 text-orange-500">
                      Planning
                    </span>
                    <p className="text-gray-400 text-sm my-4">
                      Plan new features and functionality for prompt...
                    </p>
                  </div>
                  {/* progress */}
                  <div className="mt-4">
                    <div className="flex mb-3">
                      <div className="grow">
                        <h6 className="mt-0">Progress</h6>
                      </div>
                      <div className="shrink text-end">
                        <small className="fw-semibold">50%</small>
                      </div>
                    </div>
                    <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden  ">
                      <div
                        className="flex flex-col justify-center overflow-hidden bg-red-500"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  {/* progress end */}
                  {/* assignment start */}
                  <div className="flex -space-x-2 mt-3">
                    <img
                      className="inline-block h-8 w-8 rounded-full border-2 border-white "
                      src="/assets/img-8.jpg"
                      alt="Image Description"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full border-2 border-white "
                      src="/assets/img-8.jpg"
                      alt="Image Description"
                    />
                  </div>
                  {/* assignment end */}
                </div>
              </div>
              {/* project end */}
              {/* project start */}
              <div className="bg-white rounded">
                <div className="p-6">
                  {/* action start */}
                  <div className="flex items-center">
                    <div className="grow">
                      <p className="text-gray-400 text-sm font-medium">
                        Aug 11, 2020
                      </p>
                    </div>
                    <div className="shrink text-end">
                      <button
                        className="text-gray-800 fc-dropdown"
                        data-fc-target="recent-drop-1"
                        data-fc-type="dropdown"
                        data-fc-placement="bottom-end"
                        type="button"
                      >
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx={12} cy={12} r={1} />
                          <circle cx={19} cy={12} r={1} />
                          <circle cx={5} cy={12} r={1} />
                        </svg>
                      </button>
                      <div
                        id="recent-drop-1"
                        className="hidden bg-white  shadow rounded py-2 px-1.5 min-w-[10rem]"
                      >
                        <a
                          className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
                          href="javascript:void(0)"
                        >
                          <svg
                            className="h-4 w-4 me-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx={12} cy={12} r={3} />
                          </svg>
                          <span className="">View</span>
                        </a>
                        <a
                          className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
                          href="javascript:void(0)"
                        >
                          <svg
                            className="h-4 w-4 me-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                          </svg>
                          <span className="">Edit</span>
                        </a>
                        <hr className="my-2" />
                        <a
                          className="flex items-center py-1.5 px-5 text-base text-red-500 hover:bg-slate-100 rounded"
                          href="javascript:void(0)"
                        >
                          <svg
                            className="h-4 w-4 me-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                          <span className="">Delete</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* action end */}
                  <div className="mt-3">
                    <h4 className="mt-0 mb-1">
                      <a
                        className="text-lg text-gray-600 hover:text-primary"
                        href="#"
                      >
                        Hyper React v4.0
                      </a>
                    </h4>
                    <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-semibold bg-sky-500/10 text-sky-500">
                      Development
                    </span>
                    <p className="text-gray-400 text-sm my-4">
                      Update shreyu with modern and latest trends...
                    </p>
                  </div>
                  {/* progress */}
                  <div className="mt-4">
                    <div className="flex mb-3">
                      <div className="grow">
                        <h6 className="mt-0">Progress</h6>
                      </div>
                      <div className="shrink text-end">
                        <small className="fw-semibold">60%</small>
                      </div>
                    </div>
                    <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden  ">
                      <div
                        className="flex flex-col justify-center overflow-hidden bg-amber-500"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  {/* progress end */}
                  {/* assignment start */}
                  <div className="flex -space-x-2 mt-3">
                    <img
                      className="inline-block h-8 w-8 rounded-full border-2 border-white "
                      src="/assets/img-8.jpg"
                      alt="Image Description"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full border-2 border-white "
                      src="/assets/img-8.jpg"
                      alt="Image Description"
                    />
                  </div>
                  {/* assignment end */}
                </div>
              </div>
              {/* project end */}
            </div>
            {/* end grid */}
          </div>
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default page;
