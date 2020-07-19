import React from "react";
import axios from "axios";
import { API_URL } from "../lib/services"
import { sitemapXML } from "../lib/helpers";

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const data = await axios
      .get(`${API_URL}/post/get-slugs`)
    //console.log(data);
    //.then(response => response.data);

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemapXML(data.data));
    res.end();
  }
}

export default Sitemap;