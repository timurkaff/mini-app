import React from 'react';
import { Student } from '../interfaces/student';
import ava from "../img/ava.svg"

interface ProfileInfoProps {
  student: Student;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ student }) => {
  return (
    <div className="profile-info">
      <div className="avatar">
          <img src={ava} alt="" />
      </div>
      <h2>{student.name}</h2>
      <div className="student-details">
        <p>Направление: {student.direction}</p>
        <p>Курс: {student.course}</p>
        <p>Группа: {student.group}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;