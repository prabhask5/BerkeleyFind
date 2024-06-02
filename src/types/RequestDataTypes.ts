import { ObjectId } from "mongodb";
import { Course } from "./CourseModelTypes";
import { StudyPreferences } from "./UserPreferenceModelTypes";

export interface POSTMyBasicInfoRequestData {
  email: string;
  profileImageFile: string;
  firstName: string;
  lastName: string;
  major: string;
  gradYear: string;
  userBio: string;
  pronouns: string;
  fbURL: string;
  igURL: string;
}

export interface POSTCoursesRequestData {
  courseList: Course[];
}

export interface POSTStudyPrefRequestData {
  userStudyPreferences: StudyPreferences;
}

export interface ModifyRequestsRequestData {
  otherUserId: ObjectId;
}

export interface ActionResponse {
  responseData: any;
  status: number;
}
