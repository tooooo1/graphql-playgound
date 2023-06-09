import MemoCard from "./MemoCard";
import MemoEntry from "./MemoEntry";

const UserIds = ["tooooo1", "tooooo2"];
const getRandomUserId = () => UserIds[Math.round(Math.random())];

const dummy = Array(50)
  .fill(0)
  .map((_, i) => ({
    id: 50 - i,
    userId: getRandomUserId(),
    timestamp: (50 - i) * 1000 * 60,
    text: `${50 - i} 여행자`,
  }));

const MemoTimeline = () => (
  <>
    <MemoEntry />
    <ul className="messages">
      {dummy.map((value) => (
        <MemoCard key={value.id} />
      ))}
    </ul>
  </>
);

export default MemoTimeline;
