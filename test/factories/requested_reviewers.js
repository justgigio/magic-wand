import factory from 'factory-girl';

factory.define('requested_reviewers', Object,
  { 
    login: 'someone',
    id: 11546507,
    avatar_url: 'https://avatars3.githubusercontent.com/u/11546507?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/someone',
    html_url: 'https://github.com/someone',
    followers_url: 'https://api.github.com/users/someone/followers',
    following_url: 'https://api.github.com/users/someone/following{/other_user}',
    gists_url: 'https://api.github.com/users/someone/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/someone/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/someone/subscriptions',
    organizations_url: 'https://api.github.com/users/someone/orgs',
    repos_url: 'https://api.github.com/users/someone/repos',
    events_url: 'https://api.github.com/users/someone/events{/privacy}',
    received_events_url: 'https://api.github.com/users/someone/received_events',
    type: 'User',
    site_admin: false 
  }
);
