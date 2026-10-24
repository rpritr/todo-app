const TASKS_URL = "http://localhost:3000/tasks";

const ensureSuccess = (response) => {
  if (!response.ok) {
    throw new Error(`Task request failed (${response.status}).`);
  }
};

export const fetchTasks = async () => {
  const response = await fetch(TASKS_URL);
  ensureSuccess(response);

  const tasks = await response.json();
  if (!Array.isArray(tasks)) {
    throw new Error("The task server returned an invalid response.");
  }

  return tasks;
};

export const createTask = async (title) => {
  const response = await fetch(TASKS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, done: false }),
  });
  ensureSuccess(response);
  return response.json();
};

export const updateTask = async (taskId, changes) => {
  const response = await fetch(`${TASKS_URL}/${taskId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(changes),
  });
  ensureSuccess(response);
  return response.json();
};

export const deleteTask = async (taskId) => {
  const response = await fetch(`${TASKS_URL}/${taskId}`, {
    method: "DELETE",
  });
  ensureSuccess(response);
};
