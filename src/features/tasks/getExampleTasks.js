export const getExampleTasks = async () => {
  const response = await fetch("/todolist-react-3/exampleTasks.json");
  console.log("Response status:", response.status);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
