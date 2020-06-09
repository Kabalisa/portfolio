import React, { useState } from "react";
import { Link } from "react-scroll";
import { Document, Page, pdfjs } from "react-pdf/dist/entry.webpack";
import { Button, Icon, Modal } from "semantic-ui-react";
import { BUtton } from "./button";
import "react-pdf/dist/Page/AnnotationLayer.css";
import Resume from "../assets/Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Welcome = ({ id }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => changePage(-1);

  const nextPage = () => changePage(1);

  const handleOpen = () => setModalOpen(true);

  const handleClose = () => setModalOpen(false);

  return (
    <div className="Welcome" id={id}>
      <div className="MenuBody">
        <p className="title">Full-stack Software Engineer</p>
        <p className="titleDescription">
          I am a frontend, backend and mobile developer.
        </p>
        <div className="buttonContainer">
          <Link
            to="projects"
            smooth={true}
            spy={true}
            offset={-88}
            duration={1000}
          >
            <BUtton value="See Projects" iconName="code" animation="vertical" />
          </Link>
          <BUtton
            value="View Resume"
            openModal={handleOpen}
            iconName="envelope open"
            animation="true"
          />
        </div>
      </div>
      <Modal open={modalOpen} onClose={handleClose}>
        <Modal.Header>Resume</Modal.Header>
        <Modal.Content image scrolling>
          <Modal.Description>
            <Document file={Resume} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {numPages > 1 ? (
            <div className="moveButtons">
              <button
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
              >
                <Icon name="chevron circle left" />
              </button>
              <button
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              >
                <Icon name="chevron circle right" />
              </button>
            </div>
          ) : (
            ""
          )}
          <p>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <Button onClick={handleClose} className="closeButton" animated="fade">
            <Button.Content visible>Close</Button.Content>
            <Button.Content hidden className="hiddenButton">
              <Icon name="window close" />
            </Button.Content>
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export { Welcome };
