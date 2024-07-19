import React from "react";
import { Link } from "react-router-dom";

type chatbotCardLink = {
  LinkUrl: string;
  CardName: string;
  Icon: any;
};

export default function CardLinkChatbot({
  LinkUrl,
  Icon,
  CardName,
}: chatbotCardLink) {
  return (
    <React.Fragment>
      <Link target="_blank" to={LinkUrl} className="card-link">
        {Icon}
        {CardName}
      </Link>
    </React.Fragment>
  );
}
