import React from "react";
import axios from "axios";
import { API_URL } from "../lib/services"
import { sitemapXML } from "../lib/helpers";

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const data = await axios
      .get(
        `${API_URL}/post/get-slugs`
      )
      .then(response => response.data);

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemapXML(data));
    res.end();
  }
}

export default Sitemap;