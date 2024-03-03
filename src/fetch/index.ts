export async function getIssuesData(page: number) {
  const ITEM_PER_PAGE = 3;
  const apiUrl = `https://api.github.com/repos/iris-yu17/gh-blog/issues?page=${page}&per_page=${ITEM_PER_PAGE}`;

  try {
    // TODO: test error case
    const res = await fetch(apiUrl);

    return res.json();
  } catch (e) {
    console.log(`Error fetching data: ${e}`);
    return null;
  }
}

export async function getComments(issueNumber: string) {
  const apiUrl = `https://api.github.com/repos/iris-yu17/gh-blog/issues/${issueNumber}/comments`;

  try {
    // TODO: test error case
    const res = await fetch(apiUrl, {
      headers: {
        "Authorization": process.env.CLIENT_SECRET
      } as HeadersInit
    });

    return res.json();
  } catch (e) {
    console.log(`Error fetching data: ${e}`);
    return null;
  }
}

export async function getTotalOpenIssuesCount() {
  const apiUrl = 'https://api.github.com/search/issues?q=repo:iris-yu17/gh-blog+type:issue+state:open';

  try {
    // TODO: test error case
    const res = await fetch(apiUrl);
    const data = await res.json();

    return data.total_count;
  } catch (e) {
    console.log(`Error fetching data: ${e}`);
    return null;
  }
}

export async function getSingleIssue(issueNumber: number) {
  const apiUrl = `https://api.github.com/repos/${process.env.GITHUB_ACCOUNT}/${process.env.GITHUB_REPO_NAME}/issues/${issueNumber}`;

  try {
    // TODO: test error case
    const res = await fetch(apiUrl, {
      headers: {
        "Authorization": process.env.CLIENT_SECRET
      } as HeadersInit
    });

    return res.json();
  } catch (e) {
    console.log(`Error fetching data: ${e}`);
    return null;
  }
}

export async function getBeersData(page: number) {
  const ITEM_PER_PAGE = 5;
  const apiUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${ITEM_PER_PAGE}`;

  try {
    // TODO: test error case
    const res = await fetch(
      apiUrl,
    );

    return res.json();
  } catch (e) {
    console.log(`Error fetching data: ${e}`);
    return null;
  }
}
