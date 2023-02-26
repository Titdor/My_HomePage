import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard({title,description, imgUrl, url}) {
    return (
        <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <div>
          <a href={url}>{title}</a>
          </div>
          <span>{description}</span>
        </div>
      </div>
    </Col>
    )
}

export default ProjectCard;