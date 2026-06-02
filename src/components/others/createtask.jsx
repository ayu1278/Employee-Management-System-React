import React, { useContext, useState } from "react";
import { AuthContext } from "../../context2/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!userData || !userData.employees) {
      console.log("Employees not loaded");
      return;
    }

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category: category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedEmployees = [...userData.employees];

    updatedEmployees.forEach((emp) => {
      if (
        emp.firstName.toLowerCase() ===
        assignTo.trim().toLowerCase()
      ) {
        emp.tasks.push(newTask);

        emp.taskNumbers.newTask =
          emp.taskNumbers.newTask + 1;
      }
    });

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    setUserData({
      ...userData,
      employees: updatedEmployees,
    });

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="bg-[#1c1c1c] mt-7 p-5 rounded-lg">
      <form
        onSubmit={submitHandler}
        className="flex justify-between gap-10"
      >
        <div className="w-1/2 flex flex-col gap-5">
          <div>
            <h3 className="mb-1 text-sm">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="w-full p-2 bg-transparent border border-gray-600 rounded outline-none"
            />
          </div>

          <div>
            <h3 className="mb-1 text-sm">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full p-2 bg-transparent border border-gray-600 rounded outline-none"
            />
          </div>

          <div>
            <h3 className="mb-1 text-sm">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="Rahul"
              className="w-full p-2 bg-transparent border border-gray-600 rounded outline-none"
            />
          </div>

          <div>
            <h3 className="mb-1 text-sm">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc"
              className="w-full p-2 bg-transparent border border-gray-600 rounded outline-none"
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-5">
          <div>
            <h3 className="mb-1 text-sm">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) =>
                setTaskDescription(e.target.value)
              }
              rows="10"
              className="w-full p-2 bg-transparent border border-gray-600 rounded outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-emerald-500 py-3 rounded text-white font-medium hover:bg-emerald-600"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;