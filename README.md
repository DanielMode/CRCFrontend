# HTML Resume with Visitor Counter

## Project Overview
This repository contains the frontend code for a cloud-hosted HTML resume with a visitor counter. The resume is served through AWS services and includes a counter to track visits to the page.

## Project Structure
- `index.html`: Main HTML structure for the resume.
- `style.css`: CSS for styling the resume.
- `visitor.js`: JavaScript file for fetching and updating the visitor count from the backend API.

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
   - Configure GitHub Actions to deploy the frontend files to S3 automatically when changes are pushed to the main branch.

## Related Repositories
- [Backend Repository](https://github.com/DanielMode/CRCBackend): Infrastructure and API to support the resume and visitor counter.

---

