// Utility function
const formatDate = (dateStr) => {
  if (!dateStr) return "Date not available";
  const date = new Date(dateStr);
  if (isNaN(date)) return "Date not available";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
export default formatDate;