const bcrypt = require("bcryptjs");
const userStore = require("../models/user");
const userSkillStore = require("../models/user-skill");
const userLanguageStore = require("../models/user-language");
const userTypeStore = require("../models/user-type");
const userProjectStore = require("../models/user-project");
const projectsStore = require("../models/project");

const saltRounds = 13;

const userManager = {
  createUser: async ({ FirstName, LastName, Email, Password }) => {
    const newUser = { FirstName, LastName, Email, Password };
    newUser.Password = await bcrypt.hash(
      newUser.Password + newUser.Email,
      saltRounds
    );
    await userStore.create(newUser);
    return newUser;
  },
  createUserSkill: async ({
    UserID,
    SkillID,
    Level,
    SelectedSkill: SelectedSkill,
  }) => {
    const createdUserSkill = await userSkillStore.create({
      UserID: UserID,
      SkillID: SkillID,
      Level: Level,
      SelectedSkill: SelectedSkill,
    });
    return createdUserSkill;
  },
  createUserLanguage: async ({ UserID, LanguageID, Level }) => {
    const createdUserLanguage = await userLanguageStore.create({
      UserID: UserID,
      LanguageID: LanguageID,
      Level: Level,
    });
    return createdUserLanguage;
  },
  createUserType: async ({ UserID, TypeID }) => {
    const createdNewUserType = await userTypeStore.create({
      UserID: UserID,
      TypeID: TypeID,
    });
    return createdNewUserType;
  },
  updateUserProfile: async ({
    UserID,
    Nationality,
    Bio,
    GithubURL,
    LinkedinURL,
    WebsiteURL,
    Class,
    JobTitle,
    Region,
  }) => {
    const userById = await userStore.findOne({ where: { UserID: UserID } });
    const updatedProfile = await userById.update({
      NationalityID: Nationality,
      Bio,
      GithubURL,
      LinkedinURL,
      WebsiteURL,
      ClassID: Class,
      JobTitle,
      RegionID: Region,
    });
    return updatedProfile;
  },
  updateUserPicture: async (userId, ProfilePicture) => {
    const userById = await userStore.findOne({ where: { UserID: userId } });
    const updatedUser = await userById.update({
      ProfilePicture,
    });
    return updatedUser;
  },
  updateUserSkills: async (userId, skills) => {
    await userSkillStore.destroy({
      where: { UserID: userId },
    });
    console.log("The nice iterable list of skills: ", skills);
    for (let skill of skills) {
      console.log(skill);
      console.log("Business-Logic - Writing Skill:", skill);
      await userSkillStore.create({
        UserID: userId,
        SkillID: skill.value,
      });
    }
    return true;
  },
  updateUserLanguages: async (userId, languages) => {
    console.log("Business-Logic - User ID", userId);
    console.log("Business-Logic - Languages", languages);
    await userLanguageStore.destroy({
      where: { UserID: userId },
    });
    for (let language of languages) {
      await userLanguageStore.create({
        UserID: userId,
        LanguageID: language.value,
      });
    }
    return true;
  },
  updateUserTypes: async (userId, types) => {
    await userTypeStore.destroy({
      where: { UserID: userId },
    });
    for (let type of types) {
      console.log("Business-Logic - Writing Type:", type);
      await userTypeStore.create({
        UserID: userId,
        TypeID: type.value,
      });
    }
    return true;
  },
  getAllUsers: async () => {
    const allUsers = await userStore.findAll();
    return allUsers;
  },
  getAllUserSkills: async (userId) => {
    const allUserSkills = await userSkillStore.findAll({
      where: { UserID: userId },
    });
    return allUserSkills;
  },
  getAllUserLanguages: async (userId) => {
    const allUserLanguages = await userLanguageStore.findAll({
      where: { UserID: userId },
    });
    return allUserLanguages;
  },
  getAllUserTypes: async (userId) => {
    const allUserTypes = await userTypeStore.findAll({
      where: { UserID: userId },
    });
    return allUserTypes;
  },
  getUserById: async (userId) => {
    const userById = await userStore.findOne({ where: { UserID: userId } });
    return userById;
  },
  getAllUserProjects: async (userId) => {
    const allUserProjects = await userProjectStore.findAll({
      where: { UserID: userId },
    });
    const result = [];
    for (let userProject of allUserProjects) {
      const project = await projectsStore.findOne({
        where: { ProjectID: userProject.ProjectID },
      });
      result.push(project);
    }
    return result;
  },

  deleteUserProfile: async ({ UserID }) => {
    await userStore.destroy({
      where: { UserID: UserID },
    });
    return true;
  },
  deleteUserSkill: async ({ UserID, SkillID }) => {
    await userSkillStore.destroy({
      where: { UserID: UserID, SkillID: SkillID },
    });
    return true;
  },
  deleteUserLanguage: async ({ UserID, LanguageID }) => {
    await userLanguageStore.destroy({
      where: { UserID: UserID, LanguageID: LanguageID },
    });
    return true;
  },
  deleteUserType: async ({ UserID, TypeID }) => {
    await userTypeStore.destroy({
      where: { UserID: UserID, TypeID: TypeID },
    });
    return true;
  },
};
module.exports = userManager;
