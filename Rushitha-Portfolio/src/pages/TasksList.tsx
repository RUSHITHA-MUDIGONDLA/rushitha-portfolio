import Task from "./Task";
import "./Task.css";
import { Popover } from "react-bootstrap";

export default function TaskList() {
  return (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Create Sprint Task</Popover.Header>
      <Popover.Body>
        <Task />
      </Popover.Body>
    </Popover>
  );
}
