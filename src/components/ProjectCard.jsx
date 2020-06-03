/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Card, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-scroll";

const ProjectCard = ({ data }) => {
  const { stacks, demoVideo, visit, visitLink, gitHubLink, agile } = data;
  const [open, setOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const show = () => setOpen(true);
  const close = () => setOpen(false);
  const openDemo = () => setDemoOpen(true);
  const closeDemo = () => setDemoOpen(false);

  const extra = (
    <div>
      <div className="extraLinks">
        <a onClick={show}>Stacks</a>
        {data.demo ? <a onClick={openDemo}>Demo</a> : ""}
        {visit === true ? (
          <a href={visitLink} target="_blank">
            Visit
          </a>
        ) : visit === "here" ? (
          <Link to="name" spy={true} smooth={true} offset={-90} duration={1000}>
            Visit
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className={agile ? "extraIconsOne" : "extraIconsTwo"}>
        <a href={gitHubLink} target="_blank">
          <Icon name="github" />
          GitHub
        </a>
        {agile ? (
          <a>
            <Icon name="pin" />
            Pivotal Tracker
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
  return (
    <div className="ProjectsCard">
      <Card
        image={data.projectImage}
        header={data.name}
        meta={data.type}
        description={data.description}
        extra={extra}
      />
      <Modal size="tiny" open={open} onClose={close}>
        <Modal.Header>Project's Stack</Modal.Header>
        <Modal.Content>
          {stacks.map((element) => {
            const { stack, data } = element;
            return (
              <div className="stackCard">
                <span>{stack}</span>
                <div className="stacks">
                  {data.map((item) => (
                    <button className="stackButton">
                      <img src={item.image} />
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </Modal.Content>
      </Modal>
      <Modal open={demoOpen} onClose={closeDemo}>
        <Modal.Content className="demoModal">
          <Modal.Description className="demoDescription">
            <video width="100%" height="100%" controls>
              <source src={demoVideo} />
            </video>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export { ProjectCard };
