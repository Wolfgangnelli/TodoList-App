import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router";
import { TasksList } from "../../../utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import "./TaskListCard.scss";
import "swiper/css";

const TasksLists: TasksList = {
  data: [
    {
      title: "Trip to Paris",
      id: 1,
      todos: [
        { title: "Book flight" },
        { title: "Passport check" },
        { title: "Hotel reservation" },
        { title: "Book flight" },
        { title: "Passport check" },
        { title: "Hotel reservation" },
      ],
    },
    {
      title: "Trip to Brasil",
      id: 2,
      todos: [
        { title: "Book flight" },
        { title: "Passport check" },
        { title: "Hotel reservation" },
        { title: "Book flight" },
        { title: "Passport check" },
        { title: "Hotel reservation" },
      ],
    },
    {
      title: "Trip to Italy",
      id: 3,
      todos: [
        { title: "Book flight" },
        { title: "Passport check" },
        { title: "Hotel reservation" },
      ],
    },
    {
      title: "Trip to Spain",
      id: 4,
      todos: [
        { title: "Book flight" },
        { title: "Passport check" },
        { title: "Hotel reservation" },
      ],
    },
    {
      title: "Trip to Germany",
      id: 5,
      todos: [
        { title: "Book flight" },
        { title: "Passport check" },
        { title: "Hotel reservation" },
      ],
    },
  ],
};

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
                  {item.todos.map((todo, idx) => (
                    <li key={idx}>{todo.title}</li>
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
                {item.todos.map((todo, idx) => (
                  <li key={idx}>{todo.title}</li>
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
