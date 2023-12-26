import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Bayu-Maulana-Ikhsan.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Programmer [PT. Time Excelindo]"
              date="August 2021 - Present"
              content={[
                "Contribute to the management of the PT. Time Excelindo website",
              ]}
            />
            <Resumecontent
              title="Backend Developer Intern [PT. Zeniora Education]"
              date="July 2021 - September 2021"
              content={[
                "Contribute to the management of the Zeniora website.",
                "Participate in the process of making rest api.",
              ]}
            />
            <h3 className="resume-title">Organizations</h3>
            <Resumecontent
              title="Vice Chairman [Himpunan Mahasiswa SistemInformasi dan Manajemen Informatika]"
              date="January 2021 - Present"
              content={[
                "Contribute to organization management.",
                "Participate in the committee recruitment process.",
                "Responsible for making activity reports.",
              ]}
            />
            <Resumecontent
              title="Head of Internal Department [Himpunan Mahasiswa SistemInformasi dan Manajemen Informatika]"
              date="August 2019 - December 2020"
              content={[
                "Ensure harmonious relations between members.",
                "Organize and ensure daily management activities.",
                "Contribute in the preparation of organizational activities.",
                "Ensure that every member contributes to activities.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Information System [Universitas AMIKOM Yogyakarta]"
              date="2018 - Present"
              content={[`CGPA: 3,7 (Till 7 th Sem)`]}
            />

            <h3 className="resume-title">Skills</h3>
            <Resumecontent
              title=""
              content={[
                "Have good time management",
                "Can manage the MySQL database",
                "Able to use the basic php and javascript",
                "Able to implement coding with LaravelFramework",
                "Can work in teams and individuals",
                "Able to use Git.",
              ]}
            />

            {/* <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
