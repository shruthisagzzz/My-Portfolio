import { useEffect, useState } from "react";

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface UseGitHubContributionsResult {
  days: ContributionDay[];
  total: number;
  loading: boolean;
  error: string | null;
}

/**
 * Fetches a year of GitHub contribution data from a free, public, no-auth
 * proxy (github-contributions-api.jogruber.de). GitHub's own GraphQL API
 * requires a personal access token, which can't be safely embedded in a
 * client-side bundle — this proxy avoids that problem entirely.
 */
export function useGitHubContributions(username: string): UseGitHubContributionsResult {
  const [days, setDays] = useState<ContributionDay[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub calendar request failed (${res.status})`);
        return res.json();
      })
      .then((data: { total?: Record<string, number>; contributions?: ContributionDay[] }) => {
        if (cancelled) return;
        setDays(data.contributions ?? []);
        const totalValues = Object.values(data.total ?? {});
        setTotal(totalValues.length ? totalValues[totalValues.length - 1] : 0);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message || "Failed to load GitHub activity");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  return { days, total, loading, error };
}
