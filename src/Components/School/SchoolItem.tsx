import React from "react";
import { Link } from "react-router-dom";
import { ISchool } from "../../Types";

const SchoolItem = ({ id, name, fullname, courses }: ISchool) => {
  return (
    <Link
      to={`/school/courses/${id}`}
      state={{ schoolId: id }}
      className="bg-[#364253] text-color-secondary p-8 rounded-2xl "
    >
      <p className="text-[1.3rem]">{fullname}</p>
      <p>
        {name} ({courses.length})
      </p>
    </Link>
  );
};

export default SchoolItem;
