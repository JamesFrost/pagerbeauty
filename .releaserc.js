// Semantic release config object
const releaseRules = [
  { breaking: true, release: 'major' },
  { tag: 'CLEANUP', release: 'patch' },
  { tag: 'BUGFIX', release: 'patch' },
  { tag: 'FEATURE', release: 'minor' },
  { tag: 'SECURITY', release: 'patch' },
];

const parserOpts = {
  headerPattern: '\\[(.*) (.*)] ?(.*)',
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
};

const assets = [
  'CHANGELOG.md',
  'assets/dist-prod/**/*.{js,css}',
  'package.json',
];

const config = {
  branch: 'production',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'ember',
        parserOpts,
        releaseRules,
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'ember',
        parserOpts,
        releaseRules,
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogTitle: '# PagerBeauty Changelog',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets,,
        message: '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};

module.exports = config;
