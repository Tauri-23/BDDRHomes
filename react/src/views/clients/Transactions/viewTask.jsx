import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTaskFullInfoById } from "../../../Services/GeneralTransactionService";

export default function ClientViewTask() {
    const {taskId} = useParams();
    const [task, setTask] = useState(null);


    useEffect(() => {
        const getAll = async() => {
            const [taskDb] = await Promise.all([
                fetchTaskFullInfoById(taskId)
            ]);

            setTask(taskDb);
        }

        getAll();
    }, []);


    return(
        <div className="content1 position-relative">
            {task
            ? (
                <>
                    <div className="text-l1 fw-bold color-black2 mar-bottom-l1">Task</div>
                </>
            )
            : (
                <div className="text-l3 center-absolute-xy">Loading...</div>
            )}
            
        </div>
    );
}