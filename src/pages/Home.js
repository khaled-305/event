import EventCard from "../components/EventCard";
import Layout from "../components/Layout";
import RightBar from "../components/RightBar";

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-between">
        <EventCard />
        <RightBar />
      </div>
    </Layout>
  );
}
