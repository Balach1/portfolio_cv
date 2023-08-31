
    import { FC } from "react";
    import { EducationType } from "../../types/Section.js";
    import { UserData } from "../../types/UserData.js";
    import JobCard from "./JobCard.js";

    const EducationSection: FC<{
      details: EducationType;
      userData: UserData;
    }> = ({ details, userData }) => {
      return (
        <section className="relative mb-20 mt-20">
          <div className="container mx-auto max-w-screen-lg px-5">
            <h2 className="mb-8 text-center text-3xl font-bold transition-all">
              {details.headerOne}
            </h2>
            <div>
              {userData.work
                .sort((a, b) => a.orderId - b.orderId)
                .map((job, index) => (
                  <JobCard
                    key={job.id}
                    image={job.image}
                    companyTitle={job.company}
                    role={job.position}
                    description={job.description}
                    startDate={job.startDate}
                    endDate={job.endDate}
                    active={index === 0}
                  />
                ))}
            </div>
          </div>
        </section>
      );
    };

    export default EducationSection;
  