/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Card, Icon, Button, Modal } from "semantic-ui-react";
import Vid from "../assets/videos/AuthorHavenVid.mov";

const ProjectCard = ({ data }) => {
  const { stacks, demoVideo } = data;
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
        <a>Visit</a>
      </div>
      <div className="extraIcons">
        <a>
          <Icon name="github" />
          GitHub
        </a>
        <a>
          <Icon name="pin" />
          Pivotal Tracker
        </a>
      </div>
    </div>
  );
  return (
    <div className="ProjectsCard">
      <Card
        image={data.image}
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
