import useYears from "./useYears";

const useYear = (selectedYearQuery?: string) => {
  const years = useYears();

  return years.find((y) => y.query === selectedYearQuery);
};

export default useYear;
