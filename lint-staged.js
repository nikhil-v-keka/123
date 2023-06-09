const { execSync } = require('child_process');

let stagedFiles = execSync('git diff --cached --name-only --diff-filter=ACM')
  .toString()
  .split('\n')
  .filter(Boolean);
console.log(stagedFiles)
if (stagedFiles.length > 0) {
  const eslintCmd = `eslint  --fix -- ${stagedFiles.join(' ')}`;
  const prettierCmd = `prettier --write -- ${stagedFiles.join(' ')}`;

  execSync(eslintCmd, { stdio: 'inherit' });
  execSync(prettierCmd, { stdio: 'inherit' });
}
