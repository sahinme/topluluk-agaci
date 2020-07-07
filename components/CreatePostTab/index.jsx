import React from "react";
import { useRouter } from "next/router";
import Paper from "@material-ui/core/Paper";
import { MDBIcon } from "mdbreact";
import { Avatar } from "@material-ui/core";
import { readLocalStorage } from "../../lib/helpers";

export default function CreatePostTab(props) {
  const router = useRouter();
  const { user, slug } = props;
  return (
    <Paper className="post_bar">
      {user && (
        <Avatar
          style={{ marginRight: "1rem" }}
          src={props.user.profileImagePath}
          className="header_avatar"
        />
      )}
      <input
        onClick={() => {
          const token = readLocalStorage("token");
          token
            ? router.push(`/salla?is=${slug ? slug : ""}`)
            : router.push("/giris-yap");
        }}
        placeholder="Salla Bişiler"
        className="post_bar_input"
        type="text"
      />
      <MDBIcon
        onClick={() => {
          const token = readLocalStorage("token");
          token
            ? router.push(`/salla?is=${slug ? slug : ""}`)
            : router.push("/giris-yap");
        }}
        far
        icon="image"
        size="2x"
        className="post_bar_icon"
      />
      <MDBIcon
        onClick={() => {
          const token = readLocalStorage("token");
          token
            ? router.push(`/salla?is=${slug ? slug : ""}`)
            : router.push("/giris-yap");
        }}
        icon="link"
        size="2x"
        className="post_bar_icon"
      />
    </Paper>
  );
}
