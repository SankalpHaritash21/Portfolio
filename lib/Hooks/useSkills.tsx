"use client";

import { getSkills } from "@/services";
import { Skill } from "@/types/type";
import { useState, useEffect } from "react";

export const useSkills = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Skill[] = await getSkills();
        setSkillsData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { skillsData };
};
