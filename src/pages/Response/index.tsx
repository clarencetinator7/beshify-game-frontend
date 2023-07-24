import { useEffect, useState } from "react";
import ChatBox from "../../components/ChatBox";
import ResponseItem from "./components/ResponseItem";
// import { useNavigate, useParams } from "react-router-dom";

const Response = () => {
  // const navigate = useNavigate();
  // const { id } = useParams();
  const [seconds, setSeconds] = useState(5);
  const [minutes, setMinutes] = useState(1);

  useEffect(() => {
    // Simulate countdown timer for voting
    const interval = setInterval(() => {
      if (seconds === 0 && minutes > 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    // Navigate to showcase page if the countdown timer reaches 0
    if (seconds === 0 && minutes === 0) {
      console.log("Voting has ended!");
      clearInterval(interval);

      // TODO: Uncomment this and other related lines when showcase page is ready
      // navigate(`/beshify/showcase/${id}`);

      return;
    }
    return () => clearInterval(interval);
  }, [seconds, minutes]);

  return (
    <div className="">
      <div className="md:container md:mx-auto h-[calc(100vh-74px)] grid grid-cols-3 p-2">
        <div className="col-span-2 grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-4 overflow-y-auto p-10 relative">
          {DUMMY_RESPONSES.map((response) => (
            <ResponseItem key={response.id} response={response} />
          ))}
        </div>
        <div className="p-5 row-span-2">
          <h1 className="font-bold text-center text-3xl py-5">
            ✨Vote na mga Beshie!✨
          </h1>
          <ChatBox />
        </div>
        {/* Voting Timer Container */}
        <div className="col-span-2 p-3">
          <span className="text-lg font-bold block">Voting Timer</span>
          <div className="flex flex-row">
            <div className="bg-black text-white text-3xl p-1 rounded font-bold">
              <span>{minutes.toString().padStart(2, "0")}</span>
            </div>
            <span className="text-3xl font-bold">:</span>
            <div className="bg-black text-white text-3xl p-1 rounded font-bold">
              <span>
                {
                  // Format seconds to 2 digits
                  seconds.toString().padStart(2, "0")
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Response;

const DUMMY_RESPONSES = [
  {
    id: 1,
    username: "Beshy1",
    statement: "Hello🤸🏽Beshy!",
  },
  {
    id: 2,
    username: "Beshy2",
    statement: "What's🤸🏽up🤸🏽Beshy!",
  },
  {
    id: 3,
    username: "Beshy3",
    statement: "Good🤸🏽morning🤸🏽Beshy!",
  },
  {
    id: 4,
    username: "Beshy4",
    statement:
      "Hey🤸🏽Beshy,🤸🏽have🤸🏽you🤸🏽tried🤸🏽out🤸🏽the🤸🏽new🤸🏽VS🤸🏽Code🤸🏽extension?🤸🏽",
  },
  {
    id: 5,
    username: "Beshy5",
    statement: "Hi🤸🏽Beshy,🤸🏽what's🤸🏽your🤸🏽favorite🤸🏽programming🤸🏽language?🤸🏽",
  },
  {
    id: 6,
    username: "Beshy6",
    statement:
      "What's🤸🏽good🤸🏽Beshy,🤸🏽have🤸🏽you🤸🏽seen🤸🏽the🤸🏽latest🤸🏽tech🤸🏽news?🤸🏽",
  },
  {
    id: 7,
    username: "Beshy7",
    statement:
      "Hey🤸🏽Beshy,🤸🏽do🤸🏽you🤸🏽have🤸🏽any🤸🏽exciting🤸🏽projects🤸🏽you're🤸🏽working🤸🏽on?🤸🏽",
  },
  {
    id: 8,
    username: "Beshy8",
    statement: "Good🤸🏽afternoon🤸🏽Beshy,🤸🏽how's🤸🏽your🤸🏽day🤸🏽been🤸🏽so🤸🏽far?🤸🏽",
  },
  {
    id: 9,
    username: "Beshy9",
    statement:
      "What's🤸🏽up🤸🏽Beshy,🤸🏽have🤸🏽you🤸🏽tried🤸🏽out🤸🏽the🤸🏽new🤸🏽CSS🤸🏽framework?🤸🏽",
  },
  {
    id: 10,
    username: "Beshy10",
    statement: "Hey🤸🏽Beshy,🤸🏽what's🤸🏽your🤸🏽favorite🤸🏽coding🤸🏽playlist?🤸🏽",
  },
  {
    id: 11,
    username: "Beshy5",
    statement: "Hi🤸🏽Beshy,🤸🏽what's🤸🏽your🤸🏽favorite🤸🏽programming🤸🏽language?🤸🏽",
  },
  {
    id: 12,
    username: "Beshy6",
    statement:
      "What's🤸🏽good🤸🏽Beshy,🤸🏽have🤸🏽you🤸🏽seen🤸🏽the🤸🏽latest🤸🏽tech🤸🏽news?🤸🏽",
  },
  {
    id: 13,
    username: "Beshy7",
    statement:
      "Hey🤸🏽Beshy,🤸🏽do🤸🏽you🤸🏽have🤸🏽any🤸🏽exciting🤸🏽projects🤸🏽you're🤸🏽working🤸🏽on?🤸🏽",
  },
  {
    id: 14,
    username: "Beshy8",
    statement: "Good🤸🏽afternoon🤸🏽Beshy,🤸🏽how's🤸🏽your🤸🏽day🤸🏽been🤸🏽so🤸🏽far?🤸🏽",
  },
  {
    id: 15,
    username: "Beshy9",
    statement:
      "What's🤸🏽up🤸🏽Beshy,🤸🏽have🤸🏽you🤸🏽tried🤸🏽out🤸🏽the🤸🏽new🤸🏽CSS🤸🏽framework?🤸🏽",
  },
];
