module.exports = {
  extends: 'plugin:ava/recommended',
  rules: {
    // Allow t.context reassignment.
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: ['t'],
    }],
    // We use chai: expect(this).to.be.ok
    'no-unused-expressions': 'off',
  },
};
