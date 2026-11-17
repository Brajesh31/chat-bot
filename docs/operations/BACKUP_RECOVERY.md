# 💾 Backup and Recovery

There is no server database or persisted transcript. Git stores source; static artifacts can be rebuilt from a commit and npm lockfile.

Recovery: select known-good commit, clean checkout, `npm ci`, lint/tests/build, deploy static artifact, verify main chat flow and assets.

If persistence is introduced, require tested backups, restore drills, retention, encryption, access control, and deletion.
