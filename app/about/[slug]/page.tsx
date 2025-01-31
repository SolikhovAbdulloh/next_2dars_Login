import { log } from "console";
import React from "react";

const AboutDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return <div>AboutDetails {slug}</div>;
};

export default AboutDetails;
