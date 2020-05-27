/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Card, Icon, Button, Modal } from "semantic-ui-react";

const ProjectCard = ({ data }) => {
  const { stacks } = data;
  const [open, setOpen] = useState(false);

  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const extra = (
    <div>
      <div className="extraLinks">
        <a onClick={show}>Stacks</a>
        <a>{data.demo ? "Demo" : ""}</a>
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
    </div>
  );
};

export { ProjectCard };
