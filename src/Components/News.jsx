import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../Common/baseUrl";
import { useSelector } from "react-redux";

function News() {
  useEffect(() => {
    getData();
  }, []);
  const [newsData, setNewsData] = useState([]);
  const getData = () => {
    axios.get(baseUrl).then((res) => setNewsData(res.data));
  };

  const deleteNews = (id) => {
    axios.delete(baseUrl + id).then(() => getData());
  };

  const [toggle, setToggle] = useState(false);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);

  const newsData1 = newsData.filter((i, n) => n >= start && n < end);

  const [isFav, setFav] = useState(false);


  return (
    <>
      <div className="hidden md:flex bg-primary gap-2  ">
        {/* Side Nav */}
        <div className="w-[40%] lg:w-[30%]">
          <div className="px-6 py-10 bg-primary  flex flex-col gap-4 z-50  shadow-md">
            <div className="flex items-center gap-4 bg-white p-2 rounded-md">
              <img
                className="w-16"
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
              />
              <div>
                <p className="m-0 font-medium text-nowrap">Hii Reader</p>
                <p className="m-0 text-nowrap">Here's your news</p>
              </div>
            </div>
            <div className="bg-white rounded-md p-2">
              <p className="font-bold text-xl text-center text-nowrap">
                View Toggle
              </p>
              <div
                onClick={() => setToggle(!toggle)}
                className="flex justify-center mt-2 cursor-pointer"
              >
                <div
                  className={`${
                    toggle ? "bg-secondary" : "bg-light_blue"
                  } px-3 py-1 rounded-tl-md rounded-bl-md`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.4em"
                    height="2.4em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8 17q.425 0 .713-.288T9 16t-.288-.712T8 15t-.712.288T7 16t.288.713T8 17m0-4q.425 0 .713-.288T9 12t-.288-.712T8 11t-.712.288T7 12t.288.713T8 13m0-4q.425 0 .713-.288T9 8t-.288-.712T8 7t-.712.288T7 8t.288.713T8 9m3 8h6v-2h-6zm0-4h6v-2h-6zm0-4h6V7h-6zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"
                    />
                  </svg>
                </div>
                <div
                  className={`${
                    toggle ? "bg-light_blue" : "bg-secondary"
                  } px-3 py-1 rounded-tr-md rounded-br-md`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.4em"
                    height="2.4em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-2">
              <p className="font-bold text-xl text-center">Have a Feedback ?</p>
              <div className="flex justify-center mt-2 bg-light_blue px-2 py-1 rounded-md font-semibold">
                We're listining
              </div>
            </div>
          </div>
        </div>

        {/* -----------------News  Div Start------------------------- */}
        <div className="w-[80%] py-10">
          {toggle ? (
            <div className=" space-y-2  ">
              {newsData1.map((i) => (
                <div className="flex gap-2 items-center px-10">
                  <div className="bg-white w-[95%] p-2 flex gap-2  rounded-md">
                    <img
                      className="rounded-full mt-1 w-20 h-20"
                      src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
                      alt=""
                    />

                    <div className="">
                      <p className="m-0 font-bold text-lg">
                        {i.title.slice(0, 60)}
                        {i.title.length < 60 ? "" : "..."}{" "}
                      </p>

                      <p className="m-0  font-medium">
                        {i.body.slice(0, 80)} {i.body.length < 80 ? "" : "..."}{" "}
                      </p>

                      <p className="m-0 font-medium text-secondary1">
                        {" "}
                        Mon, 21 Dec 2023 14:57 GMT{" "}
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => deleteNews(i.id)}
                    className="flex justify-end bg-white rounded-full p-2"
                  >
                    {" "}
                    <svg
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="red"
                        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className=" grid  lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {newsData1.map((i) => (
                <div className="bg-white p-2">
                  <div
                    onClick={() => deleteNews(i.id)}
                    className="flex justify-end"
                  >
                    {" "}
                    <svg
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="red"
                        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                      />
                    </svg>
                  </div>

                  <div className="p-4">
                    <p className="m-0 font-bold text-lg">
                      {i.title.slice(0, 20)}
                      {i.title.length < 20 ? "" : "..."}{" "}
                    </p>

                    <p className="m-0 mt-1 font-medium">
                      {i.body.slice(0, 40)} {i.body.length < 40 ? "" : "..."}{" "}
                    </p>

                    <p className="m-0 mt-1 font-medium text-secondary1">
                      {" "}
                      Mon, 21 Dec 2023 14:57 GMT{" "}
                    </p>

                    <img
                      className="rounded-md mt-1"
                      src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Page Change  */}
          <div className="flex gap-2 mt-4 justify-center">
            {new Array(Math.round(newsData.length / 6))
              .fill()
              .map((i, n) => n + 1)
              .filter((i, n) => i >= start / 6 && i < start / 6 + 3)
              .map((i) => (
                <p
                  onClick={() => {
                    setStart(6 * i - 6);
                    setEnd(6 * i);
                  }}
                  className={`${
                    start / 6 + 1 == i ? "bg-white" : "bg-secondary"
                  } px-3 py-1 rounded-full`}
                >
                  {i}
                </p>
              ))}
          </div>
        </div>
      </div>

      {/* mobile View  */}
      <div className="md:hidden bg-primary space-y-4 px-2">
        {/* {JSON.stringify(favData)} */}
       
        {newsData.map((i) => (
          <div
            onClick={() => addFav(i)}
            className="bg-white  p-1 flex gap-2 items-center  rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M19.285 12.645a3.8 3.8 0 0 0-5.416-5.332q-.288.288-.732.707l-.823.775l-.823-.775q-.445-.42-.733-.707a3.8 3.8 0 0 0-5.374 0c-1.468 1.469-1.485 3.844-.054 5.32l6.984 6.984l6.97-6.972zm-14.75-6.18a5 5 0 0 1 7.072 0q.273.274.707.682q.432-.408.707-.683a5 5 0 0 1 7.125 7.017l-7.125 7.126a1 1 0 0 1-1.414 0L4.48 13.48a5 5 0 0 1 .055-7.017z"
              />
            </svg>

            <div className="">
              <p className="m-0 font-bold text-lg">
                {i.title.slice(0, 10)}
                {i.title.length < 10 ? "" : "..."}{" "}
              </p>

              <p className="m-0  font-medium">
                {i.body.slice(0, 25)} {i.body.length < 25 ? "" : "..."}{" "}
              </p>

              <p className="m-0 font-medium text-secondary1">
                {" "}
                Mon, 21 Dec 2023 14:57 GMT{" "}
              </p>
            </div>
          </div>
        ))}

        <div className="fixed bottom-0 flex justify-between w-full ">
          <div
            onClick={() => setFav(false)}
            className={`w-full ${
              isFav ? "bg-white" : "bg-blue-500"
            } font-medium text-center py-2`}
          >
            News
          </div>
          <div
            onClick={() => setFav(true)}
            className={`w-full ${
              isFav ? "bg-blue-500" : "bg-white"
            } font-medium text-center py-2`}
          >
            Favs
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
