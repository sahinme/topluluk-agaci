import React from "react";
import axios from "axios";
import { API_URL } from "../lib/services"

export const sitemapXML = data => {

  let projectsXML = "";
  let comUrlsXml = "";
  data.map(post => {
    const projectURL = `https://saalla.com/${post.cSlug}/${post.pSlug}`;
    projectsXML += `
      <url>
        <loc>${projectURL}</loc>
        <priority>0.50</priority>
      </url>`;
  });

  data.map(post => {
    const comUrls = `https://saalla.com/t/${post.cSlug}`;
    comUrlsXml += `
      <url>
        <loc>${comUrls}</loc>
        <priority>0.50</priority>
      </url>`;
  });


  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${projectsXML}
      ${comUrlsXml}
    </urlset>`;
};

class Sitemap extends React.Component {

  /*  static async getInitialProps({ res }) {
     process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
     const data = await axios
       .get(`${API_URL}/post/get-slugs`)
       .then(response => response.data);
 
     res.setHeader("Content-Type", "text/xml");
     res.write(sitemapXML(data));
     res.end();
   } */
}

export async function getServerSideProps({ res }) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const data = await axios
    .get(`${API_URL}/post/get-slugs`)
    .then(response => response.data);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapXML(data));
  res.end();
  return { props: { data } }
}

export default Sitemap;