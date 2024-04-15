const useYears = () => {
  const years = [];
  for (let year = 2024; year >= 1990; year--)
    years.push({ label: `${year}`, query: `${year}-01-01,${year}-12-31` });
  return years;
};

export default useYears;
