export async function getIssuesData(page: number) {
  const ITEM_PER_PAGE = 3;
  const apiUrl = `https://api.github.com/repos/iris-yu17/gh-blog/issues?page=${page}&per_page=${ITEM_PER_PAGE}`;

  try {
    const res = await fetch(apiUrl);

    return res.json();
  } catch (e) {
    console.log(`Error fetching data: ${e}`);
    return null;
  }
}

export async function getComments(issueNumber: number) {
  const apiUrl = `https://api.github.com/repos/iris-yu17/gh-blog/issues/${issueNumber}/comments`;

  try {
    const res = await fetch(apiUrl, {
      headers: {
        "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
        // "Authorization": process.env.GITHUB_CLIENT_SECRET
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
    const res = await fetch(apiUrl, {
      headers: {
        "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
        // "Authorization": process.env.GITHUB_CLIENT_SECRET
      } as HeadersInit
    });

    return res.json();
  } catch (e) {
    console.log(`Error fetching data: ${e}`);
    return null;
  }
}

export async function createIssue(token: string, body: string) {
  const apiUrl = `https://api.github.com/repos/iris-yu17/gh-blog/issues`;

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${token}`
      },
      body: body
    });

    return res.json();
  } catch (e) {
    console.log(`Fail creating issue: ${e}`);
    return null;
  }
}

export async function closeIssue(token: string, issueNumber: number) {
  const apiUrl = `https://api.github.com/repos/iris-yu17/gh-blog/issues/${issueNumber}`;

  try {
    const res = await fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        state: 'closed'
      })
    });

    return res.json();
  } catch (e) {
    console.log(`Fail creating issue: ${e}`);
    return null;
  }
}

export async function updateIssue(token: string, issueNumber: number, body: string) {
  const apiUrl = `https://api.github.com/repos/iris-yu17/gh-blog/issues/${issueNumber}`;

  try {
    const res = await fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${token}`
      },
      body: body
    });

    return res.json();
  } catch (e) {
    console.log(`Fail creating issue: ${e}`);
    return null;
  }
}
