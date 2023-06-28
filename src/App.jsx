import { useEffect, useState } from "react";
import Loading from "./Loading";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setJobs(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchJobs();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
