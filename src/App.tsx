import { FC, useState } from "react";
import "./App.css";

const audience = [
  "Nurse",
  "Millionaire",
  "Baker",
  "Devil",
  "Killer",
  "Dictator",
  "Dragon",
];
const products = [
  "Utensils",
  "Lantern",
  "Vortex",
  "Cactus",
  "Box",
  "Chair",
  "Honey",
  "Torch",
  "Bunny",
  "Zebra",
];

interface UserTopic {
  user: string;
  item: string;
  audience: string;
}

interface UserTopicRowProps {
  userTopics: UserTopic[];
}

const UserTopicRow: FC<UserTopicRowProps> = ({ userTopics }) => {
  return (
    <table className="w-full text-left bg-white mt-20 rounded-xl">
      <thead className="h-10 md:h-14 bg-zinc-900 text-white">
        <tr>
          <th className="sm:pl-3 min-w-32 rounded-tl-lg">
            <p className="ml-2">Student</p>
          </th>
          <th className="min-w-32">
            <p className="ml-2">Item</p>
          </th>
          <th className="min-w-32 rounded-tr-lg">
            <p className="ml-2">Audience</p>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white text-black">
        {userTopics &&
          userTopics.map((userTopic) => (
            <tr className="h-20 border-b border-gray-200">
              <td className="pl-3">
                <p className="text-sm">{userTopic.user}</p>
              </td>
              <td className="pl-3">
                <p className="text-sm">{userTopic.item}</p>
              </td>
              <td className="pl-3">
                <p className="text-sm">{userTopic.audience}</p>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

function App() {
  const [userTopics, setUserTopics] = useState<UserTopic[]>([]);
  const [user, setUser] = useState<string>("");
  const [currentProduct, setCurrentProduct] = useState<string>(products[0]);
  const [currentAudience, setCurrentAudience] = useState<string>(audience[0]);

  const draw = (
    a: string[],
    setFunc: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const totalIterations = 30; // Total iterations set to 30
    const breakpoint = 20; // Delay increase significantly after this point
    let previousIndex = -1;

    for (let i = 0; i < totalIterations; i++) {
      setTimeout(
        () => {
          let newIndex = Math.floor(Math.random() * a.length);
          if (newIndex === previousIndex) {
            newIndex = Math.floor(Math.random() * a.length);
          }
          previousIndex = newIndex;
          setFunc(a[newIndex]);
        },
        // Linear increase for the first 20 iterations, then quadratic growth
        i < breakpoint
          ? i * 50
          : 1000 + (i - breakpoint) * (i - breakpoint + 1) * 50, // Quadratic increase after breakpoint
      );
    }
  };
  return (
    <>
      <h1 className="uppercase font-black tracking-widest mb-12 sm:mb-20">
        Snake Oil
      </h1>
      <div className="w-full h-12 mb-20 inline-flex items-center justify-start mt-12">
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter your name"
          className="h-11 rounded-lg p-4 mr-4"
        />
        <button
          className="h-10 bg-gray-100 text-zinc-700 hover:bg-zinc-300 active:bg-zinc-400 duration-300 p-2 rounded-lg text-sm w-24 font-bold"
          onClick={() => {
            if (!user) {
              alert("Please enter your name");
              return;
            }
            setUserTopics([
              ...userTopics,
              { user, item: currentProduct, audience: currentAudience },
            ]);
          }}
        >
          submit
        </button>
      </div>
      <div className="w-full inline-flex space-x-3 min-h-96">
        <div className="w-full h-64 text-2xl md:text-3xl font-bold tracking-wide">
          <h2 className="mb-3">Product</h2>
          <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center font-normal md:text-xl text-lg">
            {currentProduct}
          </div>
          <button
            type="button"
            className="h-8 md:h-10 bg-gray-100 text-zinc-700 hover:bg-zinc-300 active:bg-zinc-400 duration-300 p-1 md:p-2 rounded-full text-sm w-20 md:w-24 mt-6 mx-auto cursor-pointer"
            onClick={() => draw(products, setCurrentProduct)}
          >
            draw
          </button>
        </div>
        <div className="w-full h-64 text-2xl md:text-3xl font-bold tracking-wide">
          <h2 className="mb-3">Audience</h2>
          <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center font-normal md:text-xl text-lg">
            {currentAudience}
          </div>
          <button
            type="button"
            className="h-8 md:h-10 bg-gray-100 text-zinc-700 hover:bg-zinc-300 active:bg-zinc-400 duration-300 p-1 md:p-2 rounded-full text-sm w-20 md:w-24 mt-6 mx-auto cursor-pointer"
            onClick={() => draw(audience, setCurrentAudience)}
          >
            draw
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-scroll rounded-lg">
        <UserTopicRow userTopics={userTopics} />
      </div>
    </>
  );
}

export default App;
