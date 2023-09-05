import 'server-only';

import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const response = await fetch(`https://packagist.org/search.json?q=${name}`);
  const json = await response.json();
  const existsUrl = json.results
    .filter((item) => item.name.split('/')[1] === name)
    .sort((a, b) => a.downloads < b.downloads)
    .pop()?.url;
  return NextResponse.json({
    exists: existsUrl !== undefined,
    existsUrl: existsUrl,
  });
}
