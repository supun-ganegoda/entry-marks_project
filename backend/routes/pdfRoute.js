const express = require("express");

const {
  createPdf,
  fetchPdf,
  sendPdf,
  verifyPDF,
} = require("../controller/pdfController");

const { generatePDF } = require("../controller/puppteerController");

const pdfRoute = express.Router();

pdfRoute.get("/verifyPDF/:id", verifyPDF); //to verify the pdf

pdfRoute.post("/createPdf", createPdf); // to generate pdf

pdfRoute.get("/generatePDF", generatePDF); // generate PDF using the puppeteer

pdfRoute.get("/fetchPdf", fetchPdf); // to fetch the generated pdf

pdfRoute.post("/sendPdf", sendPdf); //sent pdf to mail

module.exports = pdfRoute;
