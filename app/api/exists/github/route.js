import 'server-only';
import { Octokit, App } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const response = await octokit.request(
    `GET /search/repositories?q=${name}&type=repositories`,
    {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
  );

  const repositories = response.data.items
    .filter(
      (item) =>
        item.name.toLowerCase() === name.toLowerCase() &&
        item.stargazers_count > 10,
    )
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  const existsUrl = repositories[0]?.html_url;

  return NextResponse.json({
    exists: existsUrl !== undefined,
    existsUrl: existsUrl,
  });
}
