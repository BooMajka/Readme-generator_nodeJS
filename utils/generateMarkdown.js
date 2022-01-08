// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = data => {

if (data.confirmAddLicense === false) {
return "";
}
return `
${data.languages
	.map(el => {
		return `![${el}](https://img.shields.io/badge/${el}-%2300599C.svg?style=for-the-badge)`;
	})}
`
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = data => {

if (data.confirmAddLicense === false) {
  return "";
}
return `
# Copyright (c) [${new Date().getFullYear()}] [${data.username}]
`;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = data => {
if (!data.confirmAddLicense) {
  return "";
}

return `
${renderLicenseLink(data)}\n
${renderLicenseBadge(data)}\n

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE`;

}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {

  return `## ${data.title}

  # Description
  ${data.description}

  # Technologies
  ${data.languages.map(el => el)}

  # Installation
  ${data.installation}

  # Contribution
  ${data.contribution}

  # Tests
  ${data.test}

   # Questions?
   Send me an email if you have any questions: ${data.email}

   ${renderLicenseSection(data)}
`;
}

module.exports = { generateMarkdown } ;
