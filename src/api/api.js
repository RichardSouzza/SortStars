export async function getStaredRepositories(octokit) {
  let staredRepositories = [];
  let page = 1;
  let pagesRemaining = true;

  while (pagesRemaining) {
    const response = await octokit.request("GET /user/starred", {
      direction: "asc",
      per_page: 100,
      page: page,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      }
    })
    
    if (response.data.length == 0) {
      break
    }
    
    staredRepositories.push(...response.data)
    page += 1;
  }

  return staredRepositories;
}


export async function sortRepositoriesBy(repository, key, reverse = false) {
  const collator = new Intl.Collator("en", { sensitivity: "base" });
  const sortedRepositories = repository.sort((a, b) => collator.compare(a[key], b[key]));
  if (reverse) {
    sortedRepositories.reverse();
  }
  return sortedRepositories;
}


export async function starRepository(octokit, owner, repo) {
  const response = await octokit.request("PUT /user/starred/{owner}/{repo}", {
    owner: owner,
    repo: repo,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28"
    }
  })
  return response;
}


export async function unstarRepository(octokit, owner, repo) {
  const response = await octokit.request("DELETE /user/starred/{owner}/{repo}", {
    owner: owner,
    repo: repo,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28"
    }
  })
  return response;
}
