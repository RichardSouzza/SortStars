import "dotenv/config";
import { Octokit } from "@octokit/core";
import {
  getStaredRepositories, sortRepositoriesBy, starRepository, unstarRepository
} from "./src/api/api.js"
import { delay, log } from "./src/utils/utils.js";

const USER_TOKEN = process.env.USER_TOKEN;

const octokit = new Octokit({
  auth: USER_TOKEN
})

const staredRepositories = await getStaredRepositories(octokit);

const sortedRepositories = await sortRepositoriesBy(staredRepositories, "name");

let count = 1;
staredRepositories.forEach(repository => {
  log(`${count++} | ${repository.owner.login} / ${repository.name}\n`);
});

count = 1;
for (const repository of sortedRepositories) {
  console.log(count++, repository.name, repository.owner.login)
  await unstarRepository(octokit, repository.owner.login, repository.name);
  await starRepository(octokit, repository.owner.login, repository.name);
  await delay(3000);
}
