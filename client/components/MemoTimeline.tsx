import MemoCard from "./MemoCard";
import MemoEntry from "./MemoEntry";

const MemoTimeline = ({ hello }: { hello: string }) => (
  <>
    <MemoEntry />
    <ul className="messages">
      {hello.split("").map((_, index) => (
        <MemoCard key={index} />
      ))}
    </ul>
  </>
);

export default MemoTimeline;
