import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import myResume from "../../documents/austin-mcintyre-resume.pdf";

export default function Resume() {
  //   const [pdfFile, setPDFFile] = useState(null);
  //   const [viewPdf, setViewPdf] = useState(null);

  //   const fileType = ["application/pdf"];

  //   const handleChange = (e) => {
  //     let selectedFile = e.target.files[0];
  //     if (selectedFile) {
  //       if (selectedFile && fileType.includes(selectedFile.type)) {
  //         let reader = new FileReader();
  //         reader.readAsDataURL(selectedFile);
  //         reader.onload = (e) => {
  //           setPDFFile(e.target.result);
  //           console.log("PDF Loaded");
  //         };
  //       } else {
  //         setPDFFile(null);
  //       }
  //     } else {
  //       console.log("Please select a PDF file.");
  //     }
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (pdfFile !== null) {
  //       setViewPdf(pdfFile);
  //     } else {
  //       setViewPdf(null);
  //     }
  //   };

  return (
    <div className="container">
      <object
        data={myResume}
        type="application/pdf"
        width="100%"
        height="1000vh"
      ></object>
    </div>
  );
}
