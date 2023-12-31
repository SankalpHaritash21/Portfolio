import { Project, Skill } from "@/types/type";
import request, { gql } from "graphql-request";

const master =
  "https://api-ap-south-1.hygraph.com/v2/clqquxpy35w4501uifhxgajcp/master";

export const getProject = async (): Promise<Project[]> => {
  const query = gql`
    query Project {
      projects {
        id
        createdAt
        title
        tag
        description
        github
        liveLink
        image {
          url
        }
      }
    }
  `;

  const { projects }: { projects: Project[] } = await request(master, query);
  return projects;
};

export const getSkills = async (): Promise<Skill[]> => {
  const query = gql`
    query Skills {
      skills {
        id
        skills
        image {
          url
        }
      }
    }
  `;

  try {
    const { skills }: { skills: Skill[] } = await request(master, query);
    return skills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
};
