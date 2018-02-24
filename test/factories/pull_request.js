import factory from 'factory-girl';

factory.define('pull_request', Object, (buildOptions = {}) => {
  // Default PR attributes
  const attrs = {
    data: { 
      url: 'https://api.github.com/repos/ftuyama/magic-wand/pulls/1',
      id: 169873025,
      html_url: 'https://github.com/ftuyama/magic-wand/pull/1',
      diff_url: 'https://github.com/ftuyama/magic-wand/pull/1.diff',
      patch_url: 'https://github.com/ftuyama/magic-wand/pull/1.patch',
      issue_url: 'https://api.github.com/repos/ftuyama/magic-wand/issues/1',
      number: factory.sequence('', (n) => n),
      state: 'open',
      locked: false,
      title: factory.sequence('', (n) => `PR #${n}`),
      user: { 
        login: 'ftuyama',
        id: 11530478,
        avatar_url: 'https://avatars0.githubusercontent.com/u/11530478?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/ftuyama',
        html_url: 'https://github.com/ftuyama',
        followers_url: 'https://api.github.com/users/ftuyama/followers',
        following_url: 'https://api.github.com/users/ftuyama/following{/other_user}',
        gists_url: 'https://api.github.com/users/ftuyama/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/ftuyama/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/ftuyama/subscriptions',
        organizations_url: 'https://api.github.com/users/ftuyama/orgs',
        repos_url: 'https://api.github.com/users/ftuyama/repos',
        events_url: 'https://api.github.com/users/ftuyama/events{/privacy}',
        received_events_url: 'https://api.github.com/users/ftuyama/received_events',
        type: 'User',
        site_admin: false 
      },
      body: '',
      created_at: '2018-02-19T03:39:02Z',
      updated_at: '2018-02-20T14:28:56Z',
      closed_at: null,
      merged_at: null,
      merge_commit_sha: '15be827e69e8df7e995d47755dca65687e5e568f',
      assignee: null,
      assignees: [],
      requested_reviewers: [],
      requested_teams: [],
      labels: [],
      milestone: null,
      commits_url: 'https://api.github.com/repos/ftuyama/magic-wand/pulls/1/commits',
      review_comments_url: 'https://api.github.com/repos/ftuyama/magic-wand/pulls/1/comments',
      review_comment_url: 'https://api.github.com/repos/ftuyama/magic-wand/pulls/comments{/number}',
      comments_url: 'https://api.github.com/repos/ftuyama/magic-wand/issues/1/comments',
      statuses_url: 'https://api.github.com/repos/ftuyama/magic-wand/statuses/32d742023aec9f1a3d8b5c960497f85068752883',
      head: { 
        label: 'ftuyama:branch',
        ref: 'github',
        sha: '32d742023aec9f1a3d8b5c960497f85068752883',
        user: [Object],
        repo: [Object] 
      },
      base: { 
        label: 'ftuyama:master',
        ref: 'master',
        sha: '9c240eb5ae8fa641fb9cdd5a9aedd2cd8a18ec54',
        user: [Object],
        repo: [Object] 
      },
      author_association: 'OWNER',
      merged: false,
      mergeable: true,
      rebaseable: false,
      mergeable_state: 'clean',
      merged_by: null,
      comments: 0,
      review_comments: 0,
      maintainer_can_modify: false,
      commits: 17,
      additions: 4878,
      deletions: 55,
      changed_files: 14 
    },
    meta: { 
      'x-ratelimit-limit': '5000',
      'x-ratelimit-remaining': '4976',
      'x-ratelimit-reset': '1519139847',
      'x-oauth-scopes': 'admin:gpg_key, admin:org, admin:org_hook, admin:public_key, admin:repo_hook, delete_repo, gist, notifications, repo, user, write:discussion',
      'x-github-request-id': '9690:36E7:1ACD609:3A7A250:5A8C31BC',
      'x-github-media-type': 'github.v3; format=json',
      'last-modified': 'Tue, 20 Feb 2018 14:28:56 GMT',
      etag: '"44ebf2cb442ab6287d46811314fa7439"',
      status: '200 OK' 
    } 
  }

  // Custom PR attributes
  if (buildOptions.requested_reviewers)
    attrs.data.requested_reviewers = [buildOptions.requested_reviewers];

  if (buildOptions.head_label)
    attrs.data.head.label = attrs.data.user.login + ":" + buildOptions.head_label;

  if (buildOptions.base_label)
    attrs.data.base.label = attrs.data.user.login + ":" + buildOptions.base_label;

  if (buildOptions.title)
    attrs.data.title = buildOptions.title;

  return attrs;
 });
