const puppeteer = require("puppeteer");

// exports.generatePDF = async (req, res) => {
//   const browser = await puppeteer.launch({ headless: { value: true } });
//   const page = await browser.newPage();
//   await page.goto("https://www.npmjs.com/package/puppeteer-core");
//   await page.pdf({
//     path: "../pdfs/test-generated.pdf",
//     format: "A4",
//     margin: {
//       top: "100px",
//       Bottom: "100px",
//     },
//     displayHeaderFooter: true,
//   });
//   res.status(200).send("PDF generated successfully!");
// };

exports.generatePDF = async (req, res) => {
  try {
    //console.log("req to generate pdf");
    const browser = await puppeteer.launch({
      headless: { value: true },
      userDataDir: "/tmp/puppeteerCache",
    });
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/pdf-report");
    const pdfBuffer = await page.pdf({
      format: "A4",
      margin: {
        top: "100px",
        bottom: "100px",
      },
      displayHeaderFooter: true,
    });
    await browser.close();

    res.setHeader(
      "Content-Disposition",
      'attachment; filename="test-generated.pdf"'
    );
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  }
};
