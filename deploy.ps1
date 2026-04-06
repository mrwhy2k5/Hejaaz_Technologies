# 1. Build the project
npm run build

# 2. Sync files to S3 (Hejaaz Technologies)
# Change 'hejaaztechnologies.com' if your bucket name is different
aws s3 sync dist/ s3://hejaaztechnologies.com --delete
aws s3 sync dist/ s3://www.hejaaztechnologies.com --delete

# 3. Invalidate CloudFront (Update these with your ACTUAL Distribution IDs)
# You can find these IDs in the CloudFront Console
# Example: aws cloudfront create-invalidation --distribution-id E1A2B3C4D5E6F7 --paths "/*"

Write-Host "DEKPLOYMENT COMPLETE! 🚀" -ForegroundColor Green
