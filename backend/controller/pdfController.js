const pdf = require("html-pdf");
const path = require("path");
const nodemailer = require("nodemailer");
const fs = require("fs");
const pdfTemplate = require("../document/document");
const env = require("dotenv");
const userDetailsModel = require("../models/userModel");
const mongoose = require("mongoose");
env.config();

/****** Generate PDF with file system permission
exports.createPdf = (req, res) => {
  //console.log("create pdf request received", req.body);
  const pdfFolder = path.join(__dirname, "../pdfs"); // Path to the "pdfs" folder inside your project directory
  const pdfFilePath = path.join(pdfFolder, "Summary-Report.pdf");
  pdf.create(pdfTemplate(req.body), {}).toFile(pdfFilePath, (err) => {
    if (err) {
      console.log("Error generating PDF:", err);
      if (err.code === "EPERM" || err.code === "EACCES") {
        // Handle file system permission issues
        console.error(
          "File system permission issue. Check file system permissions."
        );
        return res.status(500).send("File system permission issue");
      }
      return res.status(500).send("Error generating PDF");
    }
    res.send("pdf generated");
  });
};

exports.fetchPdf = (req, res) => {
  res.sendFile(path.join(__dirname, "../pdfs/Summary-Report.pdf"));
};

exports.sendPdf = (req, res) => {
  console.log("send mail req received");
  pathToAttachment = path.join(__dirname, "../pdfs/Summary-Report.pdf");
  attachment = fs.readFileSync(pathToAttachment).toString("base64");

  let smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "Gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });

  smtpTransport.sendMail(
    {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: "Summary Report of Admission Marks Calculation",
      html: `
        The pdf version of report is attached with this email, Thanks.`,
      attachments: [
        {
          content: attachment,
          filename: "Summary-Report.pdf",
          contentType: "application/pdf",
          path: pathToAttachment,
        },
      ],
    },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        res.send("Mail has been sended to your email. Check your mail");
      }
    }
  );
};
*/

exports.verifyPDF = async (req, res) => {
  try {
    const user = await userDetailsModel.findOne({ hash: req.params.id });

    if (!user) {
      return res.status(404).json({ message: "Document not found" });
    }

    const documentInfo = {
      userName: user.username,
      email: user.email,
      error: null,
    };

    res.status(200).json(documentInfo);
  } catch (error) {
    console.error("Error finding document:", error);
    res.status(500).json({ message: "Error finding document" });
  }
};

exports.createPdf = (req, res) => {
  const pdfBuffer = pdf
    .create(pdfTemplate(req.body), {})
    .toBuffer((err, buffer) => {
      if (err) {
        console.log("Error generating PDF:", err);
        return res.status(500).send("Error generating PDF");
      }

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=Summary-Report.pdf"
      );
      res.send(buffer);
    });
};

exports.fetchPdf = (req, res) => {
  const pdfPath = path.join(__dirname, "../pdfs/Summary-Report.pdf");
  const pdfBuffer = fs.readFileSync(pdfPath);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Summary-Report.pdf"
  );
  res.send(pdfBuffer);
};

exports.sendPdf = (req, res) => {
  console.log("send mail req received");
  const pdfBuffer = pdf
    .create(pdfTemplate(req.body), {})
    .toBuffer((err, buffer) => {
      if (err) {
        console.log("Error generating PDF:", err);
        return res.status(500).send("Error generating PDF");
      }

      let smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "Gmail",
        port: 465,
        secure: true,
        auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD,
        },
        tls: { rejectUnauthorized: false },
      });

      smtpTransport.sendMail(
        {
          from: process.env.EMAIL,
          to: req.body.email,
          subject: "Summary Report of Admission Marks Calculation",
          html: `
          The pdf version of the report is attached with this email, Thanks.`,
          attachments: [
            {
              filename: "Summary-Report.pdf",
              contentType: "application/pdf",
              content: buffer,
            },
          ],
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            res.send("Mail has been sent to your email. Check your mail");
          }
        }
      );
    });
};
