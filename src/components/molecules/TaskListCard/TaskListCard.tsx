import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { TaskList, TaskDexie } from '../../../utils/types';
import "./TaskListCard.scss";
import "swiper/css";

interface Props {
  tasksLists: TaskList[]
  tasks: TaskDexie[]
}

const TaskListCard = (props: Props) => {
  const { tasksLists, tasks } = props;

  const size = useWindowSize();
  let location = useLocation();

  return !!size && size === "XS" ? (
    <Swiper spaceBetween={30} slidesPerView={1.5} className="mt-4">
      {tasksLists && tasksLists.map((item, ids) => (
        <SwiperSlide key={ids}>
          <Card className="task-list-card c-pointer">
            <LinkContainer to={`${location.pathname}/${item.id}`}>
              <div className="p-2">
                <h4>{item.title}</h4>
                <ul>
                  {tasks && tasks.map((task, idx) => {
                    return task.tasksListsId === item.id ? <li key={idx} className={task.completed ? 'text-decoration-line-through' : ''}>{task.name}</li> : null;
                  })}
                </ul>
              </div>
            </LinkContainer>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <ul className="mt-4 list-unstyled d-flex flex-column justify-content-evenly align-items-center">
      {tasksLists && tasksLists.map((item, ids) => (
        <li key={ids} className="my-3 w-50">
          <Card className="task-list-card c-pointer">
            <LinkContainer to={`${location.pathname}/${item.id}`}>
              <div className="p-2">
                <h4>{item.title}</h4>
                <ul className="">
                    {tasks && tasks.map((task, idx) => {
                      return task.tasksListsId === item.id ? <li key={idx} className={task.completed ? 'text-decoration-line-through' : ''} >{task.name}</li> : null;
                    })}
                </ul>
              </div>
            </LinkContainer>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default TaskListCard;