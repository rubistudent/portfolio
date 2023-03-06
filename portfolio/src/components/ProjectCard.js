import { Col,Button } from "react-bootstrap";
export const ProjectCard = ({ project}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={project.image_url} />
        <div className="proj-txtx">
          <h4>{project.title}</h4>
          <span>{project.description}</span>
        </div>
        <Button variant="danger">Danger</Button>
      </div>
    </Col>
  )
}
