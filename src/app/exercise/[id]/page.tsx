import WorkoutDetails from '@/components/shared/WorkoutDetails';
import { getData } from '@/lib/workoutData';
import { IWorkout } from '@/type/workoutType';



const WorkoutDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const workoutData = await getData();
    const workout: IWorkout = workoutData.find((work: IWorkout) => String(work.id) === String(id));
    return (
        <WorkoutDetails key={workout.id} workout={workout}/>
    );
};

export default WorkoutDetailsPage;