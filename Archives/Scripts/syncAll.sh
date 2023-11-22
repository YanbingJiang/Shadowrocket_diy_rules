ls | xargs -I{} git -C {} pull
rsync -av --exclude='**/README.md' --exclude='**/.git' src dst
