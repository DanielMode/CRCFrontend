# HTML Resume with Visitor Counter

## Project Overview
This repository contains the frontend code for a cloud-hosted HTML resume with a visitor counter. The resume is served through AWS services and includes a counter to track visits to the page.

## Project Structure
- `index.html`: Main HTML structure for the resume + javascript for fetching and updating the visitor count from the backend API .
- `style.css`: CSS for styling the resume.

## Usage
This frontend connects to a backend API (provided in a separate repository) to update and display the visitor count.

## Deployment Instructions
1. **Setup**:
   - Clone this repository:
     ```bash
     git clone https://github.com/DanielMode/CRCFrontend.git
     cd CRCFrontend
     ```

2. **Upload to S3**:
   - Use AWS CLI or S3 Console to upload your website files. The bucket should be set up in the [Backend Infrastructure](https://github.com/DanielMode/CRCBackend).

3. **Automate with GitHub Actions**:
   - This repository uses GitHub Actions to automate deployments to AWS S3. Whenever changes are pushed to the main branch:
   - Files are automatically synchronized to the S3 bucket.
   - The website content is updated in real-time for immediate access by creating cloudfront invalidations.

See `.github/workflows/ci-cd.yml` for the complete workflow configuration.


## Related Repositories
- [Backend Repository](https://github.com/DanielMode/CRCBackend): Infrastructure and API to support the resume and visitor counter.

---

