const ProjectStore = require("../models/project");

const projectManager = {
  createProject: async ({
    Title,
    Description,
    GithubURL,
    WebsiteURL,
    Thumbnail,
  }) => {
    const newProject = { Title, Description, GithubURL, WebsiteURL, Thumbnail };
    await ProjectStore.create(newProject);
    return newProject;
  },
  getProjectById: async (projectId) => {
    try {
      const project = await ProjectStore.findByPk(projectId);

      if (!project) {
        throw new Error(`Could not find a project with id ${projectId}!`);
      }
      return project;
    } catch (error) {
      console.log(errer);
    }
  },
  getAllProjects: async () => {
    const allProjects = await ProjectStore.findAll();
    return allProjects;
  },
};

module.exports = projectManager;
