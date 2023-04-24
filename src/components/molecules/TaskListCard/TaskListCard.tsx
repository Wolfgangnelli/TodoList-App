import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { TaskList, TaskDexie } from '../../../utils/types';
import { SidePanelContext } from '../../../app/App';
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
  const { handleOpenSidePanel, setTaskListId } = useContext(SidePanelContext);

  return !!size && size === "XS" ? (
    <Swiper spaceBetween={30} slidesPerView={1.5}>
      {tasksLists && tasksLists.map((item, ids) => (
        <SwiperSlide key={ids}>
          <Card className="task-list-card">
            <LinkContainer to={`${location.pathname}/${item.id}`} className="c-pointer card-main-content">
              <div className="p-2">
                <h4>{item.title}</h4>
                <ul>
                  {tasks && tasks.map((task, idx) => {
                    return task.tasksListsId === item.id ? <li key={idx} className={task.completed ? 'text-decoration-line-through' : ''}>{task.name}</li> : null;
                  })}
                </ul>
              </div>
            </LinkContainer>
            <div className="d-flex justify-content-center p-2">
              <span className="c-pointer px-2" onClick={() => {
                setTaskListId(item.id);
                handleOpenSidePanel();
                }}>
                <i className='fa-solid fa-pen-to-square'></i>
              </span>
              <span className='c-pointer px-2 text-danger'>
                <i className='fa-solid fa-trash'></i>
              </span>
            </div>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <ul className="list-unstyled d-flex flex-column justify-content-evenly align-items-center">
      {tasksLists && tasksLists.map((item, ids) => (
        <li key={ids} className="my-3 w-50">
          <Card className="task-list-card">
            <LinkContainer to={`${location.pathname}/${item.id}`} className="c-pointer card-main-content">
              <div className="p-2 h-100">
                <h4>{item.title}</h4>
                <ul className="">
                    {tasks && tasks.map((task, idx) => {
                      return task.tasksListsId === item.id ? <li key={idx} className={task.completed ? 'text-decoration-line-through' : ''} >{task.name}</li> : null;
                    })}
                </ul>
              </div>
            </LinkContainer>
            <div className="d-flex justify-content-center p-2">
              <span className="c-pointer px-2" onClick={() => {
                setTaskListId(item.id);
                handleOpenSidePanel();
                }}>
                <i className='fa-solid fa-pen-to-square'></i>
              </span>
              <span className='c-pointer px-2 text-danger'>
                <i className='fa-solid fa-trash'></i>
              </span>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default TaskListCard;