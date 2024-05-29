"use client";

import { Course } from "@/types/CourseModelTypes";
import {
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Text,
  CloseButton,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect } from "react";

interface CourseListItemProps {
  course: Course;
  allClosed: boolean;
  handleDeleteCourse: Function;
  inEditMode: boolean;
}

export default function CourseListItem({
  course,
  allClosed,
  handleDeleteCourse,
  inEditMode,
}: CourseListItemProps) {
  const { onOpen, onClose, isOpen } = useDisclosure();

  useEffect(() => {
    onClose();
  }, [onClose, allClosed]);

  const editModeStyleAddOn = " grid grid-cols-[93%_5%]";

  return (
    <div className="w-full">
      <div
        className={
          "my-[6px] sm:my-[10px] pl-1 sm:pl-2 md:pl-3 lg:pl-4 xl:pl-5 2xl:pl-6" +
          (inEditMode && editModeStyleAddOn)
        }
      >
        <Popover
          trigger="hover"
          openDelay={400}
          closeDelay={0}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        >
          <PopoverTrigger>
            <Text
              className="my-auto text-[10px] sm:text-sm md:text-base"
              variant="courseMain"
              noOfLines={1}
            >
              {course.courseAbrName + " - " + course.courseLongName}
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody className="text-[#414141] font-[590]">
              {course.courseAbrName + " - " + course.courseLongName}
            </PopoverBody>
          </PopoverContent>
        </Popover>
        {inEditMode && (
          <Tooltip
            label="Delete course"
            aria-label="remove course"
            openDelay={350}
          >
            <CloseButton
              size={["sm", "sm", "md", "md", "md", "md"]}
              onClick={() => handleDeleteCourse()}
            />
          </Tooltip>
        )}
      </div>
      <Divider className="bg-[#D8D8D8]" variant="solid" />
    </div>
  );
}
