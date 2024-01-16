export const getColor = (status: string) => {
  if (status === "Alive") {
    return "bg-green-500";
  }

  if (status === "Dead") {
    return "bg-red-600";
  }

  if (status === "unknown") {
    return "bg-gray-500";
  }
};
