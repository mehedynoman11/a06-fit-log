'use client'
import { WorkoutContext } from "@/context/workoutContext";
import { IWorkout } from "@/type/workoutType";
import { useContext } from "react";
import { toast } from "react-toastify";

interface SaveButtonProps {
    workout: IWorkout
}

const SaveButtonPage = ({workout}:SaveButtonProps) => {
 const {addSave, setAddSave} = useContext(WorkoutContext);
 
     const handleAddSave = () => {
         // console.log("button Click Triggered", workout);
         setAddSave([...addSave, workout]);
         toast.success("Saved successfully")
     }

    return (
        <div>
            <button 
            onClick={()=> handleAddSave()}
            className="w-full rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold sm:w-auto">
                Save for later
            </button>
        </div>
    );
};

export default SaveButtonPage;