"use client";

import { getProject } from "@/services";
import { Project } from "@/types/type";
import { useState, useEffect } from "react";

export const useProjects = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Project[] = await getProject();
        setProjectData(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Return the states and any helper functions you need
  return { loading, projectData };
};
