import React, { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import { Container } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { API_URL } from "../../lib/services";
import Loader from "../../components/Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function Verify(props) {
  const router = useRouter();
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const { query } = router;
    const url = `${API_URL}auth/verify?code=${query.code}`;
    postData(url, {}).then((data) => {
      setLoading(false);
      setStatus(data.status);
    });
  }, []);

  if (loading) {
    return <Loader overlay={true} />;
  }
  return (
    <Container style={{ marginTop: "10rem" }} className="themed-container">
      <div className={classes.root}>
        {status && (
          <Alert severity="success">E-Posta başarıyla onaylandı</Alert>
        )}
      </div>
    </Container>
  );
}

export default withRouter(Verify);
