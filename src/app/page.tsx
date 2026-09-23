import Banner from "@/components/shared/Banner";
import WorkoutPage from "@/components/Workout/Workout";


export default function Home() {
  return (
    <div className="container mx-auto max-w-280">
      <Banner />
      <WorkoutPage />
    </div>
  );
}
