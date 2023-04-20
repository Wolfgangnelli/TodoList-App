import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router";
import { TasksLists } from "../../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import "./TaskListCard.scss";
import "swiper/css";

const TaskListCard = () => {
  const size = useWindowSize();
  let location = useLocation();

  return !!size && size === "XS" ? (
    <Swiper spaceBetween={30} slidesPerView={1.5} className="mt-4">
      {TasksLists.data.map((item, ids) => (
        <SwiperSlide key={ids}>
          <Card className="task-list-card">
            <LinkContainer to={`${location.pathname}/${item.id}`}>
              <div className="p-2">
                <h4>{item.title}</h4>
                <ul>
                  {item.tasks.map((task, idx) => (
                    <li key={idx}>{task.name}</li>
                  ))}
                </ul>
              </div>
            </LinkContainer>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <ul className="mt-4 list-unstyled d-flex flex-column justify-content-evenly align-items-center">
      {TasksLists.data.map((item, ids) => (
        <li key={ids} className="my-3 w-50">
          <Card className="task-list-card">
            <div className="p-2">
              <h4>{item.title}</h4>
              <ul className="">
                {item.tasks.map((task, idx) => (
                  <li key={idx}>{task.name}</li>
                ))}
              </ul>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default TaskListCard;
