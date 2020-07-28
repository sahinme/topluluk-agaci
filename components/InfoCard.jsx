import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';

import { Divider, Icon, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: '20px'
  },
  tag_card: {
    width: '100%',
    padding: '0 1rem',
    flexWrap: 'wrap'
  }
}));

export default function InfoCard(props) {
  const classes = useStyles();
  const { description, moderators } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.tag_card}>
        <Row className="com_desc_container">
          <b className="info_card_title">Hakkında</b>
        </Row>
        <Row>
          <p className="com_desc">{description}</p>
        </Row>
        <Row className="com_desc_container" style={{ display: 'grid' }}>
          <b className="info_card_title">Moderatörler</b>
        </Row>
        <Row style={{ padding: '1rem', display: 'grid' }}>
          {moderators &&
            moderators.map((m) => {
              return (
                <div key={m.username}>
                  <code key={m.username} className={classes.community_title}>
                    <Link href={`/u/[username]`} as={`/u/${m.username}`}>
                      <a style={{ color: 'blue' }}>{`u/${m.username}`}</a>
                    </Link>
                  </code>
                  <Divider style={{ margin: '4px 0 4px 0' }} />
                </div>
              );
            })}
        </Row>
      </Paper>
    </div>
  );
}
