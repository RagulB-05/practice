// import { useContext, useReducer, createContext } from "react";

// // Create context
// const TaskContext = createContext();

// // Initial state
// const initialState = {
//   taskList: [],
// };

// // Reducer function
// function TaskReducer(state, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case "ADD_TASK":
//       return { ...state, taskList: [...state.taskList, payload] };
//     case "DELETE_TASK":
//       return {
//         ...state,
//         taskList: state.taskList.filter((task) => task.id !== payload),
//       };
//     default:
//       return state;
//   }
// }

// // ✅ Provider Component
// export const TaskProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(TaskReducer, initialState);

//   return (
//     <TaskContext.Provider value={{ state, dispatch }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };

// // ✅ Custom hook for consuming the context
// export const useTaskContext = () => useContext(TaskContext);
