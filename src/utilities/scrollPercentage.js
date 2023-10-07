export default function ScrollPercentage() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY;

  // Calculate the scroll percentage
  const percentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

  // Ensure the percentage is between 0 and 100
  const clampedPercentage = Math.min(Math.max(percentage.toFixed(0), 0), 100);

  return clampedPercentage;
}
