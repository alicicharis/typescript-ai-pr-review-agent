class GithubService {
  private readonly headers: HeadersInit = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  private async get(path: string) {
    const response = await fetch(`https://api.github.com${path}`, {
      headers: this.headers,
    });

    return response.json();
  }

  private async post(path: string, body: any) {
    const response = await fetch(`https://api.github.com${path}`, {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify(body),
    });

    return response.json();
  }

  public async getPullRequest(owner: string, repo: string, pullNumber: number) {
    return this.get(`/repos/${owner}/${repo}/pulls/${pullNumber}`);
  }

  public async getPullRequestFiles(
    owner: string,
    repo: string,
    pullNumber: number
  ) {
    return this.get(`/repos/${owner}/${repo}/pulls/${pullNumber}/files`);
  }

  public async getPullRequestDiff(
    owner: string,
    repo: string,
    pullNumber: number
  ) {
    return this.get(`/repos/${owner}/${repo}/pulls/${pullNumber}/diff`);
  }

  public async createIssueComment(
    owner: string,
    repo: string,
    pullNumber: number,
    comment: string
  ) {
    return this.post(`/repos/${owner}/${repo}/issues/${pullNumber}/comments`, {
      body: comment,
    });
  }
}

export default GithubService;
