import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deletePost } from "../../../redux/actions/actionsPosts";
import "./style.scss";
import Icon from "../../../images/iconsSmall";

const DeletePostButton = ({ post, deletePost }) => {
  return (
    <span className="icon-delete-block">
      <FontAwesomeIcon
        icon={Icon.faTrashAlt}
        className="icon-delete"
        title="Delete the post"
        onClick={() => deletePost(post.uid)}
      />
    </span>
  );
};

const mapDispatchToProps = {
  deletePost,
};

export default connect(null, mapDispatchToProps)(DeletePostButton);
