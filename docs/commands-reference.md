# ⌨️ Commands Reference

| Command | Purpose | Expected effect |
|---|---|---|
| npm ci | Install locked dependencies | Recreates node_modules from package-lock.json |
| npm run dev | Start Vite development server | Serves app locally with HMR |
| npm run lint | Run ESLint | Exits non-zero on configured lint errors |
| npm test | Run Node.js test suite | Executes tests under tests/ |
| npm run test:watch | Watch test files | Re-runs tests on changes |
| npm run build | Create production bundle | Writes dist/ |
| npm run preview | Preview production bundle | Serves dist locally |
| npm audit | Review dependency advisories | Prints current npm advisory report |
| npm audit --audit-level=high | Fail on high or critical findings | Currently expected to fail on the tracked picomatch advisory until patched |

## Git workflow examples

```bash
git status
git switch -c docs/update-handbook
git diff --check
git diff --stat
```

## Notes

Run commands from the repository root. Use the Node/npm versions listed in the support matrix. A successful local build does not imply the app is deployed.
